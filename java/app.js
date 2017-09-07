var racerName = document.querySelector('.name');
var speed= document.querySelector('.speed');
var prideti=document.querySelector('.add');
var sr=document.querySelector('.race');
var racerlist=document.querySelector('ul');
var track=document.querySelector('.track');

function pickColor() {
    var carcolor=document.querySelector('.car')
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    carcolor.style.backgroundColor='rgb('+r+', '+g+','+b+')'
}

function NewRacer() {
    this.racerName = racerName.value;
    this.speed = speed.value;
    this.crateHtml=function() {
        racerlist.insertAdjacentHTML('afterbegin','<li>'+this.racerName+'</li>')
    }
    this.car=function() {
        var html='<div class="car"><div>';
        track.insertAdjacentHTML('afterbegin',html)
        pickColor()
    }
    }
}
var list=[];
prideti.addEventListener('click', function() {
    if (racerName.value=='' || speed.value=='') {
        alert('Neivestas vairuotojo vardas arba greitis');
    }else {
        list.push(new NewRacer())
        racerName.value='';
        speed.value='';
        racerName.focus();
        list[list.length-1].crateHtml();
        list[list.length-1].car();
    }
});
