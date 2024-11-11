import {Main} from '../src/berlinClock.js';

describe("berlinClock function should return time", function (){

    let main = new Main();

    it("Test minute 1",function (){
        const date = new Date(0,0,0,0,1,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1000");
    });

    it("Test minute 2",function (){
        const date = new Date(0,0,0,0,2,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1100");
    });

    it("Test minute 3",function (){
        const date = new Date(0,0,0,0,3,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1110");
    });

    it("Test minute 4",function (){
        const date = new Date(0,0,0,0,4,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1111");
    });

    it("Test minute 6",function (){
        const date = new Date(0,0,0,0,6,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1000");
    });

    it("Test minute 7",function (){
        const date = new Date(0,0,0,0,7,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1100");
    });

    it("Test minute 8",function (){
        const date = new Date(0,0,0,0,8,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1110");
    });

    it("Test minute 9",function (){
        const date = new Date(0,0,0,0,9,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1111");
    });

    it("Test minute 11",function (){
        const date = new Date(0,0,0,0,11,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1000");
    });

    it("Test minute 12",function (){
        const date = new Date(0,0,0,0,12,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1100");
    });

    it("Test minute 13",function (){
        const date = new Date(0,0,0,0,13,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1110");
    });

    it("Test minute 14",function (){
        const date = new Date(0,0,0,0,14,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1111");
    });

    it("Test minute 16",function (){
        const date = new Date(0,0,0,0,16,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1000");
    });

    it("Test minute 17",function (){
        const date = new Date(0,0,0,0,17,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1100");
    });

    it("Test minute 18",function (){
        const date = new Date(0,0,0,0,18,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1110");
    });

    it("Test minute 19",function (){
        const date = new Date(0,0,0,0,19,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1111");
    });

    it("Test minute 5",function (){
        const date = new Date(0,0,0,0,5,0);
        const result = main.berlinClock(date);

        expect(result).toBe("10000000000");
    });

    it("Test minute 10",function (){
        const date = new Date(0,0,0,0,10,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11000000000");
    });

    it("Test minute 15",function (){
        const date = new Date(0,0,0,0,15,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11100000000");
    });

    it("Test minute 20",function (){
        const date = new Date(0,0,0,0,20,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11110000000");
    });

    it("Test minute 25",function (){
        const date = new Date(0,0,0,0,25,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11111000000");
    });

    it("Test minute 30",function (){
        const date = new Date(0,0,0,0,30,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11111100000");
    });

    it("Test minute 35",function (){
        const date = new Date(0,0,0,0,35,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11111110000");
    });

    it("Test minute 40",function (){
        const date = new Date(0,0,0,0,40,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11111111000");
    });

    it("Test minute 45",function (){
        const date = new Date(0,0,0,0,45,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11111111100");
    });

    it("Test minute 50",function (){
        const date = new Date(0,0,0,0,50,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11111111110");
    });

    it("Test minute 55",function (){
        const date = new Date(0,0,0,0,55,0);
        const result = main.berlinClock(date);

        expect(result).toBe("11111111111");
    });

    it("Test hour 1",function (){
        const date = new Date(0,0,0,1,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1000");
    });

    it("Test hour 2",function (){
        const date = new Date(0,0,0,2,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1100");
    });

    it("Test hour 3",function (){
        const date = new Date(0,0,0,3,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1110");
    });

    it("Test hour 4",function (){
        const date = new Date(0,0,0,4,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1111");
    });

    it("Test hour 6",function (){
        const date = new Date(0,0,0,6,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1000");
    });

    it("Test hour 7",function (){
        const date = new Date(0,0,0,7,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("1100");
    });

})