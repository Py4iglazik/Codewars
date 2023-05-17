//The first task.
function hero(bullets, dragons){
    if (bullets >= dragons*2) {
      return true;
    } else {
      return false;
    }
}

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


