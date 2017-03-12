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
});