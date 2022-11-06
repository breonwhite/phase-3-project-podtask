import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import DeleteIcon from '@mui/icons-material/Delete';



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TaskCard = ({ task, deleteTask }) => {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    
    const toTitleCase = (str) => {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

  return (
    <Grid item sx={{ width: '100%' }}>
    <Card variant="outlined" sx={{ minWidth: 275, bgcolor: '' }}>
        <CardHeader
            action={
          <IconButton onClick={ () => deleteTask( task.id ) } aria-label="edit">
            <DeleteIcon />
          </IconButton>
            }
            subheader={<Typography variant="overline" component="div">
            Podcast: <Link to={`/podcasts/${task.podcast.id}`}>{ toTitleCase(task.podcast.topic) }</Link>
            </Typography>}>
        </CardHeader>
        <CardContent>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow
                                key={task.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    { task.to_do }
                                </TableCell>
                                <TableCell align="center">{ capitalizeFirst(task.todo_status) }</TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </CardContent>
        </Card>
        </Grid>
    // <li>
    //     Podcast: { task.podcast.topic }
    //     <br/>
    //     <Link to={`/tasks/${task.id}`}>
    //         { task.to_do }
    //     </Link>
    // </li>
  )
}

export default TaskCard