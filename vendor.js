// To Link number and text box !!!
function num(val){
    document.getElementById("text-box").value+=val;
}    
// To calculate the numbers
function calc(){
    let y = document.getElementById("text-box").value;
  let z = eval(y);
document.getElementById("text-box").value=z;
}
// To clear the text box!!!
function rem(){
    let clr = document.getElementById("text-box").value.slice(0,-1);
    document.getElementById("text-box").value=clr;
   }
  //  To erase whole numbers!!!
  function del(){
    document.getElementById("text-box").value = "";
  }

