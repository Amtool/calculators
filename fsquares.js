var b=0,f;function g(d){b||(b=new Worker("fsquaresW.js?2807"),b.onmessage=function(a){4>f?document.getElementById("output").value=a.data:document.getElementById("result").innerHTML=a.data});b.postMessage(d)}
window.onload=function(){var d;document.getElementById("input")&&(document.getElementById("input").onkeypress=function(a){var c=document.getElementById("digits").value;f=document.getElementById("app").value;var e=document.getElementById("input").value;a||(a=window.event);13==(a.keyCode||a.which)&&(a=document.getElementById("output"),""==e?a.value=f&1?"Por favor ingrese un n\u00famero o expresi\u00f3n.":"Please type a number or expression.":(a.value=0==f?"Computing sum of squares...":1==f?"Calculando suma de cuadrados...":
2==f?"Computing sum of cubes...":"Calculando suma de cubos...",d=c+","+f+","+e,g(d)))});document.getElementById("calc")&&(document.getElementById("calc").onclick=function(){var a=document.getElementById("app").value,c=document.getElementById("result"),e=document.getElementById("num").value,h=document.getElementById("delta").value,k=document.getElementById("den").value,l=document.getElementById("digits").value;document.getElementById("help").style.display="none";c.style.display="block";""==e?c.innerHTML=
a&1?"Por favor ingrese un n\u00famero o expresi\u00f3n para el numerador.":"Please type a number or expression for numerator.":""==h?c.innerHTML=a&1?"Por favor ingrese un n\u00famero o expresi\u00f3n para el argumento de la ra\u00edz cuadrada.":"Please type a number or expression for square root argument.":""==k?c.innerHTML=a&1?"Por favor ingrese un n\u00famero o expresi\u00f3n para el denominador.":"Please type a number or expression for denominator.":(c.innerHTML=a&1?"Calculando desarrollo en fracciones continuas...":
"Computing continued fraction expansion...",d=l+","+a+","+e+String.fromCharCode(0)+h+String.fromCharCode(0)+k+String.fromCharCode(0),g(d))},document.getElementById("helpbtn").onclick=function(){document.getElementById("help").style.display="block";document.getElementById("result").style.display="none"})};
