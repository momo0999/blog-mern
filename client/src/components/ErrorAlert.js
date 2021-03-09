import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin: '30px',
  },
}));

export default function SimpleAlerts({ error }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity='error'>{error}</Alert>
    </div>
  );
}
