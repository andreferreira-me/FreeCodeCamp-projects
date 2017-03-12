describe("intermediate-algorithm-scripting", function() {

    it("sum-all-numbers-in-a-range", function() {

        expect(typeof(sumAll([1, 4]))).toEqual('number');

        expect(sumAll([1, 4])).toBe(10);

        expect(sumAll([4, 1])).toBe(10);

        expect(sumAll([10, 5])).toBe(45);

        expect(sumAll([5, 10])).toBe(45);
    });

    it("diff-two-arrays", function() {

        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual(jasmine.any(Array));

        expect(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toContain("pink wool");

        expect(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toContain("diorite", "pink wool");

        expect(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toEqual([]);

        expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);

        expect(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toContain("piglet", 4);

        expect(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).toContain("snuffleupagus", "cookie monster", "elmo");

        expect(diffArray([1, "calf", 3, "piglet"], [7, "filly"])).toContain(1, "calf", 3, "piglet", 7, "filly");
    });


    it('roman-numeral-converter', () => {
        expect(convertToRoman(2)).toEqual('II');

        expect(convertToRoman(3)).toEqual('III');

        expect(convertToRoman(4)).toEqual('IV');

        expect(convertToRoman(5)).toEqual('V');

        expect(convertToRoman(9)).toEqual('IX');

        expect(convertToRoman(10)).toEqual('X');

        expect(convertToRoman(12)).toEqual('XII');

        expect(convertToRoman(16)).toEqual('XVI');

        expect(convertToRoman(29)).toEqual('XXIX');

        expect(convertToRoman(44)).toEqual('XLIV');

        expect(convertToRoman(45)).toEqual('XLV');

        expect(convertToRoman(68)).toEqual('LXVIII');

        expect(convertToRoman(83)).toEqual('LXXXIII');

        expect(convertToRoman(97)).toEqual('XCVII');

        expect(convertToRoman(99)).toEqual('XCIX');

        expect(convertToRoman(100)).toEqual('C');

        expect(convertToRoman(500)).toEqual('D');

        expect(convertToRoman(501)).toEqual('DI');

        expect(convertToRoman(649)).toEqual('DCXLIX');

        expect(convertToRoman(798)).toEqual('DCCXCVIII');

        expect(convertToRoman(891)).toEqual('DCCCXCI');

        expect(convertToRoman(1000)).toEqual('M');

        expect(convertToRoman(1004)).toEqual('MIV');

        expect(convertToRoman(1006)).toEqual('MVI');

        expect(convertToRoman(1023)).toEqual('MXXIII');

        expect(convertToRoman(2014)).toEqual('MMXIV');

        expect(convertToRoman(3999)).toEqual('MMMCMXCIX');

        expect(convertToRoman(13457)).toEqual('MMMMMMMMMMMMMCDLVII');

        expect(convertToRoman(27392)).toEqual('MMMMMMMMMMMMMMMMMMMMMMMMMMMCCCXCII');
    });

});