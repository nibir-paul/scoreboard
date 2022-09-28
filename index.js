let homeCount = document.getElementById("home-score")
let homeScore = 0
let guestCount = document.getElementById("guest-score")
console.log(guestCount)
let guestScore = 0

function homeplusone() {
    homeScore += 1
    homeCount.textContent = homeScore
}

function homeplustwo() {
    homeScore += 2
    homeCount.textContent = homeScore
}

function homeplusthree() {
    homeScore += 3
    homeCount.textContent = homeScore
}

function guestplusone() {
    guestScore += 1
    guestCount.textContent = guestScore
}

function guestplustwo() {
    guestScore += 2
    guestCount.textContent = guestScore
}

function guestplusthree() {
    guestScore += 3
    guestCount.textContent = guestScore
}