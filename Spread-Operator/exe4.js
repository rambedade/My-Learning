
//Spread Example 4: How Spread Works in an Object Literal

const myNames = ["Oluwatobi", "Sofela"];
const bio = { ...myNames, runs: "codesweetly.com" };

console.log(bio);

// The invocation above will return:
//{ 0: "Oluwatobi", 1: "Sofela", runs: "codesweetly.com" }