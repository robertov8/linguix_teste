import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));
