'use strict';

var score = 0;


function askQuestion(questions, yesResponse, noResponse) {
    var response = prompt(questions)
    response = response.toUpperCase();
    while (response !== 'YES' && response !== 'Y' && response !== 'NO' && response !== 'N') {
        response = prompt('Sorry, it is yes or no question!');
        response = response.toUpperCase();

    }
    if (response == 'YES' || response == 'Y') {
        alert(yesResponse);
        score++;
    } else {
        if (response == 'NO' || response == 'N') {
            alert(noResponse);
        }
    }
}
askQuestion('Do you know me?', 'good for you, let us find more ', 'go ahead and find out who I am');
askQuestion('do you know where I\'m from?', 'great, we should see eachother when we have the chance', 'I\'m from Tafila, it\'s a great place, you should visit me, we\'ll have fun togather');
askQuestion('do you know when is my birthday?', 'awesome, I\'m making a party you shhould come', 'It in 15 jan, don\'t forget to git me a present :p');
askQuestion('Do you know what kind of movies do I like?', 'great, we should go and see one this weekend ', 'I love the mysterous one like SherlockHolmes movie');
askQuestion('do you know where I go when I\'m little upset', 'please don\'t tell anyone', 'of course, because no one should know');


function guess() {

    var trailNum = 4;
    var trailQuestion = [
        ['What is my favourite number'],
        ['ops, again!'],
        ['I\'m sorry, try again'],
        ['try harder'],
    ];
    var ansewr = prompt(trailQuestion[0]);
    parseInt(ansewr);
    while (isNaN(ansewr)) {
        ansewr = prompt('please enter a number!!')
    }

    for (var j = 1; j < trailNum; j++) {

        if (ansewr > 7) {
            var currentTrail = trailQuestion[j];
            var currentPrompt = currentTrail[0];
            ansewr = prompt(currentPrompt + ' your ansewr is too high ');
            parseInt(ansewr);
            while (isNaN(ansewr)) {
                ansewr = prompt('please enter a number!!')
            }
        } else if (ansewr < 7) {
            var currentTrail = trailQuestion[j];
            var currentPrompt = currentTrail[0];
            ansewr = prompt(currentPrompt + ' your ansewr is too low');
            parseInt(ansewr);
            while (isNaN(ansewr)) {
                ansewr = prompt('please enter a number!!')
            }
        } else if (ansewr == 7) {
            alert('good job you got it');
            j = trailNum;
            score++;
        }

    }

    return (ansewr)
}

guess();

function subject() {

    var attempt = 5;
    var material = ['vibrations', 'automatic-control', 'refrigeration-systems', 'heating-systems', 'thermodynamics', 'dynamics'];
    var repeat = ['sorry, try again', 'not even close', 'try harder', 'again!', 'and again please', 'last chance'];

    var question = prompt('What was my favourite subject back at the university');

    for (var k = 0; k < attempt; k++) {
        if (question !== material[k]) {
            question = prompt(repeat[k])
            for (var l = 0; l < attempt; l++) {

                if (question == material[l]) {
                    alert('WOW, you know me well');
                    l = attempt;
                    k = attempt;
                    score++;
                }
            }
        } else {
            alert('WOW, you know me well');
            k = attempt;
            score++;
        }

    }
    return (question);
}


subject();

alert('your score at this demo website is ' + score + ' mark');

function yesFeedback() {
    alert('Thank you, glad to know that')
}

function noFeedback() {
    alert('oh, sorry about that hope you like my next work')
}
