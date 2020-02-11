<<<<<<< HEAD
require('dotenv').config()

=======
require('dotenv').config();
>>>>>>> a34171f5aced14ddec44656aa30a69a54482eb59
const Pool  = require('pg').Pool;

const pool = new Pool({
<<<<<<< HEAD

  host: process.env.PG_HOST,
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_umuzi_visitors
})
     

=======
       host: process.env.DB_HOST,
       port: process.env.DB_PORT,
       user:process.env.DB_USER,
       password: process.env.DB_PASSWORD,
       database: process.env.DB_DB
});
>>>>>>> a34171f5aced14ddec44656aa30a69a54482eb59

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
            comments        VARCHAR(200)

           );`
       )
        console.log(query)
        console.log('table created successful')

     }catch(e) {
         console.log(e);

     };
};

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
            SELECT * FROM VISITORS WHERE ID=${3}
          ;`
      )
       console.log(query.rows)
       console.log('viewed successfully')

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


module.exports = {
    createTable,
    addNewVisitor,
    deleteVisitor,
    viewVisitor,
    listVisitor,
    updateVisitor,
    deleteAllVisitors
};


 


