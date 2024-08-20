var avatar = "generic";
var skill = 1.0;
var pointsPerlevel = 1000;
var userPoints = 2008;
function getAvatar(points) {
    var level = points / pointsPerlevel;
    
    if (level == 0) {
        return "Teddy bear";
        } else if (level == 1) {
            return "Cat";
        } else if (level >= 2) {
            return "Gorilla";
    }
}

function updatePoints (bonus, newPoints) {
    var i = 0;
    while (i < bonus) {
        newPoints = newPoints + skill * bonus;
        i = i +1;
    }
    return newPoints + userPoints;
}
userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);


function dogYears(dogName, age) {
    var years = age * 7;
    console.log(dogName + " is " + years + "  years old");
}
var myDog = "Fido";
dogYears(myDog, 4);

function makeTea(cups, tea) {
    console.log("Brewing" + cups + " cups of" + tea);
}
var guests = 3;
makeTea(guests, "Earl Grey");

function secret() {
    console.log("The secret of line is 42");
}
secret();

function speak (kind) {
    var defaultSound = "";
    if (kind == "dog") {
        alert("Woof");
    } else if (kind == "cat") {
        alert("Meow");
    } else {
        alert(defaultSound);
    }
    
}

var pet = prompt("Enter a type of pet:");
speak(pet);

var x = 32;
var y = 44;
var radius = 5;

var centerX = 0;
var centerY = 0;
var widht = 600;
var height = 400;

function setup(widht, height) {
    centerX = widht/2
    centerY = height/2 
}

function computeDistance (x1, y1, x2, y2,) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    var d2 = (dx * dx) + (dy * dy);
    var d = Math.sqrt(d2);
    return d;
}

function circleArea(r) {
    var area = Math.PI * r * r;
    return area;
}

setup(widht, height);
var area = circleArea(radius);
var distance = computeDistance(x, y, centerX, centerY);
alert("area: " + area);
alert("Distance: " + distance);