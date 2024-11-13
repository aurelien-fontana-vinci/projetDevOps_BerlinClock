export class Main{

    berlinClock(date) {
        const minute = date.getMinutes();
        const hour = date.getHours();
        const second = date.getSeconds();
        
        const l1 = this.simpleMinutesLine(minute);
        const l2 = this.block5MinutesLine(minute);
        const l3 = this.simpleHoursLine(hour);
        const l4 = this.block5Hours(hour);
        const l5 = this.secondsLine(second);
        
        return l1 + l2 + l3 + l4 + l5;
      }


    simpleMinutesLine(minute) {
        let l1 = "0000"
        if(minute%10 === 1 || minute%10 === 6){
            l1 = "1000";
        } 

        if(minute%10 === 2 || minute%10 === 7){
            l1 = "1100";
        } 

        if(minute%10 === 3 || minute%10 === 8){
            l1 = "1110";
        } 

        if(minute%10 === 4 || minute%10 === 9){
            l1 = "1111";
        }
        return l1;
    }
  
    block5MinutesLine(minute) {
      let l2 = '00000000000';

      if (minute === 5){
        l2 = "10000000000";
    }

    if (minute ===10){
        l2 = "11000000000";
    }

    if (minute ===15){
        l2 = "11100000000";
    }

    if (minute ===20){
        l2 = "11110000000";
    }

    if (minute ===25){
        l2 = "11111000000";
    }

    if (minute ===30){
        l2 = "11111100000";
    }

    if (minute ===35){
        l2 = "11111110000";
    }

    if (minute ===40){
        l2 = "11111111000";
    }

    if (minute ===45){
        l2 = "11111111100";
    }

    if (minute ===50){
        l2 = "11111111110";
    }

    if (minute === 55){
        l2 = "11111111111";
    }
    return l2;
    }
  
    simpleHoursLine(hour) {
      let l3 = '0000';

      if (hour%10 === 1 || hour%10 === 6){
        l3 = "1000";
    }

    if (hour%10 === 2 || hour%10 === 7){
        l3 = "1100";
    }

    if (hour%10 === 3 || hour%10 === 8){
        l3 = "1110";
    }

    if (hour%10 === 4 || hour%10 === 9){
        l3 = "1111";
    }
      return l3;
    }
  
    block5Hours(hour) {
      let l4 = '0000';
      if (hour >= 5 && hour < 10){
        l4 = "1000";
    }

    if (hour >= 10 && hour < 15){
        l4 = "1100";
    }

    if (hour >= 15 && hour < 20){
        l4 = "1110";
    }

    if (hour >= 20){
        l4 = "1111";
    }
      return l4;
    }
  
    secondsLine(seconde) {
        let l5 ="0";
        if (seconde%2 === 0){
            l5 = "1";
            return l5;
        }else return l5;

    }
}