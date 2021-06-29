let pass = "hire me";
pass = pass.toUpperCase();

let ln = pass.length;

let hiddenpass = "";

for (i = 0; i < ln; i++) {
  if (pass.charAt(i) == " ") hiddenpass = hiddenpass + " ";
  else hiddenpass = hiddenpass + "-";
}
let miss = 1;

function show() {
  document.getElementById("board").innerHTML = hiddenpass;
}

let letters_tab = new Array(25); //to do zmiany

letters_tab[0] = "A";
letters_tab[1] = "B";
letters_tab[2] = "C";
letters_tab[3] = "D";
letters_tab[4] = "E";
letters_tab[5] = "F";
letters_tab[6] = "G";
letters_tab[7] = "H";
letters_tab[8] = "I";
letters_tab[9] = "J";
letters_tab[10] = "K";
letters_tab[11] = "L";
letters_tab[12] = "M";
letters_tab[13] = "N";
letters_tab[14] = "O";
letters_tab[15] = "P";
letters_tab[16] = "Q";
letters_tab[17] = "R";
letters_tab[18] = "S";
letters_tab[19] = "T";
letters_tab[20] = "U";
letters_tab[21] = "V";
letters_tab[22] = "W";
letters_tab[23] = "X";
letters_tab[24] = "Y";
letters_tab[25] = "Z";

window.onload = show_letters;

function show_letters() {
  let letter = "";

  for (i = 0; i <= 25; i++) {
    let element = "let" + i;
    letter =
      letter +
      '<div class="letter" onclick="check(' +
      i +
      ')" id="' +
      element +
      '">' +
      letters_tab[i] +
      "</div>";
  }
  document.getElementById("letters").innerHTML = letter;

  show();
}

String.prototype.setLetter = function (position, whatL) {
  if (position > this.length - 1) return this.toString();
  else return this.substr(0, position) + whatL + this.substr(position + 1);
};

function check(num) {
  let hit = false;
  for (i = 0; i < ln; i++) {
    if (pass.charAt(i) == letters_tab[num]) {
      hiddenpass = hiddenpass.setLetter(i, letters_tab[num]);
      hit = true;
    }
    document.getElementById("board").innerHTML = hiddenpass;
  }

  if (hit == true) {
    let element = "let" + num;
    document.getElementById(element).style.background = "green";
    document.getElementById(element).style.color = "#45eb09";
    show();
  } else {
    let element = "let" + num;
    document.getElementById(element).style.background = "red";
    document.getElementById(element).style.color = "#ffb5bc";
    document.getElementById(element).setAttribute("onclick", ";");

    miss++;
    let picture = "images/s" + miss + ".jpg";
    document.getElementById("hang").innerHTML =
      '<img src="' + picture + '"alt=""/> ';
  }
  if (pass == hiddenpass)
    document.getElementById("letters").innerHTML =
      "You won, thanks for playing " +
      '<br /><br /><span class="reset" style="cursor: pointer;" onclick="location.reload()">Click here to play again </span>';
  if (miss == 9)
    document.getElementById("letters").innerHTML =
      "You lose, thanks for playing " +
      '<br /><br /><span class="reset" style="cursor: pointer;" onclick="location.reload()">Click here to play again </span>';
}
