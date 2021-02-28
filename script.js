//word guessing game
randomWord = ""; //will store the generated random word

function generateWord() {
    //this will generate a random word on load
    randomWord1 = ['Rose', 'Sunflower', 'Lotus', 'lily', 'mogra'];
    randomWord2 = ['Java', 'Python', 'JavaScript'];
    randomWord3 = ['Delhi', 'Mumbai', 'Agra', 'Hyderabad', 'Pune', 'Aurangabad', 'Raipur'];
    Hint1 = "This is a flower name";
    Hint2 = "This is a programming Language name";
    Hint3 = "This is a city name";

    //genearating the random word
    var index = Math.floor(Math.random() * 3);
    if (index === 0) {
        randomWord = randomWord1[Math.floor(Math.random() * 5)];

        document.querySelector('#hint').textContent = "Hint: " + Hint1;

    }
    else if (index === 1) {
        randomWord = randomWord2[Math.floor(Math.random() * 3)];

        document.querySelector('#hint').textContent = "Hint: " + Hint2;

    }
    else {
        randomWord = randomWord3[Math.floor(Math.random() * 7)];

        document.querySelector('#hint').textContent = "Hint: " + Hint3;
    }

    //creating input elements as per the word length
    for (let j = 0; j < randomWord.length; j++) {
        var input = document.createElement("input");
        input.setAttribute("size", "1");
        input.setAttribute("id", "inputid" + j);
        var element = document.getElementById('inputWord');
        element.appendChild(input);
    }
    console.log(randomWord); //genarated random word

    //giving id to all the input elements
    for (let k = 0; k < randomWord.length; k++) {
        if (k % 3 === 0) {
            document.querySelector("#inputid" + k).value = randomWord[k];
        }
    }

}

a = ""; //will hold the word given as input

//this function will run when user clicks submit button
function checkWord() {

    //this function will check if the input word and random word are equal or not

    //taking the input letters and forming the word
    for (let m = 0; m < randomWord.length; m++) {
        a += document.querySelector("#inputid" + m).value;
    }
    console.log(a);

    //checking if the random word and input word matches or not
    if (randomWord === a) {
        //alert("Word is correct");
        document.querySelector("#message").textContent = "Congratulations! Your word is correct!";
        alert("Congratulations! Your word is correct!");
        location.reload();
    }
    else {
        document.querySelector("#message").textContent = "Wrong Word. Try again";
    }
}
//document.querySelector("#inputid" + l).textContent = randomWord[l];

//to reset the input elements
function resetWord() {

    for (let i = 0; i < randomWord.length; i++) {
        document.querySelector("#inputid" + i).value = '';
    }
    for (let k = 0; k < randomWord.length; k++) {
        if (k % 3 === 0) {
            document.querySelector("#inputid" + k).value = randomWord[k];
        }
    }
}

//reloading the page
function reloadPage() {
    location.reload();
}