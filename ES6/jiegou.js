var user = {
    name: 'zzy',
    age: 12,
    sex: {
        school: 'k'
    }
};

let a = {
    ...user
};

console.log(...[1,2,3]);
console.log(...user);


const deepLoop = function () {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let newValue = arguments[i];
        for (let key in newValue) {
            if (newValue.hasOwnProperty(key)) {
                if (Object.prototype.toString.call(newValue[key]) === '[object Object]') {
                    obj[key] = deepLoop(newValue[key]);
                } else {
                    obj[key] = newValue[key];
                }
            }
        }
    }

    return obj;
};

deepLoop(user);

console.log(obj);

