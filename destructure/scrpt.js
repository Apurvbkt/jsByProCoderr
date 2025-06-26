const color = ['red', 'blue', 'green', 'white', 'black', 'yellow']




const user = {
    name: 'apu',
    age: 23,
    address:{
        city:'blr',
        state: 'jhark'
    },
}
const {name:username, age, address : add} = user

console.log(add.city, add.state);

