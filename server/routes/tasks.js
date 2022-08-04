const Task = require('../models/task');
const express = require('express');
const router = express.Router();

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


// get task list
router.get("/", async(req, res) =>{
    try {
         const tasks = await Task.find();
         res.send(tasks);
    } catch (error) {
         res.send(error);
    } 
 });
 
 
module.exports = router;