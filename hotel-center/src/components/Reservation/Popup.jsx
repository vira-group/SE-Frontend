import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function Popup() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'center',
        })}
      >
        Top-Center
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
}



// import React from 'react';
// import Button from '@mui/material/Button';
// import { SnackbarProvider, useSnackbar } from 'notistack';

// function MyApp() {
//   const { enqueueSnackbar } = useSnackbar();

//   const handleClick = () => {
//     enqueueSnackbar('I love snacks.');
//   };

//   const handleClickVariant = (variant) => () => {
//     // variant could be success, error, warning, info, or default
//     enqueueSnackbar('This is a success message!', { variant });
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleClick}>Show snackbar</Button>
//       <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
//     </React.Fragment>
//   );
// }

// export default function IntegrationNotistack() {
//   return (
//     <SnackbarProvider maxSnack={3}>
//       <MyApp />
//     </SnackbarProvider>
//   );
// }
