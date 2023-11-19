let usernames=["admin","developer","designer","Tester","Deployment Engineer"];

usernames.forEach(n =>{
    if(n=="admin")
        console.log("Hello,", n, "would you like to see a status report?");
    else
    console.log("Hello,", n, "thank you for logging in again.")
});