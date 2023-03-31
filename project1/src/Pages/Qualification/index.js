import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualification() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualification</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SREE CHAITANYA" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya Institute Of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% CGPA
              </Typography>
              {" — Bachelor of Technology in EEE "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Government Intermediate College For Girls " src="https://www.w3schools.com/howto/img_avatar.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Govenment Intermediate College For Girls  "
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                91% CGPA
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ZPHS" src="https://55knots.com.au/wp-content/uploads/2021/01/Zanj-Avatar-scaled.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Zilla Parishad High School" 
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                93% CGPA
              </Typography>
              {' — Higher Secondory Education   '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}