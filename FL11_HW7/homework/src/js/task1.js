const minEmailLength = 6;
const minNewPasswordLength = 5;
let email = prompt('Please, enter your email: ', '');

if (email === '' || email === null) {
    alert('Canceled.');
} else if (email.length < minEmailLength) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    let password = prompt('Please, enter your password: ', '');

    if (password === '' || password === null) {
        alert('Canceled.');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
               email === 'admin@gmail.com' && password === 'AdminPass') {
        let question = confirm('Do you want to change your password?');

        if (question === false) {
            alert('You have failed the change.');
        } else {
            let oldPassword = prompt('Please, enter your old password: ', '');

            if (oldPassword === '' || oldPassword === null) {
                alert('Canceled.');
            } else if (email === 'user@gmail.com' && oldPassword === 'UserPass' ||
                       email === 'admin@gmail.com' && oldPassword === 'AdminPass') {
                let newPassword = prompt('Please, enter your new password: ', '');

                if (newPassword.length < minNewPasswordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newPasswordAgain = prompt('Please, enter your new password again: ', '');

                    if (newPassword === newPasswordAgain) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}
