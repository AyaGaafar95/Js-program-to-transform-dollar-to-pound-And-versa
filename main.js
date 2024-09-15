let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound')

dollar.onkeyup = function(){
    // console.log(dollar.value);
    pound.value = dollar.value*39
}
pound.onkeyup = function(){
    dollar.value = pound.value/39
}


