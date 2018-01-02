function chunk(array, size, guard) {
    if (guard ? isIterateeCall(array, size, guard) : size == null) {
        size = 1;
    } else {
        size = nativeMax(nativeFloor(size) || 1, 1);
    }
    var index = 0,
        length = array ? array.length : 0,
        resIndex = -1,
        result = Array(nativeCeil(length / size));

    while (index < length) {
        result[++resIndex] = baseSlice(array, index, (index += size));
    }
    return result;
}

function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
        return false;
    }
    var type = typeof index;
    if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)) {
        var other = object[index];
        return value === value ? (value === other) : (other !== other);
    }
    return false;
}

function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;

    start = start == null ? 0 : (+start || 0);
    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : (+end || 0);
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}