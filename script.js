const morseCode = {
    A: ".-", B: "-...", C: "-.-.",
    D: "-..", E: ".", F: "..-.",
    G: "--.", H: "....", I: "..",
    J: ".---", K: "-.-", L: ".-..",
    M: "--", N: "-.", O: "---",
    P: ".--.", Q: "--.-", R: ".-.",
    S: "...", T: "-", U: "..-",
    V: "...-", W: ".--", X: "-..-",
    Y: "-.--", Z: "--..",

    0: "-----", 1: ".----",
    2: "..---", 3: "...--",
    4: "....-", 5: ".....",
    6: "-....", 7: "--...",
    8: "---..", 9: "----.",

    " ": "/"
};

const reverseMorse = {};

for(let key in morseCode){
    reverseMorse[morseCode[key]] = key;
}

function textToMorse(){

    const input =
        document.getElementById("inputText")
        .value
        .toUpperCase();

    let result = "";

    for(let char of input){

        if(morseCode[char]){
            result += morseCode[char] + " ";
        }
    }

    document.getElementById("outputText")
    .value = result.trim();
}

function morseToText(){

    const input =
        document.getElementById("inputText")
        .value
        .trim();

    const morseWords =
        input.split(" / ");

    let result = "";

    morseWords.forEach(word => {

        const letters =
            word.split(" ");

        letters.forEach(letter => {

            if(reverseMorse[letter]){
                result += reverseMorse[letter];
            }
        });

        result += " ";
    });

    document.getElementById("outputText")
    .value = result.trim();
}

function copyResult(){

    const output =
        document.getElementById("outputText");

    output.select();

    navigator.clipboard.writeText(
        output.value
    );

    alert("Copied Successfully!");
}

function clearAll(){

    document.getElementById("inputText")
    .value = "";

    document.getElementById("outputText")
    .value = "";
}