
//$('#pop-alert').hide();
/*********** RUN ONLY ONCE JUST TO GET THE LATEST USER'S QUIZ RECORD IN A TABLE ****************/
function get_Quiz_History() {
    //$('#output').empty();
    var user_id = localStorage.getItem('user_id');
    $('#output').html('<th style="padding: 0 5px; background: silver;">Stats</th><th style="padding: 0 5px; background: silver;">Score</th>');
    $.getJSON(base_url + '/get_user_quiz_history/' + user_id, function (results) {


        //$.each(result, function ( i, field ) {
        $.each(results, function (i, fields) {

            $("#output").append("<tr><td> " + fields.datefrom + " </td><td>" + fields.score_bottle + "</td></tr>");


        });
    })
}


/*********** RUN ONLY ONCE JUST TO GET THE DATE FROM LAST ROW ON THE TABLE ****************/
function get_last_quiz_row() { //get_last_quiz_row
    //$('#output').empty();
    var user_id = localStorage.getItem('user_id');

    $.getJSON(base_url + '/get_user_quiz_last_record/' + user_id, function (results) {


        //$.each(result, function ( i, field ) {
        $.each(results, function (i, fields) {

            $("#output2").append("<li> " + fields.datefrom + " </li>");
            //$('#user_id').text(field.id);
            //    console.log(field.attempts);
            //  console.log(field.datefrom);
            //  console.log(field.score_bottle);
            var checkLQuiz = fields.datefrom;

            localStorage.setItem('checkLQuiz', checkLQuiz);
            console.log("checkLQuiz", checkLQuiz);


        });
    })
}
//get_Quiz_History();



function myFunction() {
    $('#capturePhoto').hide();
    // window.location.replace('main.html');
}


/*********** RUN ONLY ONCE JUST TO GET THE DATE FROM LAST ROW ON THE TABLE ****************/
function validateMyTurn() {
    //getInitQuizData


    var myDivision2 = localStorage.getItem('user_division');
    $.getJSON(base_url + '/jsonQuiz/' + myDivision2, function (result) {


        console.log('date_published', result.date_published);
        console.log('date_expire', result.date_expire);
        localStorage.setItem('dateFrString', result.date_published);
        localStorage.setItem('dateToString', result.date_expire);
        dateFrStringVerify = localStorage.getItem('dateFrString');
        var checkLastQuiz = localStorage.getItem('checkLQuiz');
        if (dateFrStringVerify === checkLastQuiz) {
            $('#pop-alert').hide();
            loaderSpinMini();
            alertCalculating();
            console.log('Already took');
            $('#getStarted2').attr('disabled', 'disabled');
            $('#after_quiz').html('<p>See you on the next round...</p>');
            $('#getStarted2').remove();
          //  $('#getStarted2').css('background', 'none');

        } else {
            loaderSpinMini();
            alertCalculatingNewSet();
            console.log('Ok really first time');
            $('#getStarted2').html('<span class="animated-icon"></span>');
            $('#getStarted2').removeAttr('disabled', 'disabled');
            $('#pop-alert').show();

        }


        function alertCalculating(){

            $('.sweet-alert .sa.sa-custom').css('display', 'inline-block');
            $('.sweet-alert .sa-icon.sa-success').hide();

            $('.sweet-alert h2').html('checking');
            $('.sweet-alert .sa-confirm-button-container').hide();
        }




        function alertCalculatingNewSet(){

            $('.sweet-alert .sa.sa-custom').css('display', 'inline-block');

            $('.sweet-alert .sa-icon.sa-success').show();

            $('.sweet-alert h2').html('New set of questions available');
            $('.sweet-alert .sa-confirm-button-container').show();
        }

        /*  getInitQuizData(); */


    });
}






/*********** GETTING THE QUESTIONS AND ANSWER SCRIPT  ****************/
function pullFreshQuizItems() { //getQuizData


    var myDivision2 = localStorage.getItem('user_division');
    var endDate = localStorage.getItem('dateToString');

   $.get("http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/jsonQuiz/" + myDivision2 + "/" + endDate, function (data) {
        // $( ".result" ).html( data );
        console.log(data);
        // alert( "Load was performed." );
        localStorage.setItem('QuizData', data);

    });


}


function ConfirmOk() {

    $('#pop-alert').hide();
    window.location.replace('fizzquizzData.html');
}


function letterInfo() {
    localStorage.removeItem('QuizData');
    $('#pop-alert').hide();
    window.location.replace('index.html');
}



function goto_home() {
    window.location.replace('main.html');
}






function checkIfQuiz() {

//check kung my questions
    $.post( "http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/check_quiz_status/"+localStorage.getItem("user_id"))
        .done(function( data ) {
            if(data == 1) {
                console.log('Quiz has contents');
               // alert('1');
                validateMyTurn();
                $('#getStarted2').removeAttr('disabled', 'disabled');

                $('#getStarted2').html('<p>Get Started!</p>');



            }
            else {
                validateMyTurn();
                alert('No new quiz as of this time');
                $('#getStarted2').attr('disabled', 'disabled');

                $('#getStarted2').html('<p>See you on the next round...</p>');
                //    alertQuizNoContent();
                console.log('Quiz has NO contents');
                //window.location.replace('quizempty.html');
            }
            //    alert(data);
        })
}




//getQuizData();


/*

 function checkQuizTake() {
 var checkAttempt = localStorage.getItem('checkLQuiz');
 var checkDateFrString = localStorage.getItem('dateFrString');
 // $('#modal1').show();

 Date.parse(checkAttempt);
 Date.parse(checkDateFrString);
 //console.log("checkAttempt:", checkAttempt);
 //console.log("checkDateFrString", checkDateFrString);
 if (checkAttempt === checkDateFrString) {
 console.log("2nd Time");
 // $('#popupDialog').show();
 // $('#playQuiz').hide();
 alert("Thank you for taking the quiz! See you for the next rounds.");
 window.location.replace("index.html");

 } else {
 console.log("First Time");
 $('#playQuiz').removeAttr('disabled');
 //  videoScreen();
 // window.open(base_url + "/app/views/media/video.php", "_blank", "location=no", "closebuttoncaption=Return");
 // window.open(base_url + "/app/views/media/teaser.html", "_blank", "location=no", "closebuttoncaption=Return");

 }
 }



 */


$('#playQuiz').on('click', function () {
    $('#raysDemoHolder').hide();
	
});


get_last_quiz_row();
pullFreshQuizItems();
get_Quiz_History();
validateMyTurn();



