function navSwitch() {
    let x = document.getElementById("navPanel");
    if (x.className === "navpanel") {
        x.className += " responsive";
    } else {
        x.className = "navpanel";
    }
}