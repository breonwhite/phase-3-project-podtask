import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import VerifiedIcon from '@mui/icons-material/Verified';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';



const TaskListItem = ({ task, completeTask, handleRemove }) => {

const handleComplete = (value) => {
    completeTask(value)
    //setComplete(true)
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
    <ListItemText id={task.index} primary={<s>{task.to_do}</s>} 
        secondary={
            <Button size="small" variant="text" onClick={ () => handleRemove( task.id ) }>
                DELETE</Button>
        } />
    </ListItem>
  )
}

export default TaskListItem