const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname +'/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return  new Date().getFullYear()+ ' TEST';
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.set('view engine', 'hbs');
app.use(express.static(__dirname +'/public'));

// app.use((req, res, next) =>{
//     res.render('maintanence.hbs')
// });


app.get('/', (req,res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home Page!',
        welcomeMessage: 'Welcome to my website',
        name: 'Hamza',
        
    });
});

app.get('/about', (req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About Page!',
        
    });
});

app.get('/bad', (req,res)=>{
    res.send("<h1>Error</h1>");
});

   app.listen(port, () =>{
       console.log(`Server is up and running on port ${port}`);
   });