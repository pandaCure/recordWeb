const numArr = [
    {
        name: 'zzy',
        sex: 'man'
    },
    {
        name: 'yu',
        sex: 'woman'
    }
];
let obj = {
    name: 'sb'
};

function getNum(num) {
    console.log(num.name);
}

obj = numArr.reduce((obj, value, index, arr) => {
    return getNum()
}, obj);