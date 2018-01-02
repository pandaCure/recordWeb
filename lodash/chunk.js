function chunk(arr, size = 1) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        throw new Error('please give a Array!');
    }
    const oldArr = [...arr];
    arr = oldArr;
    if (size) {
        size = parseInt(size, 10);
        if (Object.prototype.toString.call(size) === '[object Number]') {
            let arrlength = arr.length;
            let num = arrlength % size;
            if (num !== 0) {
                var sheng = arr.splice(-num + arrlength, num);
                num = (arrlength - num) % size;
            }

            var len = arr.length / size;

            newArrLength = num === 0 ? len : len + 1;
            let newArr = Array(newArrLength);
            for (var i = 0; i < len; i++) {
                newArr[i] = arr.splice(0, size);
            }
            if (sheng) {
                newArr[i] = sheng;
            }
            return newArr;
        }
    }
}
let a = [1, 2, 3, 3, 2, 1, 2, 3, 1];
console.log(chunk(a, 4));
console.log(a);