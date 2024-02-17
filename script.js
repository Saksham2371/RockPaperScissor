let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const usrscorepara = document.querySelector('#User-Score');
const compscorepara = document.querySelector('#comp-score');

const gencompchoice = () => {
  let options = ['rock', 'paper', 'scissors'];
  const rdxInd = Math.floor(Math.random() * 3);
  return options[rdxInd];
};

const drawgame = () => {
  // console.log('game was draw');
  msg.innerHTML = 'Game was Draw, Play Again!';
  msg.style.backgroundColor = '#081b31';
};

const showWinner = (userwin, userchoice, Compchoice) => {
  if (userwin) {
    userScore++;
    usrscorepara.innerText = userScore;
    // console.log('you win!');
    msg.innerHTML = `You Win! your ${userchoice} beats ${Compchoice}`;
    msg.style.backgroundColor = 'Green';
  } else {
    compScore++;
    compscorepara.innerText = compScore;
    // console.log('you lose');
    msg.innerHTML = `You Lose ${Compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor = 'red';
  }
};

const playgame = (userchoice) => {
  console.log('userchoice= ', userchoice);
  const Compchoice = gencompchoice();
  console.log('Compchoice= ', Compchoice);

  if (userchoice === Compchoice) {
    //draw game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === 'rock') {
      //scissors, paper
      userwin = Compchoice === 'paper' ? false : true;
    } else if (userchoice === 'paper') {
      //rock, scissors
      userwin = Compchoice === 'scissors' ? false : true;
    } else {
      //rock, paper
      Compchoice === 'rock' ? false : true;
    }
    showWinner(userwin, userchoice, Compchoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener('click', () => {
    const userchoice = choice.getAttribute('id');
    // console.log('Choice was clicked:', userchoice);
    playgame(userchoice);
  });
});
