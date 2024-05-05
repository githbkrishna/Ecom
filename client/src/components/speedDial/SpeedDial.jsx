import React, { useState } from 'react';
import { SpeedDial as MuiSpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../comp.css'

const actions = [
  { icon: <WhatsAppIcon />, name: 'WhatsApp', url: 'https://wa.me/6393453759' }, // Replace 'yourphonenumber' with your actual WhatsApp number
  // Add other speed dial actions as needed
];

function SpeedDial() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = (action) => {
    if (action.url) {
      window.open(action.url, '_blank'); // Open WhatsApp link in a new tab
    }
  };

  return (
    <MuiSpeedDial
      className='MuiSpeedDial'
      ariaLabel="SpeedDial example"
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleAction(action)}
        />
      ))}
    </MuiSpeedDial>
  );
}

export default SpeedDial;