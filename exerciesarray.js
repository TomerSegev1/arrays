//ex1
const sumNumbersArray = (numbersArray) => {
    return numbersArray.reduce((accumulator, number) => {
        return accumulator + number; 
     } ,0);
}

//ex2
const strongNumbersArray = (numbersArray) => {
    return numbersArray.map(number => {
        for (i = 0; i < number; i++) {
            return number = number * number;
        }
    });
}

//ex3
const mulNumbersArray = (numbersArray) => {
    return numbersArray.reduce((accumulator, number) => {
         for (i = 0; i < number; i++) {
          return number * accumulator;
        }
    } ,1);
}

//ex4
const findHighestNumber = (numbersArray) => {
    return numbersArray.reduce((accumulator, number) => {
        if(number > accumulator)
            return number;
        else
            return accumulator;
    }, numbersArray[0]);
}

//ex5
const higherThanSix = (numbersArray) => {
    return numbersArray.filter(number => {
        return number > 6;
    });
}

//ex6
const stringsLengths = (stringsArray) => {
    return stringsArray.map(string => {
        return string.length;
    });
} 

//ex7
const stringsLengthsExtra = (stringsArray) => {
    return stringsArray.map(string => {
        return string + string.length;
    });
}  

//ex8
const stringsExtra = (stringsArray) => {
    return stringsArray.map(string => {
        return string + "";
    });
}

//ex9
const sumPositiveNumbers = (numbersArray) => {
    return numbersArray.filter(number => {
        return number > 0;
    }).reduce((accumulator, number) => {
        return accumulator + number;
    } ,0)
} 
