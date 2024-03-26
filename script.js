function home()
{
    document.getElementById('home').style.display= "block";
    document.getElementById('contact').style.display= "none";
    document.getElementById('about').style.display= "none";
}
function about()
{
    document.getElementById('about').style.display= "block";
    document.getElementById('home').style.display= "none";
    document.getElementById('contact').style.display= "none";
}
function contact()
{
    document.getElementById('contact').style.display= "block";
    document.getElementById('about').style.display= "none";
    document.getElementById('home').style.display= "none";
}