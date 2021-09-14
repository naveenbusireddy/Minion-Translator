var inputText = document.querySelector("#input-text");

var translateBtn = document.querySelector("#translate-btn");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL+"?text="+input
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Something wrong with server !, try after some time.")
}

function clickHandller() {
    fetch (getTranslationURL(inputText.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)    
};

translateBtn.addEventListener("click", clickHandller)

// console.log("Welcome JS is working in HTML");