import {Main} from '../src/berlinClock.js';

describe("berlinClock function should return time", function (){

    let main = new Main();

    it("Test minute 1",function (){
        const date = new Date(0,0,0,0,1,0);
        const result = main.berlinClock(date);

        expect(result).toBe("100000000000000000000001");
    });

    it("Test minute 2",function (){
        const date = new Date(0,0,0,0,2,0);
        const result = main.berlinClock(date);

        expect(result).toBe("110000000000000000000001");
    });

    it("Test minute 3",function (){
        const date = new Date(0,0,0,0,3,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111000000000000000000001");
    });

    it("Test minute 4",function (){
        const date = new Date(0,0,0,0,4,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111100000000000000000001");
    });

    it("Test minute 6",function (){
        const date = new Date(0,0,0,0,6,0);
        const result = main.berlinClock(date);

        expect(result).toBe("100000000000000000000001");
    });

    it("Test minute 7",function (){
        const date = new Date(0,0,0,0,7,0);
        const result = main.berlinClock(date);

        expect(result).toBe("110000000000000000000001");
    });

    it("Test minute 8",function (){
        const date = new Date(0,0,0,0,8,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111000000000000000000001");
    });

    it("Test minute 9",function (){
        const date = new Date(0,0,0,0,9,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111100000000000000000001");
    });

    it("Test minute 11",function (){
        const date = new Date(0,0,0,0,11,0);
        const result = main.berlinClock(date);

        expect(result).toBe("100000000000000000000001");
    });

    it("Test minute 12",function (){
        const date = new Date(0,0,0,0,12,0);
        const result = main.berlinClock(date);

        expect(result).toBe("110000000000000000000001");
    });

    it("Test minute 13",function (){
        const date = new Date(0,0,0,0,13,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111000000000000000000001");
    });

    it("Test minute 14",function (){
        const date = new Date(0,0,0,0,14,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111100000000000000000001");
    });

    it("Test minute 16",function (){
        const date = new Date(0,0,0,0,16,0);
        const result = main.berlinClock(date);

        expect(result).toBe("100000000000000000000001");
    });

    it("Test minute 17",function (){
        const date = new Date(0,0,0,0,17,0);
        const result = main.berlinClock(date);

        expect(result).toBe("110000000000000000000001");
    });

    it("Test minute 18",function (){
        const date = new Date(0,0,0,0,18,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111000000000000000000001");
    });

    it("Test minute 19",function (){
        const date = new Date(0,0,0,0,19,0);
        const result = main.berlinClock(date);

        expect(result).toBe("111100000000000000000001");
    });

    it("Test minute 5",function (){
        const date = new Date(0,0,0,0,5,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000010000000000000000001");
    });

    it("Test minute 10",function (){
        const date = new Date(0,0,0,0,10,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011000000000000000001");
    });

    it("Test minute 15",function (){
        const date = new Date(0,0,0,0,15,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011100000000000000001");
    });

    it("Test minute 20",function (){
        const date = new Date(0,0,0,0,20,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011110000000000000001");
    });

    it("Test minute 25",function (){
        const date = new Date(0,0,0,0,25,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011111000000000000001");
    });

    it("Test minute 30",function (){
        const date = new Date(0,0,0,0,30,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011111100000000000001");
    });

    it("Test minute 35",function (){
        const date = new Date(0,0,0,0,35,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011111110000000000001");
    });

    it("Test minute 40",function (){
        const date = new Date(0,0,0,0,40,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011111111000000000001");
    });

    it("Test minute 45",function (){
        const date = new Date(0,0,0,0,45,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011111111100000000001");
    });

    it("Test minute 50",function (){
        const date = new Date(0,0,0,0,50,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011111111110000000001");
    });

    it("Test minute 55",function (){
        const date = new Date(0,0,0,0,55,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000011111111111000000001");
    });

    it("Test hour 1",function (){
        const date = new Date(0,0,0,1,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000100000001");
    });

    it("Test hour 2",function (){
        const date = new Date(0,0,0,2,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000110000001");
    });

    it("Test hour 3",function (){
        const date = new Date(0,0,0,3,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000111000001");
    });

    it("Test hour 4",function (){
        const date = new Date(0,0,0,4,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000111100001");
    });

    it("Test hour 6",function (){
        const date = new Date(0,0,0,6,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000100010001");
    });

    it("Test hour 7",function (){
        const date = new Date(0,0,0,7,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000110010001");
    });

    it("Test hour 8",function (){
        const date = new Date(0,0,0,8,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000111010001");
    });

    it("Test hour 9",function (){
        const date = new Date(0,0,0,9,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000111110001");
    });

    it("Test hour 11",function (){
        const date = new Date(0,0,0,11,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000100011001");
    });

    it("Test hour 5",function (){
        const date = new Date(0,0,0,5,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000000010001");
    });

    it("Test hour 10",function (){
        const date = new Date(0,0,0,10,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000000011001");
    });

    it("Test hour 15",function (){
        const date = new Date(0,0,0,15,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000000011101");
    });

    it("Test hour 20",function (){
        const date = new Date(0,0,0,20,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000000011111");
    });

    it("Test seconde pair",function (){
        const date = new Date(0,0,0,0,0,0);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000000000001");
    });

    it("Test seconde impair",function (){
        const date = new Date(0,0,0,0,0,1);
        const result = main.berlinClock(date);

        expect(result).toBe("000000000000000000000000");
    });

})