let volume = .25;

const idArr = $(".pad").map(function (index) {
    return this.id;
})


let loop = false;

//Drum kit
let kit = {};
kit.kick = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Ac_K.wav'],
    volume: volume
});


kit.snare = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Aco_Snr.wav'],
    volume: volume
});

kit.hihat = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Ac_H.wav'],
    volume: volume
})

kit.bongo1 = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Bngo_1.wav'],
    volume: volume
})

kit.bongo2 = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Bngo_2.wav'],
    volume: volume
})

kit.ohat = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/CL_OHH2.wav'],
    volume: volume
})

kit.what = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Chant+What+007+Lil+John.wav'],
    volume: volume
})

kit.rise = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/FX+Riser+001+Lex+Luger+Effect.wav'],
    volume: volume
})

kit.reload = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/War+FX+Gun+Reload+001.wav'],
    volume: volume
})


//Music Sample

let sample = {};
sample.A = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/CanadianBling.wav'],
    volume: volume,
    loop: true
});



//function for pad clicking
$(".pad").click(function (e) {
    var target = e.target.id;
    $("#text-display").text(target);

    if (kit[target]) {
        kit[target].play();
    }
})

//Play Sample Loop
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

//function for keydown

function processId(id) {
    console.log(id);
}

function handlekeydown(e) {
    var element = $('[data-key=' + e.keyCode + ']');
    if (element.length) {
        console.log(element[0].id);
        var idName = element[0].id;

        //play sound
        kit[idName].play();

        //update screen
        $("#text-display").text(idName);

        //button press


    }
}



window.addEventListener('keydown', handlekeydown)
