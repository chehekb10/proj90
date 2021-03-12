function send()
{
    number1= document.getElementById("player1_name_input").value;
    number2= document.getElementById("player2_name_input").value;
    actual_answer= parseInt(player1_name_input) * parseInt(player2_name_input);
    question_number= "<h4>" + player1_name_input + " X " + player2_name_input +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("player1_name_input").value = "";
    document.getElementById("player2_name_input").value = "";
}