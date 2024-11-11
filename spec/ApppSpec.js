import {Main} from '../src/berlinClock.js';

describe("berlinClock function should return time", function (){

    it("Test minute 1",function (){
        let main = new Main();

        const result = main.berlinClock(1);

        expect(result).toBe("1000");
    });

    it("Test minute 1",function (){
        let main = new Main();

        const result = main.berlinClock(2);

        expect(result).toBe("1100");
    });

})