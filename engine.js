console.log("successfully loaded");

var randomCell = {
    num: undefined,
    location: undefined
};
var tableObject = document.getElementById("playground");
var forsearch = new Array;

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

function addRandomNumber(){
    randomCell.num = (Math.floor( Math.random()*2) + 1)*2;
    document.getElementById(randomCell.location).textContent = randomCell.num;
}

function searchEmptyCell(){
    var searching = document.querySelectorAll('td');
    searching.forEach(function(e){
        var eId = e.id;
        var eContent = document.getElementById(eId).textContent;
        forsearch[i] = 0==eContent ? 0 : 1;
    })
}

for(var i=0; i<4; i++){
    addRandomNumber();
}
searchEmptyCell();