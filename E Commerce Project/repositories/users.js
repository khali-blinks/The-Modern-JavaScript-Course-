import fs from 'fs';

class UsersRepository{
    constructor(filename){
        if (!filename){
            throw new Error('Creating a repository requires a filename');
        }
        this.filename = filename;
        try{
            fs.accessSync(this.filename); // checks whether the file exists on our hard drive
        } catch (err) {
            fs.writeFileSync(this.filename,'[]'); // creates a new file
        }
    }

    async getAll(){
        // Open the file called this.filename
        // Parse the contents 
        // Return the parsed data
        return JSON.parse(await fs.promises.readFile(this.filename,{encoding : 'utf8'}));
    }
    async create(attrs){
        const records = await this.getAll();
        records.push(attrs);

        await fs.promises.writeFile(this.filename,JSON.stringify(records));

    }
}

const repo = new UsersRepository('users.json');
const test = await repo.create({email: 'test@test.com',password : 'password'})
const user = await repo.getAll();
console.log(user)

