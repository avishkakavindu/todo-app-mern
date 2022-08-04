import React from 'react';
import Tasks from './Tasks';
import {Paper, TextField, Checkbox, Button} from '@material-ui/core'; 
import './App.css';

class App extends Tasks {
  state = {
    tasks: [],
    currentTask: ""
  }
  render(){
    const {tasks} = this.state;

    return (
      <div className="App flex">
        <Paper elevation={3} className="container">
          <div className="heading">
            ToDo App
          </div>
          <form 
          onSubmit={this.handleSubmit}
          className="flex"
          style={{margin:"15px 0"}}
          >
            <TextField 
            variant="outlined"
            size="small"
            style={{width: "200px"}}
            value={this.state.currentTask}
            required={true}
            onChange={this.handleChange}
            placeholder="Add task"
            />
            <Button 
            style={{height: "40px"}}
            color="primary"
            variant="outlined"
            type="submit"
            >Add Task</Button>
          </form>

          <div>
            {tasks.map((task) => (
              <Paper key={task.id} className="flex task_container">
                <Checkbox
                checked={task.completed}
                onClick={() => this.handleUpdate(task._id)}
                color="primary"
                />

                <div 
                className={task.completed ? "task line_through": "task"}
                >
                  {task.task}
                </div>
                <Button
                  onClick={() => this.handleDelete(task._id)}
                  color="secondary"
                >
                  Delete
                </Button>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
