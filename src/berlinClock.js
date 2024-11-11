export class Main{

    berlinClock(date){
        var l1 = "0000";
        var l2 = "00000000000";
        var l3 = "0000";
        
        var minute = date.getMinutes();
        var hour = date.getHours();
        
        if(minute%10 === 1 || minute%10 === 6){
            l1 = "1000";
            return l1;
        } 

        if(minute%10 === 2 || minute%10 === 7){
            l1 = "1100";
            return l1;
        } 

        if(minute%10 === 3 || minute%10 === 8){
            l1 = "1110";
            return l1;
        } 

        if(minute%10 === 4 || minute%10 === 9){
            l1 = "1111";
            return l1;
        } 

        if (minute === 5){
            l2 = "10000000000";
            return l2;
        }

        if (minute ===10){
            l2 = "11000000000";
            return l2;
        }

        if (minute ===15){
            l2 = "11100000000";
            return l2;
        }

        if (minute ===20){
            l2 = "11110000000";
            return l2;
        }

        if (minute ===25){
            l2 = "11111000000";
            return l2;
        }

        if (minute ===30){
            l2 = "11111100000";
            return l2;
        }

        if (minute ===35){
            l2 = "11111110000";
            return l2;
        }

        if (minute ===40){
            l2 = "11111111000";
            return l2;
        }

        if (minute ===45){
            l2 = "11111111100";
            return l2;
        }

        if (minute ===50){
            l2 = "11111111110";
            return l2;
        }

        if (minute === 55){
            l2 = "11111111111";
            return l2;
        }


        if (hour%10 === 1 || hour%10 === 6){
            l3 = "1000";
            return l3;
        }

        if (hour%10 === 2 || hour%10 === 7){
            l3 = "1100";
            return l3;
        }

        if (hour%10 === 3 || hour%10 === 8){
            l3 = "1110";
            return l3;
        }

        if (hour%10 === 4 || hour%10 === 9){
            l3 = "1111";
            return l3;
        }

    }
}