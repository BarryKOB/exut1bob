import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../App.css';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

import IconButton from '@mui/material/IconButton';


import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, DialogContentText } from '@mui/material'

import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import ShareIcon from '@mui/icons-material/Share'


function Noticias({ noti }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [cont, setCount] = useState(0)
    const [open,setOpen] = useState(false)

    const handleIconClick = () => {
        setIsFavorite(prev => !prev);
        setCount(cont-1)
        setOpen(true);
    };

    const handleIconClickD = () => {
        setIsFavorite(prev => !prev);
        setCount(cont+1)
    };

    const enviadoWatsapp = () =>  {
        console.log("Enviando por Whatsapp")
        setOpen(false);
    }

    const enviadotelegram = () =>  {
        console.log("Enviando por Telegram")
        setOpen(false);
    }

    const hsndleClose = () => {
        setOpen(false);
    }

    return (
        <Box 
            sx={{ margin: "20px" }}>
            <Card sx={{ maxWidth: 930 }}>
                <CardActionArea >
                    <CardActionArea sx={{display: "flex", justifyContent: "space-between"}}>
                        <CardActionArea sx={{marginLeft: "10px"}}>
                            <CardMedia sx={{ height: 30, width:30 }}
                                component="img"
                                image={noti.imgavat}
                            />
                        </CardActionArea>
                        <CardActionArea sx={{marginRight:"100px"}}>
                            <Typography variant="h5">{noti.title}</Typography>
                            <Typography variant='body2'>19 de octubre de 2024</Typography>
                        </CardActionArea>
                        <MoreVertIcon></MoreVertIcon>
                    </CardActionArea>
                    <CardMedia sx={{ height: 194 }}
                        component="img"
                        image={noti.imgsrc}
                        alt={noti.alt}
                    />
                    <CardContent>
                        <Typography variant="body2">
                            {noti.noticia}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea sx={{display:"flex", justifyContent:"left", marginLeft:"10px"}}>
                    <Typography>{`${cont + noti.num}`}</Typography>
                    <IconButton onClick={handleIconClick}>
                        {isFavorite ? (
                            <FavoriteRoundedIcon   sx={{ color: "red" }}/>
                        ) : (
                            <FavoriteBorderRoundedIcon sx={{ color: "grey" }}/>
                        )}
                    </IconButton>
                    <ShareIcon></ShareIcon>
                    <Dialog 
                        open={open}
                        onClose={hsndleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle>{"Compartir"}</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            ¿A traves de que plataforma quieres compartir?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <WhatsAppIcon onClick={enviadoWatsapp}></WhatsAppIcon>
                        <TelegramIcon onClick={enviadotelegram} autoFocus>telegram</TelegramIcon>
                        </DialogActions>
                </Dialog>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default Noticias;