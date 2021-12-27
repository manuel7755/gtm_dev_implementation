import React, { Component, useState, useContext, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import "./Modal.styles.scss";
import { autocompleteClasses } from '@mui/material';
import { CartContext } from '../../Contexts/Cart';
import { apiGetProduct, getQueryParam, addToCart, getCartInfo } from '../../utility/Utility.component';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  textAlign: "centre",
  padding: "2rem",
  p: 4
};

export function TransitionsModal({ name, login }) {
  const [open, setOpen] = React.useState(false);
  
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { cart, setCart } = useContext(CartContext);
  const [product , setProduct] = useState({})




  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleInput = (e, setMethod) => {
    setMethod(e.target.value)

  }
  

  const handleSubmit = () => {



  }

  function nativeAddToCart() {

    let updatedProduct =  { ...product };

    console.log('product at addToCart ' , updatedProduct)
    

       addToCart(cart, updatedProduct).then((updatedCart) => { 
           
           console.log('product has been added to cart', updatedCart);


           setCart({...updatedCart})

           console.log('cartInfo ' , updatedCart.cartInfo)

       
       })
   }



  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>

            <div className="login_modal_content">
            <Typography id="transition-modal-title" variant="h3" component="h2">
              Welcome Back!
            </Typography>
              <TextField id="outlined-basic" value="John"  label="name" variant="outlined" />
              <TextField id="outlined-basic" value={email} onChange={(e) => handleInput(e,setEmail)} label="email" variant="outlined" />

              <TextField id="outlined-basic" value="mor_2314"  label="Username" variant="outlined" />
              <TextField id="outlined-basic" value="83r5^_"  label="password" variant="outlined" />
              <Button onClick={() => login()}>Login</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
