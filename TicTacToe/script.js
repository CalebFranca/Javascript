let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');

player1jogadas = 0;
player2jogadas = 0;

for(let i = 0; i < boxes.length; i++){

    boxes[i].addEventListener('click', function(){

        let draw;
        if(player1jogadas == player2jogadas){
            draw = x;
            player1jogadas++;
        }else {
            draw = o;
            player2jogadas++;
        }

        if(boxes[i].childNodes.length == 0){

              let cloneDraw = draw.cloneNode(true);
              this.appendChild(cloneDraw);
        }

        whosWhin();
        
    })


}

function whosWhin() {

    let b1 = document.querySelector('#block1');
    let b2 = document.querySelector('#block2');
    let b3 = document.querySelector('#block3');
    let b4 = document.querySelector('#block4');
    let b5 = document.querySelector('#block5');
    let b6 = document.querySelector('#block6');
    let b7 = document.querySelector('#block7');
    let b8 = document.querySelector('#block8');
    let b9 = document.querySelector('#block9');

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            showMessage('x');
            sumPoints('x');
        }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            showMessage('o');
            sumPoints('o');
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){
        
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            showMessage('x');
            sumPoints('x');
        }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            showMessage('o');
            sumPoints('o');
        }
    }

    
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
        
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            showMessage('x');
            sumPoints('x');
        }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            showMessage('o');
            sumPoints('o');
        }
    }

    
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            showMessage('x');
            sumPoints('x');
        }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            showMessage('o');
            sumPoints('o');
        }
}

        if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
                
            let b2Child = b2.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b8Child = b8.childNodes[0].className;

            if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
                showMessage('x');
                sumPoints('x');
            }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
                showMessage('o');
                sumPoints('o');
            }
        }

        if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){
        
            let b3Child = b3.childNodes[0].className;
            let b6Child = b6.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;
    
            if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
                showMessage('x');
                sumPoints('x');
            }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
                showMessage('o');
                sumPoints('o');
            }
    }

    // diagonal 

      
        if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
            let b1Child = b1.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b9Child = b9.childNodes[0].className;

            if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
                showMessage('x');
                sumPoints('x');
            }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
                showMessage('o');
                sumPoints('o');
            }
        }

        if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){
            
            let b3Child = b3.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b7Child = b7.childNodes[0].className;

            if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
                showMessage('x');
                sumPoints('x');
            }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
                showMessage('o');
                sumPoints('o');
            }
    }

 
    let counter = 0;
    for(let i = 0; i < boxes.length; i++){

        if(boxes[i].childNodes[0] != undefined){
            counter ++;
        }
        if(counter == 9){
            showMessage('v');
        }

    }
  
 }
 
function showMessage(winner){

    let message = document.querySelector('#message');
    let textMessage = document.querySelector('#message p');

    if(winner == 'x'){
        message.classList.remove('hide');
        textMessage.textContent = 'Jogador 1 Venceu'
    }else if(winner == 'o'){
        message.classList.remove('hide');
        textMessage.textContent = 'Jogador 2 Venceu'
    }else{
        message.classList.remove('hide');
        textMessage.textContent = 'Deu velha'
    }

    setTimeout(function(){
        message.classList.add('hide');
    }, 1500);
 } 

 function sumPoints(win){
    let scoreboard1 = document.querySelector('#scoreboard-1');
    let scoreboard2 = document.querySelector('#scoreboard-2');

    if(win == 'x'){
       scoreboard1.textContent++;
    }else if(win == 'o'){
        scoreboard2.textContent++;
    }
 }