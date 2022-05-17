//ex1
const SumNumbersArray = (NumbersArray) => {
    NumbersArray.reduce((accumulator, number) => {
        return accumulator + number;
     } ,0)
}
console.log(SumNumbersArray(1, 2, 3, 4))