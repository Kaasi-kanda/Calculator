function transferText(clickedButton){
    var buttonText=clickedButton.textContent;
    var currentText=document.getElementById('targetInput').value;
    var newText=currentText+buttonText
    document.getElementById('targetInput').value=newText;
    

}
function reset(){
    document.getElementById('targetInput').value="";
}
function result(){
    try{
    var cur=document.getElementById('targetInput').value;
    var answer=eval(cur);
    document.getElementById('targetInput').value=answer;
}catch(error){
    document.getElementById('targetInput').value='Error'
    currentText=" "
}

}
transferText();
reset();
result();