export class Main{

    berlinClock(date){
        var l1 = "0000";

        if(date%10 === 1 || date === 6){
            l1 = "1000";
            return l1;
        } 

        if(date%10 === 2 || date === 7){
            l1 = "1100";
            return l1;
        } 

        if(date%10 === 3 || date === 8){
            l1 = "1110";
            return l1;
        } 

        if(date%10 === 4 || date === 9){
            l1 = "1111";
            return l1;
        } 




    }
}