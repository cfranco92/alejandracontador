"use client";

import { Dialog, DialogContent, DialogTitle, IconButton, Box, useTheme as useMuiTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AIChat from './AIChat';

interface ChatDialogProps {
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
}

export default function ChatDialog({ open, onClose, fullScreen = false }: ChatDialogProps) {
  const theme = useMuiTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: fullScreen ? 0 : 2,
          height: fullScreen ? '100%' : 'calc(100% - 64px)',
          maxHeight: fullScreen ? '100%' : 'calc(100% - 64px)',
          m: fullScreen ? 0 : 2,
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle 
        sx={{ 
          px: 3, 
          py: 2, 
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        Asistente Contable Virtual
        <IconButton
          aria-label="close"
          onClick={onClose}
          edge="end"
          sx={{ color: 'inherit' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 0, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flexGrow: 1, height: '100%', overflow: 'hidden' }}>
          <AIChat dialogMode={true} />
        </Box>
      </DialogContent>
    </Dialog>
  );
} 