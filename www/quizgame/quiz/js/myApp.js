

$(document).ready(function () {
    $('#loader').show();
    setTimeout(myLoading, 3000);

    function myLoading() {

        $('#loader').hide();

    }


    var current = 7;

    $("#notiFier > a [data-badge='" + current +"']");


   // $("#notiFier").find("a:data(5)").on('mouse')

});

function loaderSpin() {

    $('#loader').show();
    setTimeout(myLoading, 7000);

    function myLoading() {

        $('#loader').hide();

    }

}



function loaderSpinMini() {


    $('#loader-mini').show();
    setTimeout(myLoading, 7000);

    function myLoading() {


        $('#loader-mini').hide();

    }

}






$(document).ready(function () {

    setTimeout(buttonAnimate, 3000);
        function buttonAnimate() {

            $('.main-buttons li').addClass('animated bounceInDown');

        }

        $('#userProf').on('click', function(){

            window.location = 'index.html';
            //$('.main-buttons li a').addClass('animated zoomIn');
        });

    $('#playGameBtn').on('click', function() {
        $('#videoPlayer').hide();
        $('#playBack').hide();
        window.location='';

    })


});


$('ul.answers li input').addClass('checkAnswer');


function loadQuestions(){

    $.ajax({
        type: 'GET',

        url: base_url + '/adminer/jsonquest.php',
        data: { get_param: 'value' },
        success: function (data) {
            // quizJSON = data;
            //var quizJSON = data;
            //alert(data);
            // localStorage.quizdata = data;

            // THIS IS ALREADY STRINGIFIED
           // var string = data;
            var string = data;

// DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
            localStorage.setItem('quizdata', string);

            // READ STRING FROM LOCAL STORAGE
            // var retrievedObject = localStorage.getItem('quizJSON');
            var quizJSON = localStorage.getItem('quizdata');

// CONVERT STRING TO REGULAR JS OBJECT
            //var parsedObject = JSON.parse(retrievedObject);
           // var parsedObject = JSON.parse(quizJSON);
           // var parsedObject = JSON.stringify(quizJSON);
            console.log(quizJSON);
            //$('#cand').val(quizJSON);



           // document.write(quizJSON);
        }



    })
}



//loadQuestions();



function loadQuestions2(){

    $.ajax({
        type: 'GET',

        url: base_url + '/index.php/jsoncode2',
        data: { get_param: 'value' },
        success: function (data) {
            // quizJSON = data;
            var quizJSON = data;
            //alert(data);
           // localStorage.quizdata = data;
            localStorage.quizJSON = data;
            // THIS IS ALREADY STRINGIFIED
            var string = data;

// DO NOT STRINGIFY AGAIN WHEN WRITING TO LOCAL STORAGE
            localStorage.setItem('quizJSON', string);

            // READ STRING FROM LOCAL STORAGE
            // var retrievedObject = localStorage.getItem('quizJSON');
            var quizJSON = localStorage.getItem('quizJSON');

// CONVERT STRING TO REGULAR JS OBJECT
            //var parsedObject = JSON.parse(retrievedObject);
            // var parsedObject = JSON.parse(quizJSON);
            // var parsedObject = JSON.stringify(quizJSON);
            console.log(quizJSON);
            $('#cand').val(quizJSON);



           // document.write(quizJSON);
        }



    })
}
//loadQuestions2();

$(function() {


    $("#aunit").change(function() {

        var $dropdown = $(this);

        $.getJSON("json/data.json", function(data) {

            var key = $dropdown.val();
            var vals = [];

            switch(key) {
                case 'west':
                    vals = data.west.split(",");
                    break;
                case 'central':
                    vals = data.central.split(",");
                    break;
                case 'east':
                    vals = data.east.split(",");
                    break;
                case 'base':
                    vals = ['Please choose from above'];
            }

            var $jsontwo = $("#reg_area");
            $jsontwo.empty();
            $.each(vals, function(index, value) {
                $jsontwo.append("<option>" + value + "</option>");
            });

        });
    });

});

/*
$(".sweet-message").on('click', function() {
    $(this).removeClass('unread');
});
*/


function openLeaderBoard() {
window.open('http://ec2-54-191-42-126.us-west-2.compute.amazonaws.com/fizzquizzserver/adminer/mobile_controllers/user_result.php','_blank','location=no','closebuttoncaption=Return')
}


function externalLoad() {
    loaderSpinMini();
   // $("#externalLoad").html('<object style="width:100%; height: 100%;" data="video-playlist.html"/>');




    /******** video ****/

//Ensure all links in the div "#player" act in the same way:
    var video_playlist = document.getElementById("player");
    var links = video_playlist.getElementsByTagName('a');
    for (var i=0; i<links.length; i++) {
        links[i].onclick = handler;
    };
//Give functionality to the links:
    function handler(e) {
        e.preventDefault(); //Prevents default action of links going directly to the source file
        videotarget = this.getAttribute("href"); //looks at the filename in the link's href attribute
        filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget; //Splits the filename and takes everything before the ".", giving us jus tname without the extension
        video = document.querySelector("#player video"); //Finds div #player and video
        video.removeAttribute("poster"); //Removes the poster attribute in the video tag
        source = document.querySelectorAll("#player video source"); //Finds source elements inside the video tag
        source[0].src = filename + ".mp4"; //defines the MP4 source
       // source[1].src = filename + ".webm"; //defines the WEBM source
      //  source[2].src = filename + ".ogv"; //defines the OGG source
        video.load(); //Loads video when video is selected
        video.play(); //Plays video automatically
    };

    $('#playlist > a').on('click', function () {

        $('#playlist > a').removeClass('selected');
        $(this).addClass('selected');
    })


}

function closeDrawer() {
    $('.mdl-layout__drawer').removeClass('is-visible');
    $('.mdl-layout__obfuscator').hide();


}


function openDrawer() {
    $('.mdl-layout__drawer').addClass('is-visible');
    $('.mdl-layout__obfuscator').show();


}




