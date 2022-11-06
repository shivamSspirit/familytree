import React, { useState } from 'react';
import './App.css';
import ModalForm from './components/modalForm';
import { Modal, Box } from '@mui/material';
import SideBar from './components/sidebar/sidebar';
import Sidepage from './components/sidepage/sidepage';
import { store } from './store'
import { Provider } from 'react-redux';
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

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true); }
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Provider store={store}>
        <div className='main-block'>
          <SideBar openmodal={handleOpen} />
          <Sidepage />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ModalForm />
            </Box>
          </Modal>
        </div>
      </Provider>
    </div>
  );
}

export default App;
