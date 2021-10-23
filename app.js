const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'media')));
app.use(express.static(path.join(__dirname, 'Employee')));
app.use(express.static(path.join(__dirname, 'Manager')));
app.use(express.static(path.join(__dirname, 'Admin')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
})
app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname,'./signup/register.html'));
})
app.get('/admin',(req,res) => {
    res.sendFile(path.join(__dirname,'./Admin/admin.html'));
})
app.get('/employee',(req,res) => {
    res.sendFile(path.join(__dirname,'./Employee/employee.html'));
})
app.get('/manager',(req,res) => {
    res.sendFile(path.join(__dirname,'./Manager/manager.html'));
})  
app.listen(port, () => {
    console.log(`app has been started on port ${port}`)
})

    