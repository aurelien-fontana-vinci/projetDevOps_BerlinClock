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

})