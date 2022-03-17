window.onload = console.log(document.cookie);
let resColor = document.getElementById('rescolor')
let cookies = document.cookie


if(cookies.length == 41){
    resColor.innerHTML = "Bravo vous avez une chance de gagner !"
    resColor.style.backgroundColor = "green"
}else{
    resColor.innerHTML = "Dommage cliquez sur le logo et retentez votre chance !"
    resColor.style.backgroundColor = "red"
}
