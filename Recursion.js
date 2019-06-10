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
//     else if(exponent===0){
//         return 1
//     }
//     else{
//         return base * powerCalculator(base,exponent-1)
//     }  

// }
// console.log(powerCalculator(10,4))