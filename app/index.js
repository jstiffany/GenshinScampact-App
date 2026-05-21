let primos = document.getElementById("primosDisplay");
let pity = document.getElementById("pityDisplay");

const characters = ["Lynette", "Sucrose", "Bennett"];
let obtained = []

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
    let random = Math.floor(Math.random() * randomprimoList.length)
    let randomPrimo = randomprimoList[random]

    mainPrimos += randomPrimo
    primos.textContent = mainPrimos
}

// main pull func

function singlePull() {
    if (mainPrimos >= 160) {
        mainPrimos -= 160
        mainPity += 1

        let randomChar = characters[Math.floor(Math.random() * characters.length)]
        let lyney = luckChecker()

        if (!lyney) {
            obtained.push(randomChar)
        }
        primos.textContent = mainPrimos
        pity.textContent = mainPity
    } else {
        // add alert after creation
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

        if (!lyney) {
            obtained.push(randomChar)
        }
        primos.textContent = mainPrimos
        pity.textContent = mainPity
    } else {
        // add alert after creation
    }
}

// main code