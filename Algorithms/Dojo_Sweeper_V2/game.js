var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
  var result = "";
  for(var i=0; i<theDojo.length; i++) {
    for(var j=0; j<theDojo[i].length; j++) {
      result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
    }
  }
  return result;
}

function zeroArray(theDojo){
  console.log(`Zero Array Funciton is active`);
  for(var i=0; i<theDojo.length; i++) {
      for(var j=0; j<theDojo[i].length; j++) {
        theDojo[i][j] =0
      }
    }
  return theDojo;
  }

function randomArray(){
  var counter =0;
  var xRandom=0;
  var yRandom=0;
  while(counter <= 9){
    xRandom=Math.floor(Math.random()*10);
    yRandom=Math.floor(Math.random()*10);
    if(theDojo[xRandom][yRandom] == 0){
      theDojo[xRandom][yRandom] =1;
      counter++;
    }
  }
}


// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
  console.log({i, j});
  var X_value=i;
  var Y_value=j;
  var sum=0;
  if ((theDojo[X_value][Y_value]) == 1){
    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    alert(`Game Over`);
  }
  for (i = X_value -1 ; i <= X_value+1; i++){
    if (i < 0 ) continue;
    else if(i > 9)break;
    else
    for(j = Y_value-1;j <= Y_value+1; j++)
    {
        if (j < 0 ) continue;
        else if(j > 9)break;
        else{
        console.log(`The Index Number = [${i}][${j}]`);
        sum+=theDojo[i][j];
        }
    }
}


  element.innerHTML = sum;
  //alert(`The number of ninjas = ${sum}`);
}
    
// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it (DONE)
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
    
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes

// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);  

theDojo= zeroArray(theDojo);  
randomArray();
console.table(theDojo);

