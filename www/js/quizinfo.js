var alertTitle = 'FizzQuizz';
//$("#pop-alert").hide();
/*********** RUN ONLY ONCE JUST TO GET THE LATEST USER"S QUIZ RECORD IN A TABLE ****************/

function get_Quiz_History() {
    $('#output').empty();
    var user_id = localStorage.getItem('user_id');
    $('#output')
        .html('<th colspan="4" style="padding: 0 5px; background: silver;">Stat</th>');
    $.getJSON(base_url + '/get_user_quiz_history/' + user_id, function(results) {

        //$.each(result, function ( i, field ) {
        $.each(results, function(i, fields) {

            $("#output")
                .append("<tr><td><label>Set</label></td><td> " + fields.datefrom + " </td><td><label>Score</label></td><td>" + fields.score_bottle + "</td></tr>");

                /*********** RUN ONLY ONCE JUST TO GET THE DATE FROM LAST ROW ON THE TABLE ****************/
            $("#output2")
                .append("<li> " + fields.datefrom + " </li>");

            var checkLQuiz = $("#output2 li:nth-child(1)")
                .text();
            console.log("checkLQuiz", checkLQuiz);
            localStorage.setItem('checkLQuiz', checkLQuiz);

        });
    })
}
/******************************************/



function myFunction() {
    $("#capturePhoto").hide();
    // window.location.replace("main.html");
}


/*********** RUN ONLY ONCE JUST TO GET THE DATE FROM LAST ROW ON THE TABLE ****************/
function validateMyTurn() {
    //getInitQuizData


    var myDivision2 = localStorage.getItem("user_division");
    $.getJSON(base_url + "/jsonQuiz/" + myDivision2, function (result) {
        console.log("date_published", result.date_published);
        console.log("date_expire", result.date_expire);
        localStorage.setItem("dateFrString", result.date_published);
        localStorage.setItem("dateToString", result.date_expire);
        var dateFrStringVerify = localStorage.getItem("dateFrString");
        var checkLastQuiz = localStorage.getItem("checkLQuiz");
        if (dateFrStringVerify === checkLastQuiz) {
          //  $("#pop-alert").hide();

          //  myApp.showIndicator();
        //    noupdate();
            console.log("NO updates yet.");
          //  $("#getStarted2").attr("disabled", "disabled");
            $("#getStarted3").show();
            //$("#getStarted3").html("<p style='color:red; text-align: center;'>SEE YOU ON THE NEXT ROUNDS...</p>");
            $("#getStarted2").hide();
          //  $("#getStarted2").css("background", "none");

        } else {
          //  myApp.showIndicator();
        //    hasupdate();
            console.log("Has NEW updates!");
          //  $("#getStarted2").html("<span class='animated-icon'></span>");
            //$("#getStarted2").removeAttr("disabled", "disabled");
          //  $("#getStarted2").show();
            $("#getStarted3").hide();
            $("#getStarted2").show();
            $("#getStarted2").addClass("animate fadeInUpBig options fast");
          //  $("#pop-alert").show();
          //  myApp.alert("New Quiz", alertTitle);

        }


    /*    function noupdate(){

          $("#getStarted2").attr("disabled", "disabled");
          $("#getStarted2").html("<p>See you on the next round...</p>");


        }




        function hasupdate(){

          $("#getStarted2").html("<span class='animated-icon'></span>");
          $("#getStarted2").removeAttr("disabled", "disabled");

        }*/

        /*  getInitQuizData(); */


    });
}






/*********** GETTING THE QUESTIONS AND ANSWER SCRIPT  ****************/


function ConfirmOk() {

    $("#pop-alert").hide();
    window.location.replace("fizzquizzData.html");
}


function letterInfo() {
    localStorage.removeItem("QuizData");
    $("#pop-alert").hide();
    window.location.replace("index.html");
}



function goto_home() {
    window.location.replace("main.html");
}




/*

function checkIfQuizXX() {

//check kung my questions
    $.post( base_url+"/check_quiz_status/"+localStorage.getItem("user_id"))
        .done(function( data ) {
            if(data == 1) {
                console.log("Quiz has contents");
               // alert("1");
                validateMyTurn();
              //  $("#getStarted2").removeAttr("disabled", "disabled");

              //  $("#getStarted2").html("<p>Get Started!</p>");



            }
            else {
                validateMyTurn();
              //  myApp.alert("No new quiz as of this time");
                $("#getStarted2").attr("disabled", "disabled");

              //  $("#getStarted2").html("<p>See you on the next round...</p>");
                //    alertQuizNoContent();
              //  console.log("Quiz has NO contents");
                //window.location.replace("quizempty.html");
            }
            //    alert(data);
        })
}


*/

//getQuizData();


/*

 function checkQuizTake() {
 var checkAttempt = localStorage.getItem("checkLQuiz");
 var checkDateFrString = localStorage.getItem("dateFrString");
 // $("#modal1").show();

 Date.parse(checkAttempt);
 Date.parse(checkDateFrString);
 //console.log("checkAttempt:", checkAttempt);
 //console.log("checkDateFrString", checkDateFrString);
 if (checkAttempt === checkDateFrString) {
 console.log("2nd Time");
 // $("#popupDialog").show();
 // $("#playQuiz").hide();
 alert("Thank you for taking the quiz! See you for the next rounds.");
 window.location.replace("index.html");

 } else {
 console.log("First Time");
 $("#playQuiz").removeAttr("disabled");
 //  videoScreen();
 // window.open(base_url + "/app/views/media/video.php", "_blank", "location=no", "closebuttoncaption=Return");
 // window.open(base_url + "/app/views/media/teaser.html", "_blank", "location=no", "closebuttoncaption=Return");

 }
 }



 */


$("#getStarted2").on("click", function () {
    $(".checkAnswer").hide();
    $("#raysDemoHolder").hide();


    //  $("#loadQuiz").load("fizzquizzData.html");
});


function pullFreshQuizItems() { //getQuizData


    var myDivision2 = localStorage.getItem('user_division');
    var endDate = localStorage.getItem('dateToString');


    $.get(base_url+"/jsonQuiz/" + myDivision2 + "/" + endDate, function (data) {
        // $( ".result" ).html( data );
        console.log(data);
        // alert( "Load was performed." );
        localStorage.setItem('QuizData', data);

    });


}



function playMessage(){
   function onDeviceReady() {

        $.ajax({
  		    url: base_url+"/getvideo/single",
  		    dataType: "json",
  			}).success(function (data) {
  				for (i = 0; i < data.length; i++) {
  				var videoFile = data[i]["video"];
  				var nameFile = (data[i]["name"]);





  				$("video").append("<source src=  '+ videoFile + '><meta property='og:video:secure_url' content='+ videoFile + ' > <meta property='og:video:type' content='video/mp4'>" );
  				console.log(nameFile);
  				console.log(videoFile);
  				}

  		});
    }
}
function runScanProfile(){

          get_Quiz_History();

          pullFreshQuizItems();

          validateMyTurn();

}



function scanIfQuizAvailable(){

            setTimeout(myFunctionLoading5, 3000);

            function myFunctionLoading5() {

              runScanProfile();
              myApp.showIndicator();

                setTimeout(myFunctionLoadingOut5, 3000);
                function myFunctionLoadingOut5() {
                  myApp.hideIndicator();

                }
            }

}




function loadQuestionItems() {
    $('#raysDemoHolder').hide();
}
//scanIfQuizAvailable();




function post_score_new() {
    //myApp.showIndicator();
    var user_id =  $("#user_id").val();
    var datefromDynamic = $("#datefrom").val();
    var score_bottle = $("#score_bottle").val();
    var attempts = $("#attempts").val();

    var divisions = $("#divisions").val();
    var area = $("#area").val();
    var aunit = $("#aunit").val();


    console.log("Attempts", attempts);


    $.get(base_url + "/user_results_new/update/" + user_id + "/" + datefromDynamic + "/" + area + "/"  + divisions + "/" + aunit + "/" +  score_bottle, function ( data ) {


        if (data == 0) {
          //	myApp.hideIndicator();
              myApp.alert("uh oh, try again.", alertTitle);
            // $$("#update_0").show();
        } else if (data == 1) {
            attempts = 1;
            //	myApp.hideIndicator();
            localStorage.setItem("attempts", attempts);
          /*  $$$('.confirm-ok').on('click', function () {
          myApp.confirm('Score Recorded!', function () {
              myApp.alert('You have clicked the Ok button!!!');
          });*/
            myApp.alert("Score Recorded!", alertTitle);
            console.log("score recorded");
            localStorage.removeItem("QuizData");
           // window.location.replace("index.html");

            // window.location.replace("#index");


      // });




        }

        localStorage.setItem("recent_quiz", datefromDynamic);
//        goto_home();

    });
}
