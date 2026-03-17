// you sick cheater
// at least try to solve the puzzle on your own first

let stage = 0;
let finalAttempts = 3;

const answers = [
    "locusts",
    "dogood",
    "ivy league",
    "red",
    "blue",
    "ford",
    "university of pennsylvania"
];

const hints = [
    "starting off strong. in achebe's account of umuofia, a brood of these 'pests' arrives in a large number. name that pest (plural).",
    "<i>corruptio optimi est pessima</i>. this inventor wrote for the <i>New-England Courant</i> as a teenager. what was the surname of his pseudonym?",
    "this athletic league was founded durng the same year as the supreme court's <i> brown v. board of education </i> decision and jonas salk's polio vaccine trials.",
    "easy question (?). what's my favorite color? (happens to be #990000)",
    "sike! or not. who knows really. second favorite color?",
    "this U.S. president was stuck in an elevator. give his surname.",
    "you have three attempts to guess the school. full names please."
];



function submitCode() {
    const inputField = document.getElementById("input");
    const input = inputField.value.toLowerCase().trim();
    const output = document.getElementById("output");
    const button = document.querySelector("button");

    if (stage === answers.length - 1) {
        // FINAL STAGE WITH LIMITED ATTEMPTS
        if (input === answers[stage]) {
            stage++;
            output.innerHTML += "<br>> Ya got it.<br><br>University of Pennsylvania<br><br> <i>if ya don't know it, google it.</i>";
            inputField.disabled = true;
            button.disabled = true;

            
            const duration = 5 * 1000;
            const end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#00ffcc', '#ffffff']
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#00ffcc', '#ffffff']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();

        } else {
            finalAttempts--;

            if (finalAttempts > 0) {
                output.innerHTML += `<br>> Incorrect. ${finalAttempts} attempt(s) remaining. Get better.`;
            } else {
                output.innerHTML += "<br>> Authorization permanently revoked. No guessing for you anymore.";
                inputField.disabled = true;
                button.disabled = true;
            }
        }

    } else {
        // NORMAL STAGES
        if (input === answers[stage]) {
            stage++;
            output.innerHTML += "<br>> Correct.<br>> Enter next authorization:";
            document.getElementById("hint").innerHTML = "";
        } else {
            output.innerHTML += "<br>> Incorrect.";
        }
    }

    inputField.value = "";
}

function showHint() {
    document.getElementById("hint").innerHTML =
        "> Question: " + hints[stage];
}

function closeIntro() {
    document.getElementById("introOverlay").style.display = "none";
}
