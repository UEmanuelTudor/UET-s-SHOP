function openCity(evt, cityName) {
    var i, meniucontent, meniulinks;
    meniucontent = document.getElementsByClassName("meniucontent");
    for (i = 0; i < meniucontent.length; i++) {
        meniucontent[i].style.display = "none";
    }
    meniulinks = document.getElementsByClassName("meniulinks");
    for (i = 0; i < meniulinks.length; i++) {
        meniulinks[i].className = meniulinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

//hanorace
const btn=document.getElementById('btn');

btn.addEventListener('click',function onClick(){
    btn.style.backgroundColor='darkviolet';
    btn.style.color='white';
});