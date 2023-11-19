//Task 17:
let invitation=["Yar Muhammad","Jamshad", "Yousuf"];
console.log("I can invite only two people for dinner.");
for(let i=2;i<invitation.length;i++)
    console.log(invitation.pop(),"sorry I can’t invite you to dinner");
console.log("Hello,",invitation, ", You're still invited for the dinner");
while(invitation.length!=0){
    invitation.pop();
}
console.log("My invitation list is :",invitation);