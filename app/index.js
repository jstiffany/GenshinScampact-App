let primos = document.getElementById("primosDisplay");
let pity = document.getElementById("pityDisplay");

let wishType = document.getElementById("wishType");
let primoGain = document.getElementById("primoGain");
let obtainedChar = document.getElementById("obtainedChar");

let alertOverlay = document.getElementById("alertOverlay")
let eventAlert = document.getElementById("eventAlert")
let wishAlert = document.getElementById("wishAlert")
let mainbrokeAlert = document.getElementById("brokeAlert")

const characters = ["Lynette", "Sucrose", "Bennett"];
let obtained = [];

const randomprimoList = [30, 50, 100, 120, 150, 200, 250, 300]

// beginning stuff

let mainPrimos = 1600;
let mainPity = 0;

primos.textContent = mainPrimos;
pity.textContent = mainPity;

// other func

function luckChecker() {
    let chance = Math.floor(Math.random() * 1000) + 1

    if (mainPity === 90) {
        mainPity = 0

        obtained.push("Lyney")

        return true
    } else if (mainPity >= 75 && chance >= 300) {
        mainPity = 0

        obtained.push("Lyney")

        return true
    } else if (mainPity >= 40 && chance <= 6) {
        mainPity = 0

        obtained.push("Lyney")

        return true
    }
    return false
}

function eventUh() {
    closeAlert()
    let random = Math.floor(Math.random() * randomprimoList.length)
    let randomPrimo = randomprimoList[random]

    mainPrimos += randomPrimo
    primos.textContent = mainPrimos

    primoGain.textContent = randomPrimo;
    alertOverlay.style.display = "flex";
    eventAlert.style.display = "block";
}

function showeventAlert() {
    eventAlert.style.display = "block";
}

function showwishAlert(type, randomChar) {
    wishType.textContent = type
    obtainedChar.textContent = randomChar

    alertOverlay.style.display = "flex";
    wishAlert.style.display = "block";
}

function showbrokeAlert() {
    alertOverlay.style.display = "flex";
    mainbrokeAlert.style.display = "block";
}

function closeAlert() {
    alertOverlay.style.display = "none";
    eventAlert.style.display = "none";
    wishAlert.style.display = "none";
    mainbrokeAlert.style.display = "none";
}

// main pull func

function singlePull() {
    if (mainPrimos >= 160) {
        mainPrimos -= 160
        mainPity += 1

        let lyney = luckChecker()

        let result = lyney ? "Lyney" : "a weapon"

        if (!lyney) {
            obtained.push("Weapon")
        }
        primos.textContent = mainPrimos
        pity.textContent = mainPity

        showwishAlert(1, result)
    } else {
        showbrokeAlert()
    }
}

function multiPull() {
    if (mainPrimos >= 1600) {
        mainPrimos -= 1600
        mainPity += 10

        primos.textContent = mainPrimos
        pity.textContent = mainPity

        let randomChar = characters[Math.floor(Math.random() * characters.length)]
        let lyney = luckChecker()

        let result = lyney ? "Lyney" : randomChar

        if (!lyney) {
            obtained.push(randomChar)
        }
        primos.textContent = mainPrimos
        pity.textContent = mainPity

        showwishAlert(10, result)
    } else {
        showbrokeAlert()
    }
}

// main code