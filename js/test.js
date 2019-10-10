'use strict';

var score = 0;

var greetings = prompt('hello there, what\'s your name?');
alert('good to have you here ' + greetings);

// var qusetionLength = 5;
// var questions = [
//     ['Do you know me?', 'good for you, let us find more ', 'go ahead and find out who I am'], //Q1
//     ['do you know where I\'m from?', 'great, we should see eachother when we have the chance', 'I\'m from Tafila, it\'s a great place, you should visit me, we\'ll have fun togather'], //Q2
//     ['do you know when is my birthday?', 'awesome, I\'m making a party you shhould come', 'It in 15 jan, don\'t forget to git me a present :p'], //Q3
//     ['Do you know what kind of movies do I like?', 'great, we should go and see one this weekend ', 'I love the mysterous one like SherlockHolmes movie'], //Q4
//     ['do you know where I go when I\'m little upset', 'please don\'t tell anyone', 'of course, because no one should know'], //Q5
// ];

// for (var i = 0; i < qusetionLength; i++) {

//     var currentQuestion = questions[i];
//     var currentPrompt = currentQuestion[0];
//     var userResponse = prompt(currentPrompt);
//     userResponse = userResponse.toLowerCase();
//     var yesRespnse = currentQuestion[1];
//     var noResponse = currentQuestion[2];


//     while (userResponse !== 'yes' && userResponse !== 'y' && userResponse !== 'no' && userResponse !== 'n') {
//         userResponse = prompt('Sorry, it is yes or no question!');}
//         switch (userResponse) {
//             case 'yes':
//             case 'y':
//                 alert(yesRespnse);
//                 score++;
//                 break;
//             case 'no':
//             case 'n':
//                 alert(noResponse);
//                 break;

//     }

// }

///////////////////////// change #1 
function askQuestion(questions, yesResponse, noResponse) {
    var response = prompt(questions)
    response = response.toUpperCase();
    while (response !== 'yes' && response !== 'y' && response !== 'no' && response !== 'n') {
        response = prompt('Sorry, it is yes or no question!');
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
askQuestion('Do you know me?', 'good for you, let us find more ', 'go ahead and find out who I am')
askQuestion('do you know where I\'m from?', 'great, we should see eachother when we have the chance', 'I\'m from Tafila, it\'s a great place, you should visit me, we\'ll have fun togather')
askQuestion('do you know when is my birthday?', 'awesome, I\'m making a party you shhould come', 'It in 15 jan, don\'t forget to git me a present :p')
askQuestion('Do you know what kind of movies do I like?', 'great, we should go and see one this weekend ', 'I love the mysterous one like SherlockHolmes movie')
askQuestion('do you know where I go when I\'m little upset', 'please don\'t tell anyone', 'of course, because no one should know')

alert('thank you for your time ' + greetings + ' Wish you enjoy the webpage');





function guess() {

    var trailNum = 4;
    var trailQuestion = [
        ['What is my favourite number'],
        ['ops, again!'],
        ['I\'m sorry, try again'],
        ['try harder'],
    ];
    var ansewr = prompt(trailQuestion[0]);

    for (var j = 1; j < trailNum; j++) {

        if (ansewr > 7) {
            var currentTrail = trailQuestion[j];
            var currentPrompt = currentTrail[0];
            ansewr = prompt(currentPrompt + ' your ansewr is too high ');
        } else if (ansewr < 7) {
            var currentTrail = trailQuestion[j];
            var currentPrompt = currentTrail[0];
            ansewr = prompt(currentPrompt + ' your ansewr is too low');
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