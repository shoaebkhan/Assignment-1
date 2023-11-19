//Task 15: Invite persons to dinner
let InvitePersons=["Yar Muhammad","Jamshad", "Yousuf"];
console.log(InvitePersons[2], "is unable to attend the dinner");
InvitePersons.splice(2);
/*unable to replace the spliced elements, I can either use push, to add at the end, 
or unshift, to add at the front of array.*/
InvitePersons.unshift("Sheraz Majeed");
//InvitePersons[2]=InvitePersons[2].replace("Yousuf","Sheraz Majeed");
console.log("Hello,",InvitePersons, ", Would you please come to my home, I want to have a dinner");
