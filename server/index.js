const tasks = require('./routes/tasks');
const connection = require('./db');
const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8070;
// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

app.listen(port,  () => console.log(`Listening on port ${port}...`));

