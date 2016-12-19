

//get the modal1
//get the modal2
var modal1=document.getElementById("attitudeModal");
//get the button that opens the modal
var btn1 = document.getElementById("modal1Btn");
btn1.addEventListener("click",function(){
  $("#attitudeModal").modal("show");
});

//get the modal2
var modal2=document.getElementById("assessmentModal");
//get the button that opens the modal
var btn2 = document.getElementById("modal2Btn");


var q1Value = 0;
var q2Value = 0;
var q3Value = 0;
var q4Value = 0;
var qTotal;



btn2.addEventListener("click", function(event){
  document.getElementById('ok').classList.add("doNotShow");
  document.getElementById('good').classList.add("doNotShow");
  document.getElementById('great').classList.add("doNotShow");


	// Code to select the CHECKED one.
	var q1Value = Number(document.querySelector('[name="q1"]:checked').value);
  var q2Value = Number(document.querySelector('[name="q2"]:checked').value);
  var q3Value = Number(document.querySelector('[name="q3"]:checked').value);
  var q4Value = Number(document.querySelector('[name="q4"]:checked').value);
qTotal = q1Value + q2Value + q3Value + q4Value;
  //alert(qTotal);
  $("#assessmentModal").modal("show");

//logic of which feedback to show
	document.getElementById('score').innerHTML = "Your total score is " + qTotal;
   	if (qTotal <= 4) {
   		 document.getElementById('ok').classList.remove('doNotShow');
   	}
    else if  ((4 < qTotal) && (qTotal <= 8)) {

      document.getElementById('good').classList.remove('doNotShow');
    }


    else {
 		document.getElementById('great').classList.remove('doNotShow');
   	}



 });


$.modal.close();
