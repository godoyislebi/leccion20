// tu codigo va aca
function callbackPromedio(a, b, c, callback) {
	var promedio = (a+b+c)/3;
	 return callback(promedio);
}
 
var segundo= 1;
function segundero (){
 document.getElementById("titulo").innerHTML=segundo++;
}
 setInterval (segundero,1000);