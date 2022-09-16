import React, {useState, useEffect} from 'react';
import { Card, CardMedia, Typography } from "@material-ui/core";
//import { CardMedia } from '@material-ui/material';
//import Card from '@mui/material/Card';


function CardWrapper() {
    var fileloc = "/src/images/image.jpg"
    return (
        <div>
            {fileloc}
            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="image"
                    style = {{ height: 300, paddingTop: '0%'}}
                    src= {"https://i.picsum.photos/id/291/200/300.jpg?hmac=5htP1HYHWPOMv5wbTtTsh6GjRk__SPxuXIv6gHLBHHg"}
                />
                <Typography gutterBottom variant="h5" component="div">
                    Some Image
                </Typography>
            </Card>
        </div>
    )

}
export default CardWrapper;