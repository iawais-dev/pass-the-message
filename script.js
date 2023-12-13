var btn = document.getElementById("btn");
var input = document.getElementById("inp");
var output = document.getElementById("output");
btn.onclick= function(){

output.innerText = input.value;
input.value = "";
}
input.addEventListener("keydown" , function(hmm){
   if( hmm.key == "Enter"){
    output.innerText =  input.value;
input.value = "";
   }
})