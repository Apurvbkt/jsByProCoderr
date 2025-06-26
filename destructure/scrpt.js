const color = ['red', 'blue', 'green', 'white', 'black', 'yellow']




const user = {
    name: 'apu',
    age: 23,
    address:{
        city:'blr',
        state: 'jhark'
    },
}
// const {name:username, age} = user

const { address : {city} } = user
const { address : {state} } = user

console.log(city, state);

