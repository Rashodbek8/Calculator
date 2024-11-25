
function input(value) {
    let out = $('#out').val();
    let result = out + value;
    $('#out').val(result);
}

function clean() {
    $('#out').val("");   
}

function back() {
    let str = $('#out').val();
    let result = str.slice(0, -1);
    $('#out').val(result);
}

// function equal() {
//     var exp = $('#out').val();
//     if(exp) {
//      $('#out').val(eval(exp));
//     }
       
// }

function multiply() {
    let result = a * b;
    $('#out').val(result);
}

function minus() {
    let result = a - b;
    $('#out').val(result);
}

function plus() {
    let result = a + b;
    $('#out').val(result);
}

function equal() {
    let value = $('#out').val();
    let arr = value.split('+');

    if (arr.length < 2) {
        arr = value.split('-');
    }
    
    if ( arr.lenght < 2) {
        arr = value.split('*');
    }

    let arr1 = value.split('-');
    let arr2 = value.split('*');

   

    let a = Number(arr[0]);
    let b = Number(arr[1]);

    let result = a + b;
    $('#out').val(result);
}

    
