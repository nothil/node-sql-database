 const visitor = require('../src/app')
 

describe('test for () database', () =>{ 
  beforeEach(function (){
        spyOn(visitor, 'addNewVisitor');
    });
 

       expect(visitor.addNewVisitor).toHaveBeenCalled();
       expect(visitor.addNewVisitor).toHaveBeenCalledWith('age');
       done();

  });

   describe("to view visitor from the list", () =>{  
        beforeEach(function () {
          spyOn(visitor, 'viewVisitor');

      });
      it("should be  able to display vistors info", async (done) =>{
        myVisitor = await visitor.viewVisitor();
        
        expect(myVisitor.visitor_name).toEqual("null");
        expect(myVisitor.visitor_age).toEqual('null');
        expect(myVisitor.date_of_visit).toEqual();
        expect(myVisitor.time_of_visit).toEqual("11:00:00");
        expect(myVisitor.assistant_name).toEqual("zinhle");
        expect(myVisitor.comments).toEqual("none");

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

   

 
 
 

    

