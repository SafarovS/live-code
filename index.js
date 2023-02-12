/*let jamoalar= '';
var afco= ['Uzbekistan','Qatar','Australia','NewZelland','Crotia',
'Argentina','Brasil','England','France','Italy','Urugvay','Peru','Mexico','Usa','Gahna','Algerian'];
const randbtn= document.getElementById('rand');

randbtn.addEventListener("click" , function (){
	
	var i=0;
	while(i < 1){
	var son= Math.floor(Math.random() * afco.length);
	var nateja= jamoalar+ afco[son];	
	console.log(son, nateja);
	i++;
	
	}
	
});
*/
function run(){
	let htmlcode= document.getElementById('html-code').value;
	let csscode= document.getElementById('css-code').value;
	let jscode= document.getElementById('js-code').value;
	let output= document.getElementById('output');
	output.contentDocument.body.innerHTML= htmlcode +"<style>"+ csscode +"</style>";
	output.contentWindow.eval(jscode);
}

