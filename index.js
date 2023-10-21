const express= require("express");
const path = require("path")
const app = express();

app.use(Logger)

app.use(express.static(path.join(__dirname, "public")))

function Logger(req, res, next){

    if ((new Date().getDay()>0) && (new Date().getDay()<7) && (new Date().getHours()>8) && (new Date().getHours()<18)){
    next()}
    else{
        res.send(` <h1>Sorry, this site is currently closed.</h1> <br> <h1>Please come back during working hours (Monday to Friday,  from 9 to 17)</h1>`)
    }
}

const PORT= process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))