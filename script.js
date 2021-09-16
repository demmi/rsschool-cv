function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, 0));
}

async function toggleMenuIcon() {
    let a = document.querySelector(".header__menu")
    let x = document.getElementById("burger");
    let y = Number(getComputedStyle(x).fontSize.slice(0, -2));
    let step = 3;
    if (x.className === "fa fa-bars fa-2x") {
        for (let i = y; i > 0; i -= step) {
            x.style.fontSize = `${i}px`;
            await sleep();
        }
        x.style.fontSize = `${0}px`;
        x.className = "fa fa-times fa-2x";
        a.classList.add("active")
        for (let i = 0; i <= y; i += step) {
            x.style.fontSize = `${i}px`;
            await sleep();
        }
        x.style.fontSize = `${y}px`;

    } else {
        for (let i = y; i > 0; i -= step) {
            x.style.fontSize = `${i}px`;
            await sleep();
        }
        x.style.fontSize = `${0}px`;
        x.className = "fa fa-bars fa-2x";
        a.classList.remove("active")
        for (let i = 0; i <= y; i += step) {
            x.style.fontSize = `${i}px`;
            await sleep();
        }
        x.style.fontSize = `${y}px`;
    }
}