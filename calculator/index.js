let result = document.getElementById('showing-display')
function display(num){
    result.value += num;
}
function Calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(err){
        result.value = "";
        alert("Your input is " + err);
    }
}
function deleteall(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0,-1);
}