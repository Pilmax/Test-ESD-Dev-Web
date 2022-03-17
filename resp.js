let resColor = document.getElementById('rescolor')

if(sessionStorage.getItem('1') == "win"){
    resColor.innerHTML = "Bravo vous avez une chance de gagner !"
    resColor.style.backgroundColor = "green"
}else{
    resColor.innerHTML = "Dommage cliquez sur le logo et retentez votre chance !"
    resColor.style.backgroundColor = "red"
}