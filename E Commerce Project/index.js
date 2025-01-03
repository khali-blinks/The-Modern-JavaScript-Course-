import express from 'express';
import bodyParser from 'body-parser' // middleware 
import cookieSession from 'cookie-session'; // middleware
import usersRepo from './repositories/users.js';

const app = express();

// the use function; we call that when we pass in a middleware function, 
// if we want all of our different route handlers to have that middleware function be apllied.
// the body parser library automatically detects the method : GET or POST
app.use(bodyParser.urlencoded({extended : true }));
app.use(cookieSession({keys :['sjdg7ew8']})) // adds additional property to req object

app.get('/',(req,res) => {
    res.send(`
        <div>
            <form method = "POST">
                <input name="email" placeholder = "email"/>
                <input name="password" placeholder = "password"/>
                <input name="passwordConfirmation" placeholder = "password confirmation"/>
                <button>Sign Up</button>
            </form>       
        </div>
        `);
})


app.post('/',async (req,res) => {
    const { email,password, passwordConfirmation} = req.body;

    const existingUser = await usersRepo.getOneBy({email});
    if (existingUser){
        return res.send('Email in use');
    }

    if(password !== passwordConfirmation){
        return res.send('Passwords must match')
    }

    // Create a user in our user repo to represent this person
    const user = await usersRepo.create({email,password});
    
    // Store the id of that user inside the users cookie
    req.session.userId = user.id

    res.send("Account Created")
})

app.listen(3000,() => {
    console.log('Listening')
}) 