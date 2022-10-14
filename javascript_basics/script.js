var button = document.querySelector('#button');
var result = document.getElementById('result')
var counter = 0;


button.onclick = function adder(){
    counter++
    console.log(counter)
    result.innerHTML = counter
};



