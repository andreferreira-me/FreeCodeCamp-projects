function diffArray(arr1, arr2) {
    "use strict";
    var newArr = [];
    var found = false;

    for (var x = 0; x <= arr1.length; x++) {
        found = false;
        for (var y = 0; y <= arr2.length; y++) {
            if (arr1[x] == arr2[y]) {
                found = true;
                break;
            }
        }
        if (found === false) {
            newArr.push(arr1[x]);
        }
    }

    for (var x = 0; x <= arr2.length; x++) {
        found = false;
        for (var y = 0; y <= arr1.length; y++) {
            if (arr2[x] == arr1[y]) {
                found = true;
                break;
            }
        }
        if (found === false) {
            newArr.push(arr2[x]);
        }
    }

    return newArr;
}