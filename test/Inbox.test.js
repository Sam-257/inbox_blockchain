// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli'); //For testing
const Web3 = require('web3');   //This is a costructor or class type function
const web3 = new Web3(ganache.provider());  //instance of Web3
const {interface, bytecode} = require('../compile');

// ganache provides us with a bunch of unlocked accounts

//using promise
/*beforeEach(() => {
    // 1. Getting a list of accounts
    //  -> web3 has a module eth which has a method getAccounts()
    //  -> All methods on web3 are promises
    
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
            
        });
    // Use one of those accounts to deploy the contract
});
*/

// Using async await
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
});

describe('Inbox',() => {
    it('deploys a contract',() => {
        console.log(accounts);
    });
});






/*
class Car {
    park(){
        return 'stop';
    }
    drive(){
        return 'run';
    }
}

// Testing with mocha
// it -> Run a test and make a asertion
// describe -> groups the it() functions
// beforeEach   -> execute a code setup

let car;
beforeEach(() =>{
    // Executes before every test
    car = new Car();
});

describe('Car Used',() =>{
    it('park returns',() => {
        //const car = new Car();
        assert.equal(car.park(),'stop');
        // assert.equal tests if the two arguments provided are equal
    });
    it('drive returns',() => {
        //const car = new Car();
        assert.equal(car.drive(),'run');
    });
});
*/