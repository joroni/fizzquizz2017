/**
 * Created by johnraymundniconi on 11/19/16.
 */


/*

document.querySelector('.sweet-notifications').onclick = function () {
    /*  var Lol =

    '<div class="col s12 m8 l9"> ' +
    '<ul class="collection">' +
    '<li class="collection-item avatar">' +
    '<img src="images/avatar.jpg" alt="" class="circle">' +
    '<span class="title">Title</span>' +
    '<p>First Line' +
    '<br> Second Line' +
    '</p>' +
    '<a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>' +
    '</li>' +
    '<li class="collection-item avatar">' +
    '<i class="mdi-file-folder circle"></i>' +
    '<span class="title">Title</span>' +
    '<p>First Line' +
    '<br> Second Line' +
    '</p>' +
    '<a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>' +
    '</li>' +
    '<li class="collection-item avatar">' +
    '<i class="mdi-action-assessment circle green"></i>' +
    '<span class="title">Title</span>' +
    '<p>First Line' +
    '<br> Second Line' +
    '</p>' +
    '<a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>' +
    '</li>' +
    '</ul>' +
    '</div>';

*/
  /*  swal('Hellow');
    $.get( "http://localhost:63342/fizzquizzz6/www/notification-list.html", function( data ) {

        $('.showSweetAlert').html(data);
       // alert( "Load was performed." );
    });
*/


  //  $.get( "http://localhost:63342/fizzquizzz6/www/notification-list.html", function( data ) {

//        $('.showSweetAlert').html(data);
        // alert( "Load was performed." );
//    });

  //  swal(data);

//};
/*
document.querySelector('.sweet-message').onclick = function () {
    $(this).removeClass('unread');
    $(this).find($('a.mdl-list__item-secondary-action > i')).removeClass('new');

    swal({
            title: "Are you sure?",
            text: "Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.",
            type: "info",
            showCancelButton: false,
            confirmButtonClass: 'btn-info',
           // confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false
            //closeOnCancel: false

        });


};

*/

document.querySelector('.sweet-1').onclick = function () {
    swal("Here's a message!");
};

document.querySelector('.sweet-2').onclick = function () {
    swal("Here's a message!", "It's pretty, isn't it?")
};

document.querySelector('.sweet-3').onclick = function () {
    swal("Good job!", "You clicked the button!", "success");
};

document.querySelector('.sweet-4').onclick = function () {
    swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: 'btn-danger',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false
            //closeOnCancel: false
        },
        function () {
            swal("Deleted!", "Your imaginary file has been deleted!", "success");
        });
};

document.querySelector('.sweet-5').onclick = function () {
    swal({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: 'btn-danger',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function ( isConfirm ) {
            if (isConfirm) {
                swal("Deleted!", "Your imaginary file has been deleted!", "success");
            } else {
                swal("Cancelled", "Your imaginary file is safe :)", "error");
            }
        });
};

document.querySelector('.sweet-6').onclick = function () {
    swal({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: 'assets/thumbs-up.jpg'
    });
};

document.querySelector('.sweet-7').onclick = function () {
    swal({
        title: "An input!",
        text: "Write something interesting:",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
    }, function ( inputValue ) {
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("You need to write something!");
            return false
        }
        swal("Nice!", "You wrote: " + inputValue, "success");
    });
};

document.querySelector('.sweet-8').onclick = function () {
    swal({
        title: "Ajax request example",
        text: "Submit to run ajax request",
        type: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true
    }, function () {
        setTimeout(function () {
            swal("Ajax request finished!");
        }, 2000);
    });
};

document.querySelector('.sweet-10').onclick = function () {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: 'btn-primary',
        confirmButtonText: 'Primary!'
    });
};

document.querySelector('.sweet-11').onclick = function () {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "info",
        showCancelButton: true,
        confirmButtonClass: 'btn-info',
        confirmButtonText: 'Info!'
    });
};

document.querySelector('.sweet-12').onclick = function () {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "success",
        showCancelButton: true,
        confirmButtonClass: 'btn-success',
        confirmButtonText: 'Success!'
    });
};

document.querySelector('.sweet-13').onclick = function () {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: 'btn-warning',
        confirmButtonText: 'Warning!'
    });
};

document.querySelector('.sweet-14').onclick = function () {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "error",
        showCancelButton: true,
        confirmButtonClass: 'btn-danger',
        confirmButtonText: 'Danger!'
    });
};


!function ( d, s, id ) {
    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs');

/*
<div class="col s12 m8 l9">

    <ul class="collection">
        <li class="collection-item avatar">
            <img src="images/avatar.jpg" alt="" class="circle">
                <span class="title">Title</span>
                <p>First Line
                    <br> Second Line
                </p>
                <a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>
        </li>
        <li class="collection-item avatar">
            <i class="mdi-file-folder circle"></i>
            <span class="title">Title</span>
            <p>First Line
                <br> Second Line
            </p>
            <a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>
        </li>
        <li class="collection-item avatar">
            <i class="mdi-action-assessment circle green"></i>
            <span class="title">Title</span>
            <p>First Line
                <br> Second Line
            </p>
            <a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>
        </li>
        <li class="collection-item avatar">
            <i class="mdi-av-play-arrow circle red"></i>
            <span class="title">Title</span>
            <p>First Line
                <br> Second Line
            </p>
            <a href="#!" class="secondary-content"><i class="mdi-action-grade"></i></a>
        </li>
    </ul>

</div>
*/