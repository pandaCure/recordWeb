let user = {
    name: 'zzy',
    sex: 'man',
    school: {
        primary: {
            name: '北京四中'
        }
    }
};

let a = Object.assign({}, user);
a.school.primary.name = 'woman';

console.log(user.school.primary.name);
console.log(a.school.primary.name);