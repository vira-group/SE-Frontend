import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function NewHotelLocationSelectionDialog(props) {
  const { open, setOpen } = props;
  function handleClose() {
    setOpen(false);
  }
  return (
    <Dialog open={open} onAbort={handleClose} onClose={handleClose}>
      <DialogTitle>Select hotel location</DialogTitle>
      <DialogContent>
        <div>Hotel location selection dialog</div>
      </DialogContent>
    </Dialog>
  );
}
