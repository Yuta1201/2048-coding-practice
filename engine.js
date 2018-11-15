console.log("successfully loaded");

var randomCell = {
    num: undefined,
    location: undefined
};
var tableObject = document.getElementById("playground");
var forsearch = new Array;
var lines = new Array;
for(var i=0; i<4; i++){
    lines[i] = new Array;
}

//-----表を作成
for(var i=0; i<4; i++){
    var tr = document.createElement('tr');
    tr.id = 'r' + i;
    for(var i2=0; i2<4; i2++){
        var td = document.createElement('td');
        td.id = 'cell' + i + i2;
        td.className = 'cell';
        tr.appendChild(td);
    }
    tableObject.appendChild(tr);
}



//-----randomCellのそれぞれの値に代入
function addRandomNumber(){
    randomCell.num = 2;
    do{
        randomCell.location = 'cell' + Math.floor( Math.random()*4 ) + Math.floor( Math.random()*4 );
        searchEmptyCell();
        console.log(randomCell.location, forsearch.indexOf(randomCell.location), -1 != forsearch.indexOf(randomCell.location));
    }while(-1 != forsearch.indexOf(randomCell.location))
    console.log(randomCell.location + ',' + randomCell.num);
    document.getElementById(randomCell.location).textContent = randomCell.num;
}

function searchEmptyCell(){
    var searching = document.querySelectorAll('td');
    searching.forEach(function(e, i){
        forsearch[i] = document.getElementById(e.id).textContent != '' ? e.id : '';
        console.log(forsearch[i]);
    })
}

//-----矢印キーでの操作を追加
window.addEventListener('keydown',function(e){
    moveTo(e.keyCode);
})

function defineCells(direction){
    if((direction == 37)||(direction == 39)){
        for(var i=0; i<4; i++){
            for(var j=0; j<4; j++){
                lines[i][j] = Number(document.getElementById('cell' + i + j).textContent);
            }
        }
    }else{
        for(var i=0; i<4; i++){
            for(var j=0; j<4; j++){
                lines[j][i] = Number(document.getElementById('cell' + i + j).textContent);
            }
        }
    }
}

function moveCells(){
    for(var i=0; i<4; i++){
        lines[i] = lines[i].filter(function(e){return e != 0});
        lines[i].length = 4;
        lines[i].forEach(function(e, n){
            if(e == lines[i][n + 1]){
                lines[i][n] = e*2;
                lines[i][n + 1] = undefined;
                lines[i] = lines[i].filter(function(e){return e != 0});
                lines[i].length = 4;
            }
        })
    }
}



function moveTo(_keycode){
    switch(_keycode){
        case 37:
        defineCells(37);
        moveCells();
        effectToScreen(37);
        break;

        case 38:
        alert('to up');
        break;

        case 39:
        alert('to right');
        break;

        case 40:
        alert('to down');
        break;

        default:
        alert('invalid key was pressed!');
        break;
    }
}

//------------- for testing -------------
for(var i=0; i<2; i++){
    addRandomNumber();
}