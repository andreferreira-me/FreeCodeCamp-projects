function sumAll(arr) {
    "use strict";
    var sum = 0;

    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);

    for (var i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}