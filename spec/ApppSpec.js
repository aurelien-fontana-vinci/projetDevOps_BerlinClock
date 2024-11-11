import {Main} from '../src/berlinClock.js';

describe("berlinClock function should return time", function (){

    it("Test minute 1",function (){
        let main = new Main();

        const result = main.berlinClock(1);

        expect(result).toBe("1000");
    });

    it("Test minute 2",function (){
        let main = new Main();

        const result = main.berlinClock(2);

        expect(result).toBe("1100");
    });

    it("Test minute 3",function (){
        let main = new Main();

        const result = main.berlinClock(3);

        expect(result).toBe("1110");
    });

    it("Test minute 4",function (){
        let main = new Main();

        const result = main.berlinClock(4);

        expect(result).toBe("1111");
    });

    it("Test minute 6",function (){
        let main = new Main();

        const result = main.berlinClock(6);

        expect(result).toBe("1000");
    });

    it("Test minute 7",function (){
        let main = new Main();

        const result = main.berlinClock(7);

        expect(result).toBe("1100");
    });

    it("Test minute 8",function (){
        let main = new Main();

        const result = main.berlinClock(8);

        expect(result).toBe("1110");
    });

    it("Test minute 9",function (){
        let main = new Main();

        const result = main.berlinClock(9);

        expect(result).toBe("1111");
    });

    it("Test minute 11",function (){
        let main = new Main();

        const result = main.berlinClock(11);

        expect(result).toBe("1000");
    });

    it("Test minute 12",function (){
        let main = new Main();

        const result = main.berlinClock(12);

        expect(result).toBe("1100");
    });

    it("Test minute 13",function (){
        let main = new Main();

        const result = main.berlinClock(13);

        expect(result).toBe("1110");
    });

    it("Test minute 14",function (){
        let main = new Main();

        const result = main.berlinClock(14);

        expect(result).toBe("1111");
    });

    it("Test minute 16",function (){
        let main = new Main();

        const result = main.berlinClock(16);

        expect(result).toBe("1000");
    });

    it("Test minute 17",function (){
        let main = new Main();

        const result = main.berlinClock(17);

        expect(result).toBe("1100");
    });

    it("Test minute 18",function (){
        let main = new Main();

        const result = main.berlinClock(18);

        expect(result).toBe("1110");
    });

    it("Test minute 19",function (){
        let main = new Main();

        const result = main.berlinClock(19);

        expect(result).toBe("1111");
    });

    it("Test minute 5",function (){
        let main = new Main();

        const result = main.berlinClock(5);

        expect(result).toBe("10000000000");
    });

    it("Test minute 10",function (){
        let main = new Main();

        const result = main.berlinClock(10);

        expect(result).toBe("11000000000");
    });

    it("Test minute 15",function (){
        let main = new Main();

        const result = main.berlinClock(15);

        expect(result).toBe("11100000000");
    });

    it("Test minute 20",function (){
        let main = new Main();

        const result = main.berlinClock(20);

        expect(result).toBe("11110000000");
    });

    it("Test minute 25",function (){
        let main = new Main();

        const result = main.berlinClock(25);

        expect(result).toBe("11111000000");
    });


})