function home()
{
    document.getElementById('services').style.display= "none";
    document.getElementById('contact').style.display= "none";
}
function services()
{
    document.getElementById('services').style.display= "block";
    document.getElementById('contact').style.display= "none";
    document.getElementById('home').style.display= "none";
}
function contact()
{
    document.getElementById('contact').style.display= "block";
    document.getElementById('services').style.display= "none";
    document.getElementById('home').style.display= "none";
}
