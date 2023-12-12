let usermove='';
let computerMove="";
let result='';
let game={
    wins:0,
    looses:0,
    ties:0
};
 let gameHistory=[];
 gameHistory=JSON.parse(localStorage.getItem(gameHistory))||[];
 game=JSON.parse(localStorage.getItem(game)) ||{
    wins:0,
    looses:0,
    ties:0

};
function captureUserMove(move){
    usermove=move;
}
renderGameHistory();
renderGameSummary();
function resetScores(){
    game={
        wins:0,looses:0,ties:0
    }
    gameHistory=[];
    renderGameSummary();
    renderGameHistory();
}
function renderGameSummary(){
    const gamesPlayed=game.wins+game.looses+game.ties;
    console.log(`Usermove:${usermove} ComputerMove:${computerMove}  Result:${result}`);
    document.querySelector('#wins').innerHTML=game.wins;
    document.querySelector('#looses').innerHTML=game.looses;
    document.querySelector('#ties').innerHTML=game.ties;
    document.querySelector('#gamesPlayed').innerHTML=gamesPlayed;
    console.log(game);

}
function renderGameHistory(){
    let finalGameHistoryHTML=` <tr>
    <th>#</th>
    <th>User Move</th>
    <th>Computer Move</th>
    <th>Results</th>
</tr>`;
for(i=0;i<gameHistory.length;i++)
{
    finalGameHistoryHTML+= `<tr>
    <td>${i+1}</td>
    <td>${gameHistory[i].usermove}</td>
    <td>${gameHistory[i].computerMove}</td>
    <td>${gameHistory[i].result}</td>
</tr>`
}
    document.querySelector('#gameHistory').innerHTML=finalGameHistoryHTML;
    localStorage.setItem('game',JSON.stringify(game));
    localStorage.setItem('gameHistory',JSON.stringify(gameHistory));
}
function updateGameScore(){
    if(result==='win')
    game.wins++;
else if(result==='lose')
game.looses++;
else if(result==='tie')
game.ties++;
const gameHistoryItem={usermove:usermove ,computerMove:computerMove, result:result};
gameHistory.push(gameHistoryItem);
}

function generateComputerMove(){
    const randNum=Math.random();
    if(randNum<1/3)
    {computerMove='Rock';

    }
    else if(randNum<2/3)
    {
        computerMove='Paper';
    }
    else
    computerMove='Scissor'
}
function evaluateMoves(){
    if(usermove===computerMove)
    {
        result='tie';
    }
    else if((usermove==='Rock' && computerMove==='Scissor' )|| (usermove==='Paper'  && computerMove==='Rock')|| (usermove==='Scissor' && computerMove==='Paper'))
    {
        result='win';
    }
    else
    result='lose';
}
