//The first task.
function hero(bullets, dragons){
    if (bullets >= dragons*2) {
      return true;
    } else {
      return false;
    }
}
let bullets = 8;
let dragons = 4;
hero(bullets, dragons);


//The second task.
function points(games) {
  let result = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      result += 3;
      } else if (games[i][0] == games[i][2]) {
      result += 1;
      }
  }
  return result;
}
let games = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];
points(games);


//The third task.
function updateLight(current) {
  if (current === "green") {
    current = "yellow";
    return current;
  } else if (current === "yellow") {
    current = "red";
    return current;
  } else if (current === "red") {
    current = "green";
    return current;
  }
}
let current = "green";
updateLight(current);

