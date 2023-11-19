//Task 16:
let invitePersons=["Yar Muhammad","Jamshad", "Yousuf"];
console.log("I have found a bigger dinner table");
invitePersons.unshift("Usman");
invitePersons.push("Abdullah");
invitePersons.forEach(element => {
    console.log("Hello,",element, ", Would you please come to my home, I want to have a dinner");
});
