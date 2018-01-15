function diffenerce(arr, val = []) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') {
        console.log('请输入数组');
    }
    // 对数组去重
    var newArr = [...new Set(arr)];
    if (val.length !== 0 && Object.prototype.toString.call(arr) === '[object Array]') {
        for (var index = 0; index < val.length; index++) {
            var s = newArr.indexOf(val[index])
            if(~s !== 0){
                newArr.splice(s,1);
            }
        }

    } else {
        console.log('请输入数组进行比较');
    }

    return newArr;
}

console.log(diffenerce([1,2,3,4,2,1,3,2],[1,2,3,4]));