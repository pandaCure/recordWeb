let user = {
    name: 'zzy',
    age: 12,
    sex: 'man'
};

function test(...obj) {
    console.log(arguments);
    console.log(obj);
};

test(user);
// 只会输出0 之后报错
// for (var i = 0; i < 4; i++) {
//     setTimeout(function (i) {
//         console.log(i);
//     }(i), i * 1000)
// }
//
setTimeout(function () {
    console.log(1);
}, 0);
Promise.resolve().then((resolve) => {
    console.log(9);
})

new Promise(function (resolve,reject) {
    console.log(2);
    for(var i = 0; i< 10000;i++){
        if (i === 9999){
            resolve()
        };
    }
    console.log(3);
    setTimeout(function () {
        console.log(8);
    },2000);
}).then(function (resolve) {
    console.log(4);
});
console.log(5);
for(var i = 0; i< 10000;i++){
    if (i === 9999) console.log(6);
}
console.log(7);

console.log('main1');

process.nextTick(function() {
    console.log('process.nextTick1');
});

setTimeout(function() {
    console.log('setTimeout');
    process.nextTick(function() {
        console.log('process.nextTick2');
    });
}, 0);

new Promise(function(resolve, reject) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise then');
});

console.log('main2');

