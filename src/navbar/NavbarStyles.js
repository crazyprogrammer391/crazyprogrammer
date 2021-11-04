
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 280;

export const useNavbarStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    fontVariant: 'small-caps',
    fontSize: 30,
    padding: 0,
    marginLeft: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 40
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 30,
    width: 30
  },
  menuContainer: {
      height: 26,
      marginLeft: 50
  },
  linkClick: {
    textDecoration: 'none',
    color: 'black'
  }
}));