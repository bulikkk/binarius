/**
 * Created by piotrek on 09.05.17.
 */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('bintodec').addEventListener('click', function () {
        document.querySelector('.form_bin').classList.toggle('hidden');
        if (!document.querySelector('.form_dec').classList.contains('hidden')) {
            document.querySelector('.form_dec').classList.toggle('hidden');
        }
    });
    document.getElementById('dectobin').addEventListener('click', function () {
        document.querySelector('.form_dec').classList.toggle('hidden');
        if (!document.querySelector('.form_bin').classList.contains('hidden')) {
            document.querySelector('.form_bin').classList.toggle('hidden');
        }
    });
});


function loaddata(val) {
    var data = document.getElementById('bin-input');
    if (data.value === "") {
        document.getElementById("bin-result").innerHTML = "";
    }
    else {
        var digit = parseInt(val, 2) || "Wrong number format";
        document.getElementById("bin-result").innerHTML = digit;
    }
}

function loaddata2(val) {
    var data = document.getElementById('dec-input');
    if (data.value === "") {
        document.getElementById("dec-result").innerHTML = "";
    }
    else {
        var digit = (val >>> 0).toString(2) || "Wrong number format";
        document.getElementById("dec-result").innerHTML = digit;
    }
}