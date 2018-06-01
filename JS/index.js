let volume = .25;


let Howls = {};
Howls.kick = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Ac_K.wav'],
    volume: volume
});


Howls.snare = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Aco_Snr.wav'],
    volume: volume
});

Howls.hihat = new Howl({
    src: ['https://s3.amazonaws.com/cssmpc/Ac_H.wav'],
    volume: volume
})


$(".pad").click(function (e) {
    var target = e.target.id;
    $("#text-display").text(target);

    if (Howls[target]) {
        Howls[target].play();
    }
})
