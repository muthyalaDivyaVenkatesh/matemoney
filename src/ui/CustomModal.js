import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

function CustomModal({openModel=false, handleClose, textContent, heading}) {
    const [open, setOpen] = useState(false);
    if(openModel){
        setOpen(openModel)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      
    return (
        <Modal
            open={open}
            onClose={handleClose.bind(open)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {heading}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    { textContent}
                </Typography>
            </Box>
        </Modal>
    )
}


export default CustomModal