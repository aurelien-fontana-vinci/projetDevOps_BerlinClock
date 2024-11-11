export class Main{

    berlinClock(date){
        var l1 = "0000";

        if(date === 1 || date === 6){
            l1 = "1000";
            return l1;
        } 

        if(date === 2 || date === 7){
            l1 = "1100";
            return l1;
        } 

        if(date === 3 || date === 8){
            l1 = "1110";
            return l1;
        } 

        if(date === 4 || date === 9){
            l1 = "1111";
            return l1;
        } 


    }
}