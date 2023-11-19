let current_users =["admin","developer","designer","Tester","Deployment Engineer"];
let new_users=["designer","Tester","Project Manager","Naive User"];

const current = current_users.map(word => word.toLowerCase());
new_users.map(word=>word.toLowerCase());
new_users.forEach(n => {
    let j=n;    
    let i=current.indexOf(n.toLowerCase());
        if(i>-1)
            console.log(new_users[i],"need to enter a new username");
        else
            console.log(j,"username is available.");
});