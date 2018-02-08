//a script with 2 number vars added together

var pi = Math.PI;
var e = Math.E;

var sum = pi + e;

console.log("The sum of pi and natural log (e): "+sum);

//outputting two items in sub-arrays of a multidimensional array:
moons = [
    [],[],[],
    ["Luna"],
    ["Deimos", "Phobos"],
    ["Europa", "Gamymede","Io","Callisto"],
    ["Titan", "Enceliadus"],
    ["Titania","Miranda","Ariel"],
    ["Triton"]
]

console.log("Two moons of Planet #6 include "+moons[6][0]+" and "+moons[6][1]);

//checking if a variable is less than 100.
var checkVar = 101;

if (checkVar < 100){
    console.log("The var is less than 100")
}else{
    console.log("The number "+checkVar+" is greater than 100.")
}

//function that takes a name in an arg and tells user the name
//re-did this one after learning about event listeners.

// var enteredName = "Bob";
// function tellName(name){
//     console.log("Name entered was "+name);
// }
// tellName(enteredName);

var nameButton = document.getElementById('name-button')

nameButton.addEventListener('click', function(e){
    e.preventDefault();
    nameEntered = document.getElementById("nameIn").value;
    if (!nameEntered){
        alert("You didn't enter anything");
        return false;
    }
    alert("Hi, "+nameEntered);
    document.getElementById("doorGreet").innerText = ", "+nameEntered+",";
});

//The three door challenge:
//I tried to do with an event listener, but I coundn't
//figure out how to get the color from the button id


function getPrize(color){
    var output = document.getElementById("output");
    if (color==="green"){
        output.innerHTML = "<h3>You win the Grand Prize: a new car!</h3>"
    }else if (color==="yellow"){
        output.innerHTML = "<h4>You win the consolation prize: a toaster.<h4>"
    }else{
        output.innerHTML ="<p>You win a bumper sticker with our company logo on it. Yay!</p>"
    }
}






