// // Day-5
// #1.   stand inLine
// function nextInline(arr, item) {
//     arr.push(item);
//     return arr.shift();

// }
// var testArr = [1, 2, 3, 4, 5];
// console.log("before: " + JSON.stringify(testArr));
// console.log(nextInline(testArr, 6));
// console.log("after: " + JSON.stringify(testArr));


// #2. Boolean Values

// function testLogicalAnd(val) {
//     if (val <= 50 && val >= 25) {
//         return "yes";

//     }
//     return "no";

// }
// console.log(testLogicalAnd(10, "10"));



//#3. switch statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;

        case "b":
            answer = "bird";
            break;

        case "c":
            answer = "cat";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"));