import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
}));
