function convertToRoman(num) {
    'use strict';
    var roman = '';
    var i;

    if (num >= 1000) {
        var div1000 = num / 1000;

        for (i = 1; i <= div1000; i++) {
            roman = roman.concat('M');
            num -= 1000;
        }
    }

    if (num >= 900) {
        roman = roman.concat('CM');
        num -= 900;
    }

    if (num >= 500) {
        roman = roman.concat('D');
        num -= 500;
    }

    if (num >= 400) {
        roman = roman.concat('CD');
        num -= 400;
    }

    if (num >= 100) {
        var div100 = num / 100;

        for (i = 1; i <= div100; i++) {
            roman = roman.concat('C');
            num -= 100;
        }
    }

    if (num >= 90) {
        roman = roman.concat('XC');
        num -= 90;
    }

    if (num >= 50) {
        roman = roman.concat('L');
        num -= 50;
    }

    if (num >= 40) {
        roman = roman.concat('XL');
        num -= 40;
    }

    if (num >= 10) {

        var div10 = num / 10;

        for (i = 1; i <= div10; i++) {
            roman = roman.concat('X');
            num -= 10;
        }
    }

    if (num == 9) {
        roman = roman.concat('IX');
    }

    if (num < 9 && num >= 5) {
        roman = roman.concat('V');
        num -= 5;
    }

    if (num == 4) {
        roman = roman.concat('IV');
    } else if (num < 4) {
        for (i = 0; i < num / 1; i++) {
            roman = roman.concat('I');
        }
    }

    return roman;
}

convertToRoman(83);