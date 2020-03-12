 const visitor = require('../src/app')
 

describe('test for () database', () =>{ 
  beforeEach(function (){
        spyOn(visitor, 'addNewVisitor');
    });
 

    it("save data to str_col Column", async (done)=>{
       visitor.addNewVisitor("name");
        
        expect(visitor.addNewVisitor).toHaveBeenCalled();
        expect(visitor.addNewVisitor).toHaveBeenCalledWith("name");
        done();
    });

   });


    it('add visitor information', async (done) => {
      try {

      visitor = await addNewVisitor("age");

         expect(visitor.addNewVisitor).toHaveBeenCalled();
         expect(visitor[0].visitor_age).toEqual(obj.visitor_age);
      } catch(err) {
         
        console.log(err)
      }
      done()
      

   
    });

   

 
 
 

    

