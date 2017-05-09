/**
 * Created by piotrek on 09.05.17.
 */

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