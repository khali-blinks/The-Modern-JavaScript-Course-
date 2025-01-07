export default {
    getError :(errors,prop) => {
        // prop === 'email' || 'password' || 'passwordConfirmation'
        try {
            return errors.mapped()[prop].msg
            // errors.mapped() === {email: {msg: ?},password:{msg:?},passwordConfirmation:{msg:?}}
        } catch (err) {
            return '';
        }
} }