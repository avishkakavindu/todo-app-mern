const Task = require('../models/task');
const express = require('express');
const router = express.Router();

// router.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


/*
    Routing refers to how an application’s endpoints (URIs)
    respond to client requests.
*/

// create task
router.post("/", async(req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;