<<<<<<< HEAD
 const  dotenv = require('dotenv').config();
 const Pool  = require('pg').Pool;
 const pool = new Pool();

pool.connect();

const createTable = async () => {
     try{
        const query = await pool.query(
           `CREATE TABLE IF NOT EXISTS
            VISITORS(
            ID  SERIAL PRIMARY KEY,
            visitor_name VARCHAR(60),
            visitors_age  INT,
            date_of_visit  DATE,
            time_of_visit  TIME,
            assistant_name VARCHAR(60),
            comments VARCHAR(200)

           );`
       )
        console.log(query)
        console.log('table created successful')

     }catch(e) {
         console.log(e);

     };
};
 createTable();
=======
// require('dotenv').config()

const Pool  = require('pg').Pool;

const pool = new Pool({
    user: 'user' ,
    host:'localhost',
    database: 'db',
    password: 'pass',
    port: 8080,
})

     


// const createTable = async () => {
//      try{
//         const query = await pool.query(
//            `CREATE TABLE IF NOT EXISTS
//             VISITORS(
//             ID  SERIAL PRIMARY KEY,
//             visitor_name VARCHAR(60),
//             visitors_age  INT,
//             date_of_visit  DATE,
//             time_of_visit  TIME,
//             assistant_name VARCHAR(60),
//             comments        VARCHAR(200)

//            );`
//        )
//         console.log(query)
//         console.log('table created successful')

//      }catch(e) {
//          console.log(e);

//      };
// };

>>>>>>> 4a90d5a4e247e8a1a0ee471b8090ae4583b029c8
const addNewVisitor = async (name, age, date, time, assistant, comment) => {
    try{
       const query = await pool.query(
          'INSERT INTO VISITORS(visitor_name,visitors_age,date_of_visit,time_of_visit,assistant_name,comments) VALUES ($1,$2,$3,$4,$5,$6)',
            [name,age,date,time,assistant,comment]       
      )
       console.log(query.rows)
       console.log('data saved')
       
    }catch(e) {
        console.log(e);

    };
};

const listVisitor = async () => {
    try{
       const query = await pool.query(
          `
            SELECT ID , visitor_name FROM VISITORS;`
          
      )
       console.log(query.rows)
       console.log('successfully')

    }catch(e) {
        console.log(e);

    };
};

const deleteVisitor = async () => {
    try{
       const query = await pool.query(
          `
          DELETE  FROM VISITORS WHERE id = ${1}
          ;`
      )
       console.log(query)
       console.log('deleted successfully')

    }catch(e) {
        console.log(e);

    };
};

const updateVisitor = async (name,assistant) => {
    try{
       const query = await pool.query(
          `
            UPDATE  VISITORS SET visitor_name= 'sihle', assistant_name ='porticia' WHERE ID=${2}
          ;`
      )
       console.log(query.rows)
       console.log('updated successfully')

    }catch(e) {
        console.log(e);

    };
};


const viewVisitor = async () => {
    try{
       const query = await pool.query(
          `
            SELECT * FROM VISITORS WHERE ID=${1}
          ;`
      )
       console.log(query.rows)
       console.log('viewed successfully')

       return query.rows

    }catch(e) {
        console.log(e);

    };
};

const deleteAllVisitors = async () => {
    try{
       const query = await pool.query(
          `
            DELETE  FROM VISITORS 
          ;`
      )
       console.log(query)
       console.log('all deleted successfully')

    }catch(e) {
        console.log(e);

    };
};

addNewVisitor();



module.exports = {
    
    addNewVisitor,
    deleteVisitor,
    viewVisitor,
    listVisitor,
    updateVisitor,
    deleteAllVisitors
};

<<<<<<< HEAD
addNewVisitor('nothile', 26, '12/29/2020', '1300', 'khule', 'greate');


 

=======
 


>>>>>>> 4a90d5a4e247e8a1a0ee471b8090ae4583b029c8
