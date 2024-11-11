export class Main{

    berlinClock(date){
        var l1 = "0000";
        var l2 = "00000000000";


        if(date%10 === 1 || date%10 === 6){
            l1 = "1000";
            return l1;
        } 

        if(date%10 === 2 || date%10 === 7){
            l1 = "1100";
            return l1;
        } 

        if(date%10 === 3 || date%10 === 8){
            l1 = "1110";
            return l1;
        } 

        if(date%10 === 4 || date%10 === 9){
            l1 = "1111";
            return l1;
        } 

        if (date === 5){
            l2 = "10000000000";
            return l2;
        }

        if (date ===10){
            l2 = "11000000000";
            return l2;
        }

        if (date ===15){
            l2 = "11100000000";
            return l2;
        }

        if (date ===20){
            l2 = "11110000000";
            return l2;
        }

        if (date ===25){
            l2 = "11111000000";
            return l2;
        }

        if (date ===30){
            l2 = "11111100000";
            return l2;
        }

        if (date ===35){
            l2 = "11111110000";
            return l2;
        }

        if (date ===40){
            l2 = "11111111000";
            return l2;
        }

        if (date ===45){
            l2 = "11111111100";
            return l2;
        }

        if (date ===50){
            l2 = "11111111110";
            return l2;
        }

    }
}