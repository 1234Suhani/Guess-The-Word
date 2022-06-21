Player_1_Name= localStorage.getItem("Name1");
Player_2_Name= localStorage.getItem("Name2");

document.getElementById("Player_Name1").innerHTML=Player_1_Name;
document.getElementById("Player_Name2").innerHTML=Player_2_Name;

var P1Score= 0;
var P2Score=0;

document.getElementById("Player1_Score").innerHTML=P1Score;
document.getElementById("Player2_Score").innerHTML=P2Score;

document.getElementById("QTurn").innerHTML=" Question Turn: "+ Player_1_Name;
document.getElementById("ATurn").innerHTML="Answer Turn: " + Player_2_Name;

function send(){
    word= document.getElementById("Question").value.toLowerCase();
    console.log(word);

    letter1= word.charAt(0);
    letter2= word.charAt(word.length/2);
    letter3= word.charAt(word.length-1);
    console.log(letter1 , letter2 , letter3);

    finalletter= word.replace( letter1,"_");
    finalletter2= finalletter.replace(letter2,"_");
    finalletter3= finalletter2.replace(letter3,"_");
    console.log (finalletter3);

    question_word="<h4 id='word_display'>" + finalletter3 + "</h4>";
    input_box= "<input id='Input' type='text'>";
    check_button="<button id='check' class= 'btn-btn-info' onclick='check()'> Check </button>" ;

    document.getElementById("Output").innerHTML=question_word + input_box + check_button;

}
Qturn="Player_1";
Aturn="Player_2";
function check(){
   get_answer=document.getElementById("Input").value.toLowerCase();
   console.log(get_answer);
   if (get_answer==word) {
  if (Aturn=="Player_1") {
    P1Score= P1Score+1;
  document.getElementById("Player1_Score").innerHTML = P1Score;
  }
  else{
    P2Score=P2Score+1;
    document.getElementById("Player2_Score").innerHTML= P2Score;
  }
   }
   if (Qturn=="Player_1") {
    Qturn="Player_2";
    document.getElementById('QTurn').innerHTML="Question Turn:" + Player_2_Name;
   }
   else{
    Qturn="Player_1";
    document.getElementById('QTurn').innerHTML="Question Turn:" + Player_1_Name;
   }
   if (Aturn=="Player_2") {
    Aturn="Player_1";
    document.getElementById('ATurn').innerHTML="Answer Turn:" + Player_1_Name;
   }
   else{
    Aturn="Player_2";
    document.getElementById('ATurn').innerHTML="Answer Turn:" + Player_2_Name;
   }
   document.getElementById("Question").value = "";
}