import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchDiv = styled.div`
  /* background-color: #b4abb9; */
  height: 12%;
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
    width: 300,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Search = ({
  lang,
  query,
  searchResults,
  handleSearchInput,
  handleQuerySubmit,
}) => {
  const classes = useStyles();
  console.log(searchResults);
  return (
    <SearchDiv>
      <Paper
        component="form"
        className={classes.root}
        onSubmit={(e) => handleQuerySubmit(e)}
      >
        <InputBase
          autoFocus
          className={classes.input}
          value={query}
          onChange={handleSearchInput}
          placeholder={lang.search + "..."}
        />
        <IconButton
          color="primary"
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
