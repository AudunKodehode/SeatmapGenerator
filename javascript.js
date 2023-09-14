let headsArray = [
    "Audun",
    "Desiree",
    "Christer",
    "Mari",
    "Ian",
    "Magnus",
    "Isak",
    "Bror",
    "Artur"
];

function populatelist(){

    let heads = document.getElementById("heads");
    heads.innerHTML = "";
    for (let i = 0; i < headsArray.length; i++){
        heads.innerHTML += `<li><button onclick="removeHead(${i})">X</button> ${headsArray[i]} </li> `;
    }

}
populatelist();
function removeHead(int){
    headsArray.splice(int, 1);
    populatelist();
}

function addHead(){
    let inputBox = document.getElementById("nameInput");
    if(inputBox.value != ""){
        headsArray.push(inputBox.value);
        inputBox.value = "";
        populatelist();
        document.getElementById("error").textContent = ""
        if (headsArray.length == 10){
            headsArray.pop();
            document.getElementById("error").textContent = "For mange hoder, for lite seter"
        }
    }
}
function placeHeads(){
    if (headsArray.length < 10){
        let missing = 10-headsArray.length;
        while (missing != 0){
            headsArray.push("Tomt sete");
            missing--;
        }
    }
    headsArray = shuffle(headsArray);
        populatelist();

for (i = 1; i < 11; i++){
    let seat = document.getElementById(`seat${i}`);
    seat.textContent = headsArray[i];
    document.getElementById("seat10").textContent = headsArray[0]
}


}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }