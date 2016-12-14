
var el = document.getElementById("situation1").addEventListener("click", function() {
    answer = prompt("Please enter your answer");
	});


  //});
//get the modal
var modal=document.getElementById("assessmentModal");
//get the button that opens the modal
var btn=document.getElementById("modalBtn").addEventlistener("click",
function(event){
  $("#assessmentModal").modal("show");
});

//var btn=document.getElementById("modalBtn");
//btn.onclick=function(){
  //modal.style.display="block";
//};
