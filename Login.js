function alt() {
    var name1 = document.getElementById("Username").value;
    var pass = document.getElementById("Password").value;
    if (name1 === "Laurence" && pass === "1579") {
        alert("Welcome, " + name1 + "!");
        window.location.href = "Main.html"
    } else if (name1 === "Cleo") {
        alert("Go away "+name1+" please talk to BZL to access this site.");
        window.location.href = "incorrect.html"
    } else if (name1 === "Jackson") {
        alert("Welcome, " + name1 + "!");
        window.location.href = "incorrect.html"
    }else {
        alert("Incorrect Username")
    }
}
