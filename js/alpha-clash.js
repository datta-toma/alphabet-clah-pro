// function play() {
// //  step-1  hide the home screen . to hide the screen add the class haddien to the home section

// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection);

// //  show the playground

// const  playgroundSection = document.getElementById('play-ground');
// playgroundSection.classList.remove('hidden');
// // console.log(playgroundSection.classList);
// }

function continueGame() {
    // step-1 : generate a rendom alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet :',alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
    
}
function play() {
    hideElementById('home-screen');
    showElementById('play-ground')
    continueGame()
}

