import express from 'express';

const app = express();
app.use(express.json());


export function bootstrap(): void {
    app.listen(3000, '0.0.0.0', (): void => {
        console.log('Express is Runnig in http://localhost:3000');
    });
};









// import express from "express";



// import {Sequelize} from "sequelize";


// const sequelize = new Sequelize({
//     dialect:"sqlite",
//     storage:"./database.sqlite",
//     logging:true,
    
// })

// export default sequelize





// const app = express()

// export function start(){
//     console.log('start')
//     app.listen(3000,'127.0.0.1')
// }

// app.get("/",(req,res)=>{
//     console.log(req)
// res.send("hello world")
// })

// app.post("/create",(req,res)=>{
// //  const {name,email,password} = req.body();
// try{
// // const user  = 
// }catch(err) {

//    res.status(500).json(err)
// }

// }) 