console.log("successfully loaded");

var randomCell = {
    num: undefined,
    location: undefined
};
var tableObject = document.getElementById("playground");
var forsearch = new Array;


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

for(var i=0; i<16; i++){
    addRandomNumber();
}