var username = ["admin", "developer", "designer", "Tester", "Deployment Engineer"];
if (username.length > 0)
    console.log("The list is not empty");
else
    console.log("We need to find some users");
username.splice(0);
if (username.length > 0)
    console.log("The list is not empty");
else
    console.log("We need to find some users");
