let response = []

    let button = document.getElementById('val').onclick = () => {
    //document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    sessionStorage.clear();
    $('#serialize').text(        
        response = JSON.stringify($('form').serialize())
    );

     let input1 = document.getElementById('13').checked
     let input2 = document.getElementById('23').checked
     let input3 = document.getElementById('32').checked
     let input4 = document.getElementById('43').checked
     let input5 = document.getElementById('51').checked

    console.log("Final response :")
    if(input1 && input2 && input3 && input4 && input5){
        sessionStorage.setItem('1', 'win');
        //document.cookie = "win" + "winner"
        //Cookies.set('win', 'true');
    }



    // console.log(JSON.stringify($('form').serialize()));
    window.location.href = './Validation.html'
};
