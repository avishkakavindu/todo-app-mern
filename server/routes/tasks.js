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
 
 // edit task
 router.put("/:id", async(req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

// delete task
router.delete("/:id", async(req, res) => {
    try {
        const task = await Task.findOneAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

 
module.exports = router;