const visitor = require('../src/app')



let obj = {
  visitor_name: "name",
  visitor_age: "age"
};

describe("add function to add visitor data", ()=>{
  beforeEach(function () {
      spyOn(visitor, 'addNewVisitor');
  });

  it("takes the arg name and save data", async (done)=>{
     visitor.addNewVisitor("name");
      
      expect(visitor.addNewVisitor).toHaveBeenCalled();
      expect(visitor.addNewVisitor).toHaveBeenCalledWith("name");
      done();
  });


  it('takes the arg age and save data', async (done) => {
      visitor.addNewVisitor("age");

       expect(visitor.addNewVisitor).toHaveBeenCalled();
       expect(visitor.addNewVisitor).toHaveBeenCalledWith('age');
       done();

  });

  
})



