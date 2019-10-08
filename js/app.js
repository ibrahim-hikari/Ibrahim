'use strict';

var greetings = prompt('hello there, what\'s your name?')
    alert('good to have you here ' +  greetings)

//Question 1
var know = prompt('Do you know me?');
know = know.toLowerCase();
while (know !== 'yes' && know !== 'y' && know !== 'no' && know !== 'n') {
    know = prompt('Sorry, it is yes or no question!');
}
if (know == 'yes' || know == 'y') {
    alert('good for you, let us find more ')
}
else if (know == 'no' || know == 'n') {
    alert('go ahead and find out who I am')
}
// console.log('know', know)


//Question 2
var live = prompt('do you know where I\'m from?')
live = live.toLowerCase();
while (live !== 'yes' && live !== 'y' && live !== 'no' && live !== 'n'){
    live = prompt('Sorry, it is yes or no question!');
}
if (live == 'yes' || live == 'y'){
    alert('great, we should see eachother when we have the chance')
}
else if (live == 'no' || live == 'n'){
    alert('I\'m from Tafila, it\'s a great place, you should visit me, we\'ll have fun togather')
}
// console.log('live', live)


//Question 3
var give = prompt('do you know when is my birthday?')
while (give !== 'yes' && give !== 'y' && give !== 'no' && give !== 'n'){
    give = prompt('Sorry, it is yes or no question!');
}
if (give == 'yes' || give == 'y'){
    alert('awesome, I\'m making a party you shhould come')
}
else if (give == 'no' || give == 'n'){
    alert('It in 15 jan, don\'t forget to git me a present :p')
}
// console.log('give', give)


//Question 4
var movie = prompt('Do you know what kind of movies do I like?')
while (movie !== 'yes' && movie !== 'y' && movie !== 'no' && movie !== 'n'){
    movie = prompt('Sorry, it is yes or no question!');
}
if (movie == 'yes' || movie == 'y'){
    alert('great, we should go and see one this weekend ')
}
else if (movie == 'no' || movie == 'n'){
    alert('I love the mysterous one like SherlockHolmes movie')
}
// console.log('movie', movie)

//Question 5
var go = prompt('do you know where I go when I\'m little upset')
while (go !== 'yes' && go !== 'y' && go !== 'no' && go !== 'n'){
    go = prompt('Sorry, it is yes or no question!');
}
if (go == 'yes' || go == 'y'){
    alert('please don\'t tell anyone')
}
else if (go == 'no' || go == 'n'){
    alert('of course, because no one should know')
}
// console.log('go', go)

    alert('thank you for your time ' + greetings + ' Wish you enjoy the webpage')