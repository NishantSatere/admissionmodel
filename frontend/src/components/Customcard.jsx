import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Customcard = () => {
    return <div className=" text-lg font-bold">
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>

            <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          </CardActionArea>
        </Card>
    </div>
}

export default Customcard