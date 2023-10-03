'use strict';
// const message = document.querySelector('.message')
// console.log(message.textContent = 'Correct Number🎉')
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let highScore = 0
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}
const displayNumber = function(number){
    document.querySelector('.number').textContent = number
}
const displayScore = function(score){
    document.querySelector('.score').textContent = score
}


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess)

    // When there's no input
    if(!guess){
       displayMessage('❌ No number!')
        

        // When player wins
    }else if(guess === secretNumber){
        displayMessage( "🎉 correct Number")
             displayNumber(secretNumber)
             document.querySelector('body').style.backgroundColor = '#60b347'
             document.querySelector('.number').style.width = '30rem'
             if(score > highScore){
                highScore = score
             }
             document.querySelector('.highscore').textContent = highScore

            }
            // when guess is wrong
            else if(guess !== secretNumber){
                //  when guess is too high
                if(score > 1){
                    displayMessage(guess > secretNumber ? '📈Your guess is too high!' : '📈Your guess is too low!')
                    score--
                    displayScore(score)
                }else{
                    displayMessage("💥You Lost the game!");
                   displayScore(0)
            
                }
                   
    }
    
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = "📈Your guess is too high!"
    //         score--
    //         document.querySelector('.score').textContent = score
    //     }else{
    //         document.querySelector('.message').textContent = "💥You Lost the game!";
    //         document.querySelector('.score').textContent = 0
    
    //     }
        
    //     // When guess is too low
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = "📈Your guess is too low!"
    //         score--
    //         document.querySelector('.score').textContent = score
    //     }else{
    //         document.querySelector('.message').textContent = "💥You Lost the game!";
    //         document.querySelector('.score').textContent = 0
    //     }
    // }

    document.querySelector('.again').addEventListener('click',function(){
        // location.reload();
        score = 20
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage("Start guessing...");
        displayScore(score)
        displayNumber('?')
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundColor = '#222'
        document.querySelector('.number').style.width = '15rem'

    })
})
