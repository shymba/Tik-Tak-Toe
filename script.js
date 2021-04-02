const game = document.querySelector('.game');
const item = document.querySelectorAll('.item');
let step = 0;
let text = document.getElementById('text');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    location.reload()
})


function play() {
        game.addEventListener('click', function(e){
        if(step % 2 === 0) {
            e.target.innerHTML = 'x';
        } else {
            e.target.innerHTML = 'o';
        }
        check();
        step++;
        console.log(step);
        draw()
    })
}
 play();


 function check() {
     const winComb = [
         [0,1,2],
         [3,4,5],
         [6,7,8],
         [0,3,6],
         [1,4,7],
         [2,5,8],
         [0,4,8],
         [2,4,6]
     ];

     for(let i = 0; i<winComb.length; i++) {
        if(item[winComb[i][0]].innerHTML === 'x' && item[winComb[i][1]].innerHTML === 'x' && item[winComb[i][2]].innerHTML === 'x') {
            text.innerHTML = ('Win X player!');
        } else if (item[winComb[i][0]].innerHTML === 'o' && item[winComb[i][1]].innerHTML === 'o' && item[winComb[i][2]].innerHTML === 'o') {
            text.innerHTML = ('Win O player!');
        }
     }
 }
 function draw() {
    if(step === 9 && !check()) {
       return text.innerHTML = ('Draw!');
    }
}
