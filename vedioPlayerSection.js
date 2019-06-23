var curentVid = 1;

function nxtBtn() {
    curentVid += 1;

    $('#orderMsg').text(curentVid);

    if (curentVid > 5) {
        curentVid = 5;
    }


    switch (curentVid) {
        case 1:
            document.getElementById('vid_frame_player').src = 'http://youtube.com/embed/fB8UTheTR7s?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1';
            break;

        case 2:
            document.getElementById('vid_frame_player').src = "http://youtube.com/embed/RTHI_uGyfTM?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;&controls=0&amp;autohide=1";
            $('#back').on('onclick');
            $("#back").css({
                'color': '#FE5F55',
                'cursor': 'pointer',
                'pointer-events': 'auto'

            });
            $('#back').bind("hover");
            break;

        case 3:
            document.getElementById('vid_frame_player').src = 'http://youtube.com/embed/0SNhAKyXtC8?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1';
            break;


        case 4:
            document.getElementById('vid_frame_player').src = 'http://youtube.com/embed/fB8UTheTR7s?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1';
            break;

        case 5:
            document.getElementById('vid_frame_player').src = "http://youtube.com/embed/F1f-gn_mG8M?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;&controls=0&amp;autohide=1";
            //            disable next button 
            $('#next').off('onclick');
            $("#next").css({
                'color': '#C9C9C9',
                'pointer-events': 'none',
                'cursor': 'default',
            });

            $('#next').unbind("hover");


            break;
        default:

    }
}

function prevBtn() {
    curentVid -= 1;
    $('#orderMsg').text(curentVid);

    if (curentVid < 1) {
        curentVid = 1;
    }

    switch (curentVid) {
        case 1:
            document.getElementById('vid_frame_player').src = 'http://youtube.com/embed/fB8UTheTR7s?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1';
            $('#back').off('onclick');
            $("#back").css({
                'color': '#C9C9C9',
                'pointer-events': 'none',
                'cursor': 'default',
            });

            $('#back').unbind("hover");
            break;

        case 2:
            document.getElementById('vid_frame_player').src = "http://youtube.com/embed/RTHI_uGyfTM?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;&controls=0&amp;autohide=1";
            break;

        case 3:
            document.getElementById('vid_frame_player').src = 'http://youtube.com/embed/0SNhAKyXtC8?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1';
            break;


        case 4:
            document.getElementById('vid_frame_player').src = 'http://youtube.com/embed/fB8UTheTR7s?autoplay=1&amp;rel=0&amp;showinfo=0&amp;autohide=1';
            $('#next').on('onclick');
            $("#next").css({
                'color': '#FE5F55',
                'cursor': 'pointer',
                'pointer-events': 'auto'

            });
            $('#next').bind("hover");
            break;

        case 5:
            document.getElementById('vid_frame_player').src = "http://youtube.com/embed/F1f-gn_mG8M?rel=0&amp;modestbranding=1&amp;showinfo=0&amp;&controls=0&amp;autohide=1";
            break;
        default:

    }

}

function off(idVal) {
    $(idVal).off('onclick');
    $(idVal).css({
        'color': '#C9C9C9',
        'pointer-events': 'none',
        'cursor': 'default',
    });
    $(idVal).unbind("hover");
}

function on(idVal) {
    $(idVal).on('onclick');
    $(idVal).css({
        'color': '#FE5F55',
        'cursor': 'pointer',
        'pointer-events': 'auto'

    });
    $(idVal).bind("hover");

}

function setCurVid(vidNum) {
    curentVid = vidNum;
    $('#orderMsg').text(vidNum);
    if (vidNum == 1) {
        //        prevous button off
        let offVal = '#back';
        off(offVal);
        //        next button on
        let onVal = '#next';
        on(onVal);

    } else if (vidNum == 5) {
        //        next button off

        let offVal = '#next';
        off(offVal);
        //        prevous button on

        let onVal = '#back';
        on(onVal);

    }

    if (vidNum != 1 && vidNum != 5) {
        //       prevouse and next buttons on
        let onVal = '#next';
        on(onVal);
        onVal = '#back';
        on(onVal);
    }


}