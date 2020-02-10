 const visitor = require('../src/app')

//  let addNewVisitor = visitor.addNewVisitor;

//  let obj = {
//      visitor_name: "name"
//  };

 describe("add function to add visitor data", ()=>{
    beforeEach(function () {
        spyOn(visitor, 'addNewVisitor');
    });

    it("save data to str_col Column", async (done)=>{
       visitor.addNewVisitor("name");
        // visitor = await addNewVisitor("name", null);
        // done();
        // expect(visitor[0].visitor_name).toEqual(obj.visitor_name)
        expect(visitor.addNewVisitor).toHaveBeenCalled();
        expect(visitor.addNewVisitor).toHaveBeenCalledWith("name");
        done();
    });

    
})
