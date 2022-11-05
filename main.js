Webcam.set({
width:400,
height:400,
image_format:'jpg',
jpg_quality:90
});
camara=document.getElementById("camara");
Webcam.attach(camara);
function papa(){
 Webcam.snap(function(fotito){
 document.getElementById("foto").innerHTML="<img id='caracol' src='"+fotito+"'>";
 })
}
objeto=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/L0ALdQLlo/model.json',vaca);
function vaca(){
console.log("ya se creo el modelo");
}
function pro(){
    image=document.getElementById("caracol");
    objeto.classify(image,bicho);
}
function bicho(errores,resultados){
if (errores) {
    console.log(errores);
} else {
    console.log(resultados);
   document.getElementById("object").innerHTML=resultados[0].label;
   document.getElementById("pet").innerHTML=resultados[0].confidence.toFixed(3);
}
}