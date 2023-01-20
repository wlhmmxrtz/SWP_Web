 function generateOnClick(){
    console.log("clicked");

    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let ammount = num2 - num1;

    let randomNumber1 = Math.floor(Math.random() * ammount);
    let randomNumber2 = parseInt(num1) + randomNumber1;


    console.log(num1);
    console.log(num2);
    console.log(randomNumber1);
    console.log("the random Number is " + randomNumber2);

    document.getElementById("output").innerHTML="Your random Number is " + randomNumber2;

 }