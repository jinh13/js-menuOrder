// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText, realAnswer) {
  var answerInput = prompt(questionText);
	if (answerInput.toUpperCase() === realAnswer(1) || 
		answerInput.toUpperCase() === realAnswer(2) ||
		answerInput.toUpperCase() === realAnswer(3) ||){
		order += answerInput;
	}
}

// call the QUESTION function with the order options
question("What shell do you want? You can choose burrito, bowl, or taco.", ["BURRITO", "BOWL", "TACO"]);
question("What meat would you like inside? You can choose steak, chicken, or sofritas.", ["STEAK", "CHICKEN", "SOFRITAS"]);
question("What base would you like? You can choose rice, beans, or veggies.", ["RICE", "BEANS", "VEGGIES"]);
question("What toppings would you like? You can choose salsa, sour cream, or corn.", ["SALSA", "SOUR CREAM", "CORN"]);

// output their order
document.write("<p>You ordered: " + order + "<p>");