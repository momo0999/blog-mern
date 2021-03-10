import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin: '20px auto',
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
