import { TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
export default function Signin({ setUser }) {
  const inputProps = {
    name: "nameInput",
  };
  const inputPassword = {
    name: "passwordInput",
  };
  let history = useHistory();

  function handleClick() {
    history.goBack("/");
  }
  return (
    <div>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          const nameValue = e.target.nameInput.value;
          const passwordValue = e.target.passwordInput.value;
          let newUser = { name: nameValue, password: passwordValue };
          setUser(newUser);
        }}
      >
        <label htmlFor="">Sign in here </label>
        <TextField
          id="outlined-basic"
          label="name"
          variant="outlined"
          inputProps={inputProps}
        />
        <TextField
          id="outlined-basic"
          label="password"
          type="password"
          variant="outlined"
          inputProps={inputPassword}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleClick}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
