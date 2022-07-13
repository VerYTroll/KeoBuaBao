let possibleChoices = document.querySelectorAll('button');
let yourChoice, computerChoice;
for(let i = 0; i < possibleChoices.length; i++) {
    possibleChoices[i].addEventListener('click', function(element) {
        yourChoice = element.target.id;
        document.getElementById('yourChoice').innerText = element.target.textContent;
        //Random
        computerChoice = Math.floor(Math.random() * 3);
        if(computerChoice === 0) {
            document.getElementById('computerChoice').innerText = 'Kéo';
        } else if (computerChoice === 1) {
            document.getElementById('computerChoice').innerText = 'Búa';
        } else {
            document.getElementById('computerChoice').innerText = 'Bao';
        }
        
        //Result
        if(computerChoice == yourChoice) {
            document.getElementById('result').innerText = 'Hòa';
        }

        if(computerChoice == 0 && yourChoice == 1) {
            document.getElementById('result').innerText = 'Thắng';
        } else if(computerChoice == 0 && yourChoice == 2) {
            document.getElementById('result').innerText = 'Thua';
        }

        if(computerChoice == 1 && yourChoice == 2) {
            document.getElementById('result').innerText = 'Thắng';
        } else if(computerChoice == 1 && yourChoice == 0) {
            document.getElementById('result').innerText = 'Thua';
        }

        if(computerChoice == 2 && yourChoice == 0) {
            document.getElementById('result').innerText = 'Thắng';
        } else if(computerChoice == 2 && yourChoice == 1) {
            document.getElementById('result').innerText = 'Thua';
        }
    });
}