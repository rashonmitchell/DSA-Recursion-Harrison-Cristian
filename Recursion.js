// // input number of sheep.
// // output number of sheep + String
// // for each recursive call input is the sheep number -1
// // for each recursive call output is the number of sheep + string || base string
// function sheep (number_of_sheep){
//     if (number_of_sheep<=0){
//         return console.log('All sheep jumped over the fence')
//     }
//     console.log(number_of_sheep+':Another sheep jump over the fence')
//     sheep(number_of_sheep-1)
// }
// sheep(3)

// // inputs are the base number and the exponent number
// // output is the base number to the power of the exponent number
// // for each recursive call we multiply the number by the base number we got from last recursive call
// // for each recursive call the output is the result we got from last call
// function powerCalculator(base, exponent){
//     if(exponent<0){
//         return 'exponent should be >=0'
//     }
//     if(exponent===0){
//         return 1
//     }
    
//     return base * powerCalculator(base,exponent-1)

// }
// console.log(powerCalculator(10,4))

// input: a string
// output: the string reversed
// recursive input: string minus the last letter
// recursive output: the new last letter

// function stringReverse(string) {
//   if (string.length === 0) {
//     return ''
//   }
//   if (string.length === 1) {
//     return string
//   }

//   return string[string.length-1] + stringReverse(string.slice(0, string.length-1))
// }

// console.log(stringReverse('cat'))

// input: number nth triangular number 
// output: (number of dots composing a triangle with n dots on a side and is equal to the sum of the n number from 1 to n)
// recursive input: nth triangular number - 1
// recursive output: nth triangular number + new number 

// function calcTriNumber(nthNum) {
//   if (nthNum === 1) {
//     return 1
//   }

//   return nthNum + calcTriNumber(nthNum - 1)
// }

// console.log(calcTriNumber(7))