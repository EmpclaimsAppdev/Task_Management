const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

console.log(express.json());
app.use(express.json());
app.use(cors())

// Database Connection
const conn = mysql.createConnection({
    user : 'root',
    password:'',
    host:'localhost',
    database:'tables'
})
conn.connect((err)=>{
    if(err)
        console.log(err)
    else
        console.log("Connected")
})
//Login
app.get('/login',(req,res)=>{
    let username = req.body.username
    let password = req.body.password   
})


//------> Project Section
    //>>>>>>>------View_Project
    app.get('/view_project',(req,res)=>{
        ///View projects and CreateProjects should share the same Database
        conn.query("SELECT * FROM `createproject`",(error,result)=>{
        if(error)
                console.log(error)
            else{
                console.log(result)    
                res.send(result)
            }
        })
    })
    //----<<<<<

    //>>>>>>>------Create_Project
    app.post('/create_project',(req,res)=>{
         console.log(req.body)
        // let Account_Name = req.body.AccountName
        // let Software =req.body.SelectSoftware
        // let Team_Involved = req.body.Team

        // console.log(Account_Name,Software,Team_Involved)
        // ///View projects and CreateProjects should share the same Database
        // conn.query("INSERT INTO `createproject`(`Account_Name`, `Software`, `Team_Involved`) VALUES (?,?,?)",[Account_Name,Software,Team_Involved],(error,result)=>{
        //     if(error)
        //         console.log(error)
        //     else{
        //         console.log(result)    
        //         res.send(result)
        //     }

        // })
    })
    //----<<<<<
//


//------> Team Section
    //>>>>>>>------View_Team
    app.get('/view_Team',(req,res)=>{
        ///View projects and CreateProjects should share the same Database
        conn.query("SELECT * FROM `createproject`",(error,result)=>{
        if(error)
                console.log(error)
            else{
                console.log(result)    
                res.send(result)
            }
        })
    })
    //----<<<<<

    //>>>>>>>------Create_Project
    app.post('/create_project',(req,res)=>{
        let Account_Name = req.body.Account_Name
        let Software =req.body.Software
        let Team_Involved = req.body.Team_Involved

        console.log(Account_Name,Software,Team_Involved)
        ///View projects and CreateProjects should share the same Database
        conn.query("INSERT INTO `createproject`(`Account_Name`, `Software`, `Team_Involved`) VALUES (?,?,?)",[Account_Name,Software,Team_Involved],(error,result)=>{
            if(error)
                console.log(error)
            else{
                console.log(result)    
                res.send(result)
            }

        })
    })
    //----<<<<<
//

app.put('/status',(req,res)=>{
    console.log(req.body)
    conn.query("UPDATE task SET task.Status = 'Completed' WHERE task.id = 1",(error,result)=>{
        if(error)
            console.log(error)
        else
            console.log(result)
    })
})

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.get('/task_list',(req,res)=>{
    conn.query('Select * from `task`',(error,results)=>{
        if(error)
            console.log(error)
        else
            console.log(JSON.stringify(results))
            res.send(JSON.stringify(results))
    })
})

app.get('/view_task',(req,res)=>{
    conn.query('Select * from `task`',(error,results)=>{
        if(error)
            console.log(error)
        else
            console.log(JSON.stringify(results))
            res.send(JSON.stringify(results))
    })
})

app.listen(8081,()=>{
    console.log('Server Started')
})




