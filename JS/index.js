let volume = .25;
let rate = 1.0;
var knob = $('#knob');
let loop = false;
let currentSample = 1;


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
    src: ['https://s3.amazonaws.com/cssmpc/Doda.wav'],
    volume: volume,
    loop: true,
    preload: true,
    sprite: {
        loop: [0000, 2500]
    }
});
sample.B = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Doda.wav'],
    volume: volume,
    loop: true,
    preload: true,
    sprite: {
        loop: [0000, 2500]
    }
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
$('#button1').click(function (e) {
    $("#button1").toggleClass("samplePlay");

    if (loop === false) {
        loop = true;
        console.log("loop begin")
        if (currentSample === 1) {
            sample.A.play("loop");
        } else if (currentSample === 2) {
            sample.B.play("loop");

        } else if (currentSample === 3) {
            sample.C.play('loop');
        } else {
            console.log('error')
        }
    } else {
        console.log("loop end")
        loop = false;
        sample.A.stop();
        sample.B.stop();
        sample.C.stop();

    }



})

$('#button3').click(function (e) {
    if (currentSample > 1) {
        currentSample--;

        if (currentSample === 1) {
            $("#text-display").text("Sample1");
            currentSample = 1;
            console.log(currentSample)

        } else if (currentSample === 2) {
            $("#text-display").text("Sample2");
        } else if (currentSample === 3) {
            $("#text-display").text("Sample3");
        }

    }
})

$('#button4').click(function (e) {
    if (currentSample < 3) {
        currentSample++;

        if (currentSample === 1) {
            $("#text-display").text("Sample1");
        } else if (currentSample === 2) {
            $("#text-display").text("Sample2");
        } else if (currentSample === 3) {
            $("#text-display").text("Sample3");
            console.log(currentSample);
        }

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
