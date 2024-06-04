const desktopSize = () => {
    const mediaQuery1 = window.matchMedia('(min-width: 375px)');
    const questions = document.getElementsByClassName('question');
    const imgButtons = document.getElementsByTagName('button');
    const questionsAndAnswers = document.getElementsByClassName('questions-and-answers');
    const newP = document.getElementsByClassName('inserted-p');
    const divCont = document.getElementById('white-container');

    if (mediaQuery1) {
        const buttonToggle0 = () => {
            if (imgButtons[0].innerHTML === '<img src="./icon-plus.svg" alt="purple plus icon">') {
                questionsAndAnswers[0].style.height = '160px';
                imgButtons[0].innerHTML = '<img src="./icon-minus.svg" alt="dark minus icon">';
                newP[0].style.display = 'block';
                divCont.style.height = '560px';
            } else if (imgButtons[0].innerHTML === '<img src="./icon-minus.svg" alt="dark minus icon">') {
                questionsAndAnswers[0].style.height = '50px';
                imgButtons[0].innerHTML = '<img src="./icon-plus.svg" alt="purple plus icon">';
                newP[0].style.display = 'none';
                divCont.style.height = '450px';
            }
        }

        imgButtons[0].addEventListener('click', buttonToggle0);
        questions[0].addEventListener('click', buttonToggle0);


        const buttonToggle1 = () => {
            if (imgButtons[1].innerHTML === '<img src="./icon-plus.svg" alt="purple plus icon">') {
                questionsAndAnswers[1].style.height = '160px';
                imgButtons[1].innerHTML = '<img src="./icon-minus.svg" alt="dark minus icon">';
                newP[1].style.display = 'block';
                divCont.style.height = '560px';
            } else if (imgButtons[1].innerHTML === '<img src="./icon-minus.svg" alt="dark minus icon">') {
                questionsAndAnswers[1].style.height = '50px';
                imgButtons[1].innerHTML = '<img src="./icon-plus.svg" alt="purple plus icon">';
                newP[1].style.display = 'none';
                divCont.style.height = '450px';
            }
        }

        imgButtons[1].addEventListener('click', buttonToggle1);
        questions[1].addEventListener('click', buttonToggle1);

        const buttonToggle2 = () => {
            if (imgButtons[2].innerHTML === '<img src="./icon-plus.svg" alt="purple plus icon">') {
                questionsAndAnswers[2].style.height = '130px';
                imgButtons[2].innerHTML = '<img src="./icon-minus.svg" alt="dark minus icon">';
                newP[2].style.display = 'block';
                divCont.style.height = '560px';
            } else if (imgButtons[2].innerHTML === '<img src="./icon-minus.svg" alt="dark minus icon">') {
                questionsAndAnswers[2].style.height = '50px';
                imgButtons[2].innerHTML = '<img src="./icon-plus.svg" alt="purple plus icon">';
                newP[2].style.display = 'none';
                divCont.style.height = '450px';
            }
        }

        imgButtons[2].addEventListener('click', buttonToggle2);
        questions[2].addEventListener('click', buttonToggle2);

        const buttonToggle3 = () => {
            if (imgButtons[3].innerHTML === '<img src="./icon-plus.svg" alt="purple plus icon">') {
                questionsAndAnswers[3].style.height = '140px';
                imgButtons[3].innerHTML = '<img src="./icon-minus.svg" alt="dark minus icon">';
                newP[3].style.display = 'block';
                divCont.style.height = '520px';
            } else if (imgButtons[3].innerHTML === '<img src="./icon-minus.svg" alt="dark minus icon">') {
                questionsAndAnswers[3].style.height = '50px';
                imgButtons[3].innerHTML = '<img src="./icon-plus.svg" alt="purple plus icon">';
                newP[3].style.display = 'none';
                divCont.style.height = '450px';
            }
        }

        imgButtons[3].addEventListener('click', buttonToggle3);
        questions[3].addEventListener('click', buttonToggle3);
    }
}

desktopSize();







