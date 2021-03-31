import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";

const SearchDiv = styled.div`
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
    width: "50%",
    minWidth: 310,
    maxWidth: 500,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Search = ({ lang, query, handleSearchInput, handleQuerySubmit,clearQuery }) => {
  const classes = useStyles();
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
        {query !== "" ? (
          <>
            <IconButton
              color="secondary"
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={clearQuery}
            >
              <CloseIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem />
          </>
        ) : null}
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
