'use strict';
//selecting elements
const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0'); //to select id use#
const score1el = document.getElementById('score--1');
const current0_el = document.getElementById('current--0');
const current1_el = document.getElementById('current--1');
const diceel = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');



//initial conditions
//score0el.textContent = 0;
//score1el.textContent = 0;
//diceel.classList.add('hidden'); //dice ki photo h jo hide krdi maine


/*const scores = [0, 0];
let current_sc = 0; //agar ise function ke andar define kra to bar bar reset hojayega cs, jab bhi roll press krengr
let active_pl = 0;
let play = true;*/
let scores,current_sc,active_pl,play;

const init = function () {

    scores = [0, 0];
    current_sc = 0;
    active_pl = 0;
    play = true;
    diceel.classList.add('hidden'); //dice ki photo h jo hide krdi maine


    score0el.textContent = 0;
    score1el.textContent = 0;
    current0_el.textContent = 0;
    current1_el.textContent = 0;

    player0el.classList.remove('player--winner');
    player1el.classList.remove('player--winner');
    player0el.classList.add('player--active');
    player1el.classList.remove('player--active');

};

const switch_pl = function () {
    document.getElementById(`current--${active_pl}`).textContent = 0;
    current_sc = 0;
    active_pl = active_pl === 0 ? 1 : 0;
    player0el.classList.toggle('player--active');
    player1el.classList.toggle('player--active');

};
init();


//rolling dice

btnroll.addEventListener('click', function () {
    if (play) {


        //1.generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2.display dice
        diceel.classList.remove('hidden');
        diceel.src = `dice-${dice}.png`;

        //3.check for rolled 1, if true switch to next player
        if (dice !== 1) {
            //Add dice to current score
            current_sc += dice;
            document.getElementById(`current--${active_pl}`).textContent = current_sc;

        }
        else {
            //switch to next player
            switch_pl();

        }
    }



});

btnhold.addEventListener('click', function () {

    if (play) {

        //1. add cs to active player's score
        scores[active_pl] += current_sc;
        document.getElementById(`score--${active_pl}`).textContent = scores[active_pl];


        //2.check of winning
        if (scores[active_pl] >= 100) {
            //finish the game
            play = false;
            document.querySelector(`.player--${active_pl}`).classList.add('player--winner');
            document.querySelector(`.player--${active_pl}`).classList.remove('player--active');
        }
        else {
            switch_pl();
        }






    }

});

btnnew.addEventListener('click',init);