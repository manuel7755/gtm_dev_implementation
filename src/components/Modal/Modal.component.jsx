import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




import "./Modal.styles.scss";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  textAlign: "centre",
  p: 4,
};

export function TransitionsModal({ name, login }) {
  const [open, setOpen] = React.useState(false);
  
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");



  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleInput = (e, setMethod) => {
    setMethod(e.target.value)

  }
  

  const handleSubmit = () => {

    console.log(password, username)


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
            <Typography id="transition-modal-title" variant="h3" component="h2">
              Welcome Back!
            </Typography>
            <br />
            <div className="login_modal_content">

          
              <TextField id="outlined-basic" value="mor_2314" onChange={(e) => handleInput(e,setUsername)} label="Username" variant="outlined" />
              <TextField id="outlined-basic" value="83r5^_" onChange={(e) => handleInput(e,setPassword)}  label="password" variant="outlined" />
              <Button onClick={() => login()}>Login</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
