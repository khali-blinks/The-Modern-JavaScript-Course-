const password = prompt("please enter a new password");

if (password.length > 6){
    if (password.indexOf('') == -1){
        console.log('Password is Valid');
    } else{
        console.log('Password is invalid');
    }
} else{
    console.log('Too short!')
}