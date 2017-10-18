



var computed = false;

function pushStack(form){
	form.stack.value = form.display.value
	form.display.value = 0
}


function addChar(input, character){
	if(computed){
		pushStack(input.form)
		computed = false
	}

	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}


function deleteChar(input){
	input.value = input.value.substring(0, input.value.length - 1)
}


function add(form){
	form.display.value = parseFloat(form.stack.value)
		+ parseFloat(form.display.value)
	computed = true
}


function subtract(form){
	form.display.value = form.stack.value - form.display.value
	computed = true
}


function multiply(form){
	form.display.value = form.stack.value * form.display.value
	computed = true
}


function divide(form){
	var divisor = parseFloat(form.display.value)

	if(divisor == 0){
		alert("Don't divide by zero, pal...");
		return
	}

	form.display.value = form.stack.value / divisor
	computed = true
}


function changeSign(input){
	if(input.value.substring(0,1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}