import React, { useState, useCallback, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import InputAdornment from "@material-ui/core/InputAdornment";

// import fire from "../fire";
// import { AuthContext } from "./auth";
import { withRouter, Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    height: "100%",
    backgroundColor: "#DDDDDD",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#2C2C2C",
    fontSize: 65,
    padding: 25,
    marginTop: 90,
    borderRadius: 80,
    color: "#EFEFEF",
  },
  form: {
    width: "80%",
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = ({ history }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState("");
  // const [loader, setLoader] = useState(false);

  // const signin = () => {
  //   // setLoader(true);
  //   fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       // setLoader(false);

  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // const signin = useCallback(
  //   async (event) => {
  //     event.preventDefault();
  //     try {
  //       await fire.auth().signInWithEmailAndPassword(email, password);
  //       history.push("/home");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   },
  //   [history]
  // );

  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/home" />;
  // }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <text>پیغام</text>
          </div>
          <Typography
            component="h1"
            variant="h4"
            style={{
              fontWeight: "bold",
              letterSpacing: 2,
              fontFamily: "system-ui",
            }}
          >
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              variant="outlined"
              margin="normal"
              color="secondary"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              variant="outlined"
              margin="normal"
              color="secondary"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              onClick={signin}
              type="submit"
              fullWidth
              variant="contained"
              style={{
                backgroundColor: "#2C2C2C",
                color: "white",
                borderRadius: 20,
                letterSpacing: 1,
                fontFamily: "system-ui",
              }}
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default withRouter(LoginPage);
