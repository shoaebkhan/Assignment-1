var current_users = ["admin", "developer", "designer", "Tester", "Deployment Engineer"];
var new_users = ["designer", "Tester", "Project Manager", "Naive User"];
var current = current_users.map(function (word) { return word.toLowerCase(); });
new_users.map(function (word) { return word.toLowerCase(); });
new_users.forEach(function (n) {
    var j = n;
    var i = current.indexOf(n.toLowerCase());
    if (i > -1)
        console.log(new_users[i], "need to enter a new username");
    else
        console.log(j, "username is available.");
});
