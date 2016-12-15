
// var el = document.getElementById("situation1").addEventListener("click", function() {
//   answer = prompt("Please enter your answer");
// });


  //});
//get the modal
var modal=document.getElementById("assessmentModal");
//get the button that opens the modal
var btn = document.getElementById("modalBtn");

var q1Value = 0;
var q2Value = 0;
var qTotal;

btn.addEventListener("click", function(event){
	// Code to select the CHECKED one.
	var q1Value = Number(document.querySelector('[name="q1"]:checked').value);
	alert(q1Value);
  $("#assessmentModal").modal("show");
	qTotal = q1Value + q2Value;

	document.getElementById('good').innerHTML = qTotal + " This is your score";

	if (qTotal <= 2) {
		// document.getElementById('...').classList.add('doNotShow');
	} else {
		document.getElementById('great').classList.remove('doNotShow');
	}
});

//var btn=document.getElementById("modalBtn");
//btn.onclick=function(){
  //modal.style.display="block";
//};
