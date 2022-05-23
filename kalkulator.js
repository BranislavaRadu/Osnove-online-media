
function insert(num) 
{
document.output.text.value = document.output.text.value + num;
}


function equal()
{
var exp = document.output.text.value;


document.output.text.value = eval(exp)

}


