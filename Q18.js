//Task 18:
var placesToVisit = ["Makkah", "Turkey", "Capadocia", "Germany", "Finland"];
console.log("My places to visit");
console.log(placesToVisit);
var duplicatePlacesToVist = placesToVisit.slice().sort();
console.log("\nMy places to visit in the alphabetical order");
console.log(duplicatePlacesToVist);
console.log("\nMy places to visit in the original state");
console.log(placesToVisit);
/*duplicatePlacesToVist = placesToVisit.slice();
// Sort the new array in reverse alphabetical order
duplicatePlacesToVist.sort((a, b) => b.localeCompare(a));*/
console.log("\nMy places to visit in the reverse alphabetical order");
console.log(duplicatePlacesToVist.reverse());
console.log("Reverse the order of original list:", placesToVisit.reverse());
console.log("Reverse the already reversed list:", placesToVisit.reverse());
console.log("Sort the original list alphabetically:", placesToVisit.sort());
console.log("Reverse the original alphabetically Sorted list :", placesToVisit.reverse());
