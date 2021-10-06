const { expect } = require("chai");
const {models:{Actor, Movie, Role}, syncAndSeed} = require('../db'); 

describe ('Math', () =>{
    describe ('1+1', () =>{
        it('is 2', ()=>{
            expect(1+1).to.equal(2);
        })
    })
})

describe ('Movies Database', ()=>{
    beforeEach(()=> syncAndSeed());
    describe ('Actor.findAll', ()=>{
        it('there are 5 actors', async()=>{
            const actors = await Actor.findAll();
    
            expect(actors.length).to.equal(5)
        })
    })
})