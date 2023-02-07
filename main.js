function message(){
    var text = document.getElementById('NameOfStd');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(text.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            text.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
        location.reload();
    }, 3000);

}

