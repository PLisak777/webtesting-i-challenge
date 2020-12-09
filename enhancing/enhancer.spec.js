const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {

    describe('repair()', () => {

        test('repair() returns new object', ()=> {
            const item = { 
                name: 'foo',
                enhancement: 15,
                durability: 50
            }
            const result = enhancer.repair(item)

            expect(result).not.toBe(item)
        })
    })
})
