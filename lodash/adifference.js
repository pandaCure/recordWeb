var difference = restParam(function(array, values) {
    return (isObjectLike(array) && isArrayLike(array))
        ? baseDifference(array, baseFlatten(values, false, true))
        : [];
});
var nativeMax = Math.max;
function restParam(func, start) {
    // if (typeof func != 'function') {
    //     throw new TypeError(FUNC_ERROR_TEXT);
    // }
    start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
    return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            rest = Array(length);

        while (++index < length) {
            rest[index] = args[start + index];
        }
        switch (start) {
            case 0: return func.call(this, rest);
            case 1: return func.call(this, args[0], rest);
            case 2: return func.call(this, args[0], args[1], rest);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
            otherArgs[index] = args[index];
        }
        otherArgs[start] = rest;
        return func.apply(this, otherArgs);
    };
}

function isObjectLike(value) {
    return !!value && typeof value == 'object';
}

function isArrayLike(value) {
    return value != null && isLength(getLength(value));
}

function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

function baseDifference(array, values) {
    var length = array ? array.length : 0,
        result = [];

    if (!length) {
        return result;
    }
    var index = -1,
        indexOf = getIndexOf(),
        isCommon = indexOf === baseIndexOf,
        cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
        valuesLength = values.length;

    if (cache) {
        indexOf = cacheIndexOf;
        isCommon = false;
        values = cache;
    }
    outer:
        while (++index < length) {
            var value = array[index];

            if (isCommon && value === value) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                    if (values[valuesIndex] === value) {
                        continue outer;
                    }
                }
                result.push(value);
            }
            else if (indexOf(values, value, 0) < 0) {
                result.push(value);
            }
        }
    return result;
}

function baseFlatten(array, isDeep, isStrict, result) {
    result || (result = []);

    var index = -1,
        length = array.length;

    while (++index < length) {
        var value = array[index];
        if (isObjectLike(value) && isArrayLike(value) &&
            (isStrict || isArray(value) || isArguments(value))) {
            if (isDeep) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, isDeep, isStrict, result);
            } else {
                arrayPush(result, value);
            }
        } else if (!isStrict) {
            result[result.length] = value;
        }
    }
    return result;
}

function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}