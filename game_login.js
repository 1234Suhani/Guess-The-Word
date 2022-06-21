var Player_1_Name="";
var Player_2_Name="";

function Add_user(){
    Player_1_Name= document.getElementById("Player1_Input").value;
    Player_2_Name= document.getElementById("Player2_Input").value;

    localStorage.setItem("Name1",Player_1_Name);
    localStorage.setItem("Name2",Player_2_Name);

    window.location="game_page.html";
}