/* ========================================= */
/* POBIERANIE ELEMENTÓW */
/* ========================================= */

const startScreen =
    document.getElementById("startScreen");

const questionScreen =
    document.getElementById("questionScreen");

const yesScreen =
    document.getElementById("yesScreen");

const noScreen =
    document.getElementById("noScreen");


const envelope =
    document.getElementById("envelope");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");


const yesMusic =
    document.getElementById("yesMusic");

const noMusic =
    document.getElementById("noMusic");


/* ========================================= */
/* ZMIANA EKRANU */
/* ========================================= */

function showScreen(screenToShow) {

    startScreen.classList.remove("active");

    questionScreen.classList.remove("active");

    yesScreen.classList.remove("active");

    noScreen.classList.remove("active");

    screenToShow.classList.add("active");
}


/* ========================================= */
/* KLIKNIĘCIE KOPERTY */
/* ========================================= */

envelope.addEventListener("click", function() {

    console.log("Koperta kliknięta!");

    showScreen(questionScreen);

});


/* ========================================= */
/* KLIKNIĘCIE TAK */
/* ========================================= */

yesButton.addEventListener("click", function() {

    console.log("Wybrano TAK!");

    showScreen(yesScreen);


    /* zatrzymujemy muzykę NIE */

    noMusic.pause();

    noMusic.currentTime = 0;


    /* uruchamiamy muzykę TAK */

    yesMusic.currentTime = 0;

    yesMusic.play().catch(function(error) {

        console.log(
            "Nie udało się odtworzyć muzyki:",
            error
        );

    });

});


/* ========================================= */
/* KLIKNIĘCIE NIE */
/* ========================================= */

noButton.addEventListener("click", function() {

    console.log("Wybrano NIE!");


    /* ===================================== */
    /* TRYB SMUTNY */
    /* ===================================== */

    document.body.classList.add("sad-mode");


    /* ===================================== */
    /* ZWYKŁE SERDUSZKA → ZŁAMANE SERCA */
    /* ===================================== */

    const hearts =
        document.querySelectorAll(".hearts span");

    hearts.forEach(function(heart) {

        heart.textContent = "💔";

    });


    /* ===================================== */
    /* POKAZUJEMY EKRAN NIE */
    /* ===================================== */

    showScreen(noScreen);


    /* ===================================== */
    /* ZATRZYMUJEMY MUZYKĘ TAK */
    /* ===================================== */

    yesMusic.pause();

    yesMusic.currentTime = 0;


    /* ===================================== */
    /* WŁĄCZAMY MUZYKĘ NIE */
    /* ===================================== */

    noMusic.currentTime = 0;

    noMusic.play().catch(function(error) {

        console.log(
            "Nie udało się odtworzyć muzyki:",
            error
        );

    });

});