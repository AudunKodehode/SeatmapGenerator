let headsArray = [
  "Audun",
  "Desiree",
  "Christer",
  "Mari",
  "Ian",
  "Magnus",
  "Isak",
  "Bror",
  "Artur",
];


let quotes = [
    "Idag blir en bra dag!", 
    "Hei hvor det går!",
    "Halla!",
    "Fyrbøteren er på jobb!",
    "Nå er det min tur, Joakim!",
    "Jeg elsker mandager!!!",
    "Kaffen er klar!"
]
function populatelist() {
  let heads = document.getElementById("heads");
  heads.innerHTML = "";
  for (let i = 0; i < headsArray.length; i++) {
    heads.innerHTML += `<li><button onclick="removeHead(${i})">X</button> ${headsArray[i]} </li> `;
  }
}
populatelist();
function removeHead(int) {
  headsArray.splice(int, 1);
  populatelist();
}

function addHead() {
if (linaAnimating == false){
  lina();
}
  let inputBox = document.getElementById("nameInput");
  if (inputBox.value != "") {
    headsArray.push(inputBox.value);
    inputBox.value = "";
    populatelist();
    document.getElementById("error").textContent = "";
    if (headsArray.length == 10) {
      headsArray.pop();
      document.getElementById("error").textContent =
        "For mange hoder, for lite seter";
    }
  }
}
function placeHeads() {
  if (headsArray.length < 10) {
    let missing = 10 - headsArray.length;
    while (missing != 0) {
      headsArray.push("Tomt sete");
      missing--;
    }
  }
  headsArray = shuffle(headsArray);
  populatelist();

  for (i = 1; i < 11; i++) {
    let seat = document.getElementById(`seat${i}`);
    seat.innerHTML = `<p> ${headsArray[i]} </p>`;
    document.getElementById("seat10").innerHTML = `<p> ${headsArray[0]} </p>`;
  }

  if (joakimAnimated == false) {
    joakim();
    joakimAnimated = true;
  }
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
let joakimAnimated = false;

let linaAnimating = false;
function joakim() {
  if (joakimAnimated == false) {
    let id = null;
    const elem = document.getElementById("joakim");
    clearInterval(id);
    id = setInterval(frame, 1);
    elem.style.opacity = "1";

    let left = 1900;
    let rotate = 0;
    function frame() {
      if (left == 700) {
        clearInterval(id);
        elem.style.zindex = -500;
        elem.style.top = 20 + "px";
        elem.style.zindex = -50000;
        elem.style.rotate = 0 + "deg";
      } else {
        rotate = rotate + 0.5;
        elem.style.rotate = rotate + "deg";
        left--;
        elem.style.left = left + "px";
      }
    }
    joakimAnimated = true;
  }
}

let linaDown = false;

function lina() {
    linaAnimating = true;
  let id = null;
  const elem = document.getElementById("lina");
  const elem2 = document.getElementById("speech");
  let randomVal1 = Math.round(Math.random() * 1);
  let randomVal2 = Math.round(Math.random() * 1);
  let randomVal3 = Math.round(Math.random() * 1);
  let randomVal4 = Math.round(Math.random() * 1);
  let randomVal5 = Math.round(Math.random() * 1);
  if (randomVal1 == 1){
    elem.style.left = "330px";
} else {
    
    elem.style.left = "900px";
}

if (randomVal3 == 1){
    elem.style.scale = 2;
}
if (randomVal4 == 1){
    elem.style.scale = 2;
}
let randomQuote = Math.round(Math.random() * quotes.length) -1;
elem2.innerText = quotes[randomQuote];
while (elem2.innerText == "undefined") {
    let randomQuote = Math.round(Math.random() * quotes.length) -1;
    elem2.innerText = quotes[randomQuote];
}


  if (linaDown == false) {
    clearInterval(id);
    id = setInterval(frame, 1);
    let top = "-200";
    function frame() {
      if (top == "950") {
        clearInterval(id);
        linaDown = !linaDown;
        elem.style.opacity = 0;
        linaAnimating = false;
        elem.style.top = 10 + "px";
      } else {
        elem.style.opacity = 1;
        top++;
        elem.style.top = top + "px";
      }
    }
  } else {
    clearInterval(id);
    id = setInterval(frame, 1);
    let top = "950";
    function frame() {
      if (top == "-200") {
        clearInterval(id);
        linaDown = !linaDown;
        elem.style.opacity = 0;
        linaAnimating = false;
      } else {
        elem.style.opacity = 1;
        top--;
        elem.style.top = top + "px";
      }
    }
  }


  
}

function randomTick() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  ms = checkTime(s) / 1000;
  setTimeout(randomTick, 1000);
  let randomNumber;
  ("");

  randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber > 8 && linaAnimating == false) {
    linaAnimating = true;
    lina();
  }


}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
