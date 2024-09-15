let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound')

dollar.onkeyup = function(){
    // console.log(dollar.value);
    pound.value = dollar.value*39
}
pound.onkeyup = function(){
    dollar.value = pound.value/39
}


// it's a small js program to prctice on events in js ===> it's about trasform eg pound to dollar and dollar to eg pound