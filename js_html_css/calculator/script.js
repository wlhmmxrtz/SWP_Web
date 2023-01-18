
function buttonAdd(){
    console.log("Add was clicked");
    let num1 = parseInt(document.getElementById("Number1").value);
    let num2 = parseInt(document.getElementById("Number2").value);

    let result = num1 + num2;

    console.log(result);
    document.getElementById("result").innerHTML=result;
}

function buttonSub(){
    console.log("Sub was clicked");
    let num1 = parseInt(document.getElementById("Number1").value);
    let num2 = parseInt(document.getElementById("Number2").value);

    let result = num1 - num2;

    console.log(result);
    document.getElementById("result").innerHTML=result;
}

function buttonMult(){
    console.log("Mult was clicked");
    let num1 = parseInt(document.getElementById("Number1").value);
    let num2 = parseInt(document.getElementById("Number2").value);

    let result = num1 * num2;

    console.log(result);
    document.getElementById("result").innerHTML=result;
}

function buttonDiv(){
    console.log("Div was clicked");
    let num1 = parseInt(document.getElementById("Number1").value);
    let num2 = parseInt(document.getElementById("Number2").value);

    let result = num1 / num2;

    console.log(result);
    document.getElementById("result").innerHTML=result;
}