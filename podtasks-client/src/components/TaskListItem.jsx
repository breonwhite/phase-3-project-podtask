import React, { useEffect, useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TaskListItem = ({ task, completeTask, handleRemove }) => {

    const handleComplete = (value) => {
        completeTask(value)
    }

return (
    <ListItem
        secondaryAction={
            task.todo_status == "incomplete" ? <Button variant="contained" size="small"
            onClick={ () => handleComplete ( task )}
            startIcon={<CheckCircleIcon />} color="success">
            Complete Task
        </Button> : <Button variant="contained" size="small" 
            startIcon={<VerifiedIcon />} disabled>
            Task Complete
        </Button>
        } >
    <ListItemText id={task.index} primary={task.todo_status == "incomplete" ? task.to_do : <s>{task.to_do}</s>}
        secondary={
            <Button size="small" variant="text" onClick={ () => handleRemove( task.id ) }>
                DELETE</Button>
        } />
    </ListItem>
  )
}

export default TaskListItem