//Task 16:
var invitePerson = ["Yar Muhammad", "Jamshad", "Yousuf"];
console.log("I have found a bigger dinner table");
invitePerson.unshift("Usman");
invitePerson.push("Abdullah");
invitePerson.forEach(function (element) {
    console.log("Hello,", element, ", Would you please come to my home, I want to have a dinner");
});
console.log("I can invite only two people for dinner.");
