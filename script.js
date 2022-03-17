let response = []

    console.log(document.querySelector('form'));
let button = document.getElementById('val').onclick = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    $('#serialize').text(        
        response = JSON.stringify($('form').serialize())
        );
        console.log(response);
    if(response == "1=true&2=true&3=true&4=true&5=true"){
        console.log('validé');
    }else{
        console.log("nope");
    }
    
    //document.cookie = response
    // console.log(JSON.stringify($('form').serialize()));
    window.location.href = './Validation.html'
};

// To create a Cookie:
// Cookies.set('name', 'value');

// To read a Cookie:
// Cookies.get('name'); // => 'value'