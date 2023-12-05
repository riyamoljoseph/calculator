// 1 display num in text box
function displayNumber(num){
    result.value+=num
}

//2. clear text box

function clearBox(){
    result.value=''
}

//3.evulate expression

function evaluateExp()
// {
//     exp=result.value
//     output=eval(exp)
//     result.value=output
// }

//method2
{
result.value=eval(result.value)
}




//4.REmove lat item

function removelastitem()
{
    result.value=result.value.slice(0,-1)
}