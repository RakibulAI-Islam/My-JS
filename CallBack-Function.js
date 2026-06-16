// Sum.
function display(some) 
{
    console.log(some);
}

function myCalculator(num1, num2) 
{
    let sum = num1+ num2;
    return sum;
}

let result = myCalculator(5,5);

display(result);

//Sum.
function display(some) 
{
    console.log(some);
}

function myCalculator(num1, num2) 
{
    let sum = num1+ num2;
    display (sum);
}

myCalculator(5,5);

//Sum.


function calculator(num1, num2, callback) 
{
    let sum = num1+ num2;
    
    if (callback) callback(sum);
    
    return sum;
}

calculator(5,5, function(result)
{ console.log(result);

});






