import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4tflhsVgv9Y7jyTN5WEhgjBw6oRwnLRR_A&usqp=CAU',
    title: 'Listening music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.brainfit.world/wp-content/uploads/2017/08/Learn-something-new.gif',
    title: 'Learning new things',
    
  },
  {
    img: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?cs=srgb&dl=pexels-jeshootscom-1040157.jpg&fm=jpg',
    title: 'Playing Chess',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfyL_4Y6x3trjU_pa6ndaWpOREs425wF2nQ&usqp=CAU',
    title: 'Playing games',
    
    cols: 2,
  },
  {

  
    cols: 2,
  },
];