import {Checkbox, IconButton, ListItem} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons";
import React from "react"; 

function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return(
        <ListItem style={{display:"flex"}}>
            <Checkbox 
                checked= {todo.completed}
                onClick={handleCheckboxClick} 
            />
            <Typography
                variant="body1"
                style={{
                    textDecoration: todo.completed ? "line-through" :null
                }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default Todo;