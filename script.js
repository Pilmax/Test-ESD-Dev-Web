let response = []

let button = document.getElementById('val').onclick = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    $('#serialize').text(        
        response = JSON.stringify($('form').serialize())
    );
    document.cookie = response
    // console.log(JSON.stringify($('form').serialize()));
    console.log(response);
    window.location.href = './Validation.html'
};