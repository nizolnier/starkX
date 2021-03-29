import { makeStyles } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'

export const useStyles = makeStyles({
  logout: {
    color: "white",
    background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
  },
  normal: {
    color: "white",
  },
  approve: {
    color: "white",
    background: 'linear-gradient(45deg,#62bc82 100%, #FF8E53 90%)',
  },
  donot: {
    color: "white",
    background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
  },
  pos: {
    marginBottom: 12,
  },
  delete: {
    color: "white",
    fontSize: "1.2rem",
    paddingLeft: "1em",
    paddingBottom: "0.2em"
  },
  apply: {
    width: "50%",
    marginLeft: "2em",
    padding: "1em"
  },
  create: {
    color: "white",
    background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
    padding: "0.5em",
    fontSize: "1.2rem"
  },
  createTitle: {
    color: "white",
    textAlign: "center",
    padding: "0.5em",
  },
  input: {
    color: "white",
    borderColor: "white"
  },
  goToCreate: {
    color: "white",
    background: 'linear-gradient(45deg, #F61B1B 100%, #FF8E53 90%)',
    width: "30em",
    margin: '1em',
    marginBottom: '2em',
  },
  welcome: {
    padding: "0.4em",
    marginLeft: "2em"
  }
})


export const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#67C7EB"
    }
  },
})