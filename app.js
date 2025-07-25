const express = require('express');

const path = require('path');

const app = express();


// View engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
});
app.get("/teacher",(req,res)=>{
  res.render("teacher")
})
app.get("/lectures",(req,res)=>{
  res.render("leacture")
})





// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});  