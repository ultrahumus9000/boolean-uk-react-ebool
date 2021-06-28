import { Button, TextField } from "@material-ui/core";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { SearchContext } from "../App";
const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

export default function Header() {
  const { search, setSearch } = useContext(SearchContext);
  console.log("search content", search);
  return (
    <header
      className="header"
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        ebool
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
          <li className="search-bar">
            <TextField
              className="text-field"
              id="standard-basic"
              variant="outlined"
              label="type here"
              style={{ marginRight: "10px", height: "30px" }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Link to="/">
              <Button
                style={{ marginLeft: "10px" }}
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
