"use client";

import { useState } from 'react';
import { Fab, Zoom, useTheme as useMuiTheme, useMediaQuery } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloseIcon from '@mui/icons-material/Close';
import ChatDialog from './ChatDialog';

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Zoom in={true}>
        <Fab
          color="secondary"
          aria-label="chat"
          onClick={handleToggleChat}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          {isOpen ? <CloseIcon /> : <SmartToyIcon />}
        </Fab>
      </Zoom>

      <ChatDialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)} 
        fullScreen={isMobile}
      />
    </>
  );
} 