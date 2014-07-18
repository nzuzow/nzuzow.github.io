
function moveContent()
{
    var is_clicked = document.getElementById('clicked').value;

    if( is_clicked == "yes")
    {
        document.getElementById('wrap').style.marginTop = "0px";
        document.getElementById('clicked').value = "no";
    }
    else
    {
        document.getElementById('wrap').style.marginTop = "250px";
        document.getElementById('clicked').value = "yes";
    }
}
