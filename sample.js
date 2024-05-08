$(function(){
    $("#load").click(sendAjax);

});
function sendAjax(){
    console.log("Sending Ajex request");
    //send request here
    $.get("student.txt", handleResponse);
    console.log("sent");
}
function handleResponse(Response){
    console.log("Response Received");
   //console.log(Response);

   //RESPONSE THROUGH AGAX
   $("#result").empty();
  $("#result").append(Response);

}

