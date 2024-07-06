

function showMe() {
    document.getElementById("mytext").innerHTML = Date();
}

var on = false;

function changePhoto() {
    on =!on;
    if(on)
        {
            document.getElementById("onoff").innerText = "Off";
            document.getElementById("imagek").src = 'pic_bulbon.gif';

        }
        else{
            document.getElementById("onoff").innerText = "On";
            document.getElementById("imagek").src = 'pic_bulboff.gif';

        }
   
}



function changePhoto1() {
    document.getElementById("imagek").src = 'pic_bulboff.gif';

}