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

// // inputs are a string and a separator for the string
// // output is a string without the separator

// function stringSplitter(str, sep){
//     if(str==''){
//         return ''
//     }
//     else if(str[0]==sep){
//         return stringSplitter(str.slice(1),sep)
//     }
//     return str[0] + stringSplitter(str.slice(1),sep)
    
// }

// console.log(stringSplitter('12345672345','2'));

// // input is the nth fibonacci Number
// // output is the list of nth fibonacci sequence
// // for each recursion the input is the remaining number of fibonacci number need to generate
// // for each recursion the output is the fibonacci number

// function Fibonacci(num){
//     if(num==0){
//         return 0
//     }
//     if (num===1){
//         return 1
//     }
//     return Fibonacci(num-2)+Fibonacci(num-1)
// }
let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

function Maze(maze, x=0, y=0, visited=[], steps=''){
    if (maze[y][x]==='e'){
        return steps
    }
     visited.push(`[${y}][${x}]`)
     if (y+1 <maze.length){
         if( maze[y+1][x] !=='*' && !visited.includes(`[${y+1}][${x}]`)){

             if(Maze(maze, x, y+1, [...visited], steps+'D')){
                 return console.log('Path to exit '+Maze(maze, x, y+1, [...visited], steps+'D'))
             }
         }
     }
     if (x+1 < maze[y].length){
         if(maze[y][x+1] !=='*' && !visited.includes(`[${y}][${x+1}]`)){

            if(Maze(maze, x+1, y, [...visited], steps+'R')){
                return (console.log('Path to exit '+Maze(maze, x+1, y, [...visited], steps+'R')))
            }
         }
     }
     if(y-1 >=0){
         if(maze[y-1][x] !=='*' && !visited.includes(`[${y-1}][${x}]`)){

            if(Maze(maze, x, y-1, [...visited], steps+'U')){
                return console.log('Path to exit '+Maze(maze, x, y-1, [...visited], steps+'U'))
            }

     }
     if(x-1 >= 0){
        if(maze[y][x-1] !=='*' && !visited.includes(`[${y}][${x-1}]`)) {

            if(Maze(maze, x-1, y, [...visited], steps+'L')){
                return console.log('Path to exit '+Maze(maze, x-1, y, [...visited], steps+'L'))
            }

     }
}
}}   
console.log(Maze(mySmallMaze))
