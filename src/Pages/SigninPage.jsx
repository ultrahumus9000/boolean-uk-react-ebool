import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function Signin({ setUser }) {
  return (
    <div>
      <form
        className="sign-in-form"
        action="http://localhost:3000/products"
        onSubmit={(e) => {
          //   e.preventDefault();
          let newUser = { name: "linlin" };
          setUser(newUser);
        }}
      >
        <label htmlFor="">Sign in here </label>
        <TextField id="outlined-basic" label="name" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="password"
          type="password"
          variant="outlined"
        />

        <Button variant="contained" color="secondary" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
}
