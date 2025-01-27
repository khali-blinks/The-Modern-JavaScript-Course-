let input = prompt('What would you like to do ?')
let todoList = [];
while(input !== 'quit' && input !=='q'){
    if(input == 'new'){
        let second = prompt('Add your todos!')
        todoList.push(second)
    } else if(input == 'list'){
        console.log('**********');
        for(let i = 0; i < todoList.length ; i++){
            console.log(`${i} : ${todoList[i]}`)
        }
        console.log('**********');
    } else if(input === 'delete'){
        const index = parseInt(prompt('Ok what do you want to delete?'));
        if (!Number.isNaN(index)){
            const deleted = todoList.splice(index,1);
            console.log(`Deleted : ${deleted}`);
        } else {
            console.log('Unknown index')
        }

    }
    input = prompt('What would you like to do ?')
}
console.log('OK YOU QUIT')

const prices = [2.55,10.44,0.32,5.89,97]

const minPrice = prices.reduce((min,price)=>{
    if(min < price){
        return min;
    }else{
        return price;
    }
})

const person = {
    firstName: 'Khali',
    lastName: 'Fish',
    fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    shoutName(){
        console.log(this);
        setTimeout(()=>{
            console.log(this.fullName())
        },2000)
    }
}