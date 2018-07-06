prompt ('Press any game to begin!');

var carsTypeArr = ['Porsche', 'Ferrari', 'Jag', 'Cadillac', 'Mustang'];

var carType = carsTypeArr[Math.floor(Math.random() * carsTypeArr.length)];

var s;
var count = 0;
var answerArray = [];

var car = carType.split("");
console.log('before ', car);

for (var i = 0; i < car.length; i++){
    // var hyphen = car[i];
    // hyphen = "_";
    // console.log(hyphen);
    car[i] = '_'
}

console.log('after ',car.join(' '));


function startUp() {
    // for(var i = 0; i < carType.length; i++){ 
       
    console.log(carType);

    var word = document.getElementById("letter");
    }
 function letter(){
     var letter = document.getElementById("letter").value;

     if (letter.length > 0){
         for(var i = 0; i < carType.length; i++){
             if (carType[i] === letter){
                 answerArray[i] = letter;
             }
         }
         count++;
         document.getElelmentById("counter").innerHTML = "No of clicks: + count;"
         document.getElementById("answer").innerHTML = answerArray.join("");
 }   
if(count>5){
    document.getElementById("stat").innerHTML = "You should have guessed it by now!";
    }
 }

 startUp();
 letter();