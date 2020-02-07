 const Addthings = require('../src/app')
    
 
 describe("node sql", ()=>{
    it("save data to str_col Column", async (done)=>{
        let AddVisitor = await AddVisitor("daniel",30,false)
        expect(AddVisitor[0].visitor_name).toEqual("Pule")
        
        done()
    })

    
})

describe('test', function(){
    
})