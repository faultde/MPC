let volume = .25;
let rate = 1.0;
var knob = $('#knob');
let loop = false;

const idArr = $(".pad").map(function (index) {
    return this.id;
})



//Drum Kit Banks

let kit = {};
kit.kick = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Ac_K.wav'],
    volume: volume,
    rate: rate
});

kit.snare = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Aco_Snr.wav'],
    volume: volume,
    rate: rate
});

kit.hihat = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Ac_H.wav'],
    volume: volume,
    rate: rate
})

kit.bongo1 = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Bngo_1.wav'],
    volume: volume,
    rate: rate
})

kit.bongo2 = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Bngo_2.wav'],
    volume: volume,
    rate: rate
})

kit.ohat = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/CL_OHH2.wav'],
    volume: volume,
    rate: rate
})

kit.what = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Chant+What+007+Lil+John.wav'],
    volume: volume,
    rate: rate
})

kit.rise = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/FX+Riser+001+Lex+Luger+Effect.wav'],
    volume: volume,
    rate: rate
})

kit.reload = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/War+FX+Gun+Reload+001.wav'],
    volume: volume,
    rate: rate
})


//Sample Bank

let sample = {};
sample.A = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/CanadianBling.wav'],
    volume: volume,
    loop: true
});



//Animation Functions





//Mouse Clicks//

//Pad Clicks
$(".pad").click(function (e) {
    var target = e.target.id;
    var pad = $(this);

    //update screen
    $("#text-display").text(target);

    //button press
    pad.addClass("padActive");

    setTimeout(function () {
        pad.removeClass('padActive');
    }, 100);


    if (kit[target]) {
        kit[target].play();
    }
})


//Sample Clicks
$('#button3').click(function (e) {
    $("#button3").toggleClass("samplePlay");

    if (loop === false) {
        loop = true;
        console.log("loop begin")
        sample.A.play();
    } else {
        console.log("loop end")
        loop = false;
        sample.A.stop();
    }

})




//Keypress Events
function handlekeydown(e) {
    var element = $('[data-key=' + e.keyCode + ']');
    if (element.length) {
        console.log(element[0].id);
        var idName = element[0].id;

        //play sound
        kit[idName].play();

        //update screen
        $("#text-display").text(idName);
        element.addClass("padActive");

        //button press animation
        element.addClass("padActive");
        setTimeout(function () {
            element.removeClass('padActive');
        }, 100);


    }
}



window.addEventListener('keydown', handlekeydown);
