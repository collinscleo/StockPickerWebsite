function alt() {
    var name1 = document.getElementById("Username").value;
    if (name1 === "Laurence") {
        alert("Welcome, " + name1 + "!");
        window.location.href = "Main.html"
    } else if (name1 === "Cleo") {
        alert("Go away "+name1+" please talk to BZL to access this site.");
        window.location.href = "incorrect.html"
    } else {
        alert("Incorrect Username")
    }
}
