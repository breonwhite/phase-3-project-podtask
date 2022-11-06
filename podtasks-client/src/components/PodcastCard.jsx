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


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(todo, todo_status) {
    return { todo, todo_status };
  }


const PodcastCard = ({ podcast }) => {
    const todoList = podcast.tasks

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
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <PodcastsIcon />
                </Avatar>
            }
            action={
          <IconButton href={`/podcasts/${podcast.id}`} aria-label="edit">
            <EditIcon />
          </IconButton>
            }
            subheader={<Typography sx={{ fontSize: 14 }} color="text.secondary">
            Featuring Guest: { podcast.guest }
        </Typography>}
            title={<Typography variant="h5" component="div">
            { toTitleCase(podcast.topic) }
        </Typography>}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                Topic
            </Typography>
        </CardHeader>
        <CardContent>
        <Typography variant="subtitle2">
            Description
        </Typography>
        <Typography variant="body2">
            { podcast.description }
        </Typography>
        <br />
        <Typography variant="subtitle2">
            Release Date
        </Typography>
        <Typography variant="body2">
        { podcast.release_date }
        </Typography>
        </CardContent>
        <CardContent>
            <TableContainer component={Paper} elevation={24}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>Tasks</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        { todoList.map((todo, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    { todo.to_do }
                                </TableCell>
                                <TableCell align="center">{ capitalizeFirst(todo.todo_status) }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </CardContent>
    </Card>
    </Grid>
  )
}

export default PodcastCard

