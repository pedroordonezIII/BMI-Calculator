
function getValues(){
  var height = document.getElementById("height").value;
  var inches = document.getElementById("inches").value
  var weight = document.getElementById("weight").value;
  var name = document.getElementById("name").value;
  height = (parseInt(height) * 12) + parseInt(inches);

  try{
  if(height == "" && weight == "" && name == "" && inches == ""){
    throw new Error("All inputs are empty.");
  }
  if(height == "" && weight == ""){
    throw new Error("Height and weight inputs are empty.");
  }
  if(height == "" && name == ""){
    throw new Error("Height and name inputs are empty.");
  }
  if(name == "" && weight == ""){
    throw new Error("Name and weight inputs are empty.");
  }
  if(height == ""){
    throw new Error("Height input is empty.");
    }
  if(weight == ""){
    throw new Error("Weight field is empty.");
    }
  if(name == ""){
      throw new Error("Name field is empty.");
    }
  if(inches == ""){
      throw new Error("Inches field is empty.");
    }
    errorHandling(height);
    errorHandling(inches);
    errorHandling(weight);
}

  catch(e){
    alert(e);
    console.error("Error: " + e.message);
  }
  var resultObject = {
      height: height,
      weight: weight,
      name: name
    }
    return resultObject
  }

function changeColor(){
  var letter = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i <= 5; i++){
    color += letter[Math.floor(Math.random() * 16 )];
  }
  return color;
}

function errorHandling(x){
  if(isNaN(x)){
  throw new Error("Input should be a number.");
  }
}

function showResult(number){
  result = document.getElementById("result");

  var userName = getValues();
  if(isNaN(number)){
    result.textContent = "Error";
  }
  else if(number < 18.5){
    result.textContent =  userName.name + " has a BMI of " + number
    + " and is underweight.";
  }
  else if(number < 25){
    result.textContent = userName.name + " has a BMI of " + number
    + " and is moderate weight.";
  }
  else if(number < 30){
    result.textContent = userName.name + " has a BMI of " + number
     + " and is overweight.";
  }
  else{
    result.textContent = userName.name + " has a BMI of " + number
    + " and is obese.";
  }
};

var kilogramsPerPound = 0.45359237;
var metersPerInch = 0.0254;

var submitButton = document.getElementById("submitButton");

function getBMI(){
  var numberValues = getValues();
  var calculateBMI =
  (Math.round(((parseInt(numberValues.weight) * kilogramsPerPound) /
  (Math.pow(parseInt(numberValues.height) * metersPerInch, 2))) * 100) / 100);

  var resultStyle = document.getElementById("result");
  resultStyle.style.backgroundColor = changeColor();
  resultStyle.style.fontSize = "1.5em";
  resultStyle.style.fontFamily = "sans-serif";

  var buttonStyle = document.querySelector("button");
  buttonStyle.style.backgroundColor = changeColor();
  buttonStyle.style.color = "black";

  showResult(calculateBMI);
}

submitButton.addEventListener("click", getBMI);
