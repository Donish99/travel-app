import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchDiv = styled.div`
  background-color: #b4abb9;
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Search = ({ lang }) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <SearchDiv>
      <Paper
        component="form"
        className={classes.root}
        onSubmit={(e) => handleSubmit(e)}
      >
        <InputBase
          autoFocus
          className={classes.input}
          placeholder={lang.search + "..."}
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </SearchDiv>
  );
};

export default Search;
