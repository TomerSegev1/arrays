//ex1
const SumNumbersArray = (NumbersArray) => {
    return NumbersArray.reduce((accumulator, number) => {
        return accumulator + number; 
     } ,0);
}

//ex2
const StrongNumbersArray = (NumbersArray) => {
    return NumbersArray.map(number => {
        for (i = 0; i < number; i++) {
            return number = number * number;
        }
    });
}

//ex3
const MulNumbersArray = (NumbersArray) => {
    return NumbersArray.reduce((accumulator, number) => {
         for (i = 0; i < number; i++) {
          return number * accumulator;
        }
    } ,1);
}

//ex4
const FindHighestNumber = (NumbersArray) => {
    return NumbersArray.reduce((accumulator, number) => {
        if(number > accumulator)
            return number;
        else
            return accumulator;
    }, NumbersArray[0]);
}
