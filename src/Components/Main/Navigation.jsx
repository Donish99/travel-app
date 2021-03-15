import React from "react";
import styled from "styled-components";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";

const NavigationDiv = styled.div`
  width: 100%;
  height: 5%;
  justify-content: space-between;
  background-color: #d3f7ca;
  display: flex;
  padding: 0 25px;
`;

const Navigation = ({ lang, handleLangChange }) => {
  return (
    <NavigationDiv>
      <h1>{lang.wellcome}</h1>
      <div style={{ alignSelf: "flex-end" }}>
        <FormControl variant="filled" size="small">
          <InputLabel id="demo-simple-select-filled-label">
            {lang.lang}
          </InputLabel>
          <Select
            // labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={window.lang}
            onChange={handleLangChange}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"ru"}>Русский</MenuItem>
            <MenuItem value={"uz"}>Uzbekcha</MenuItem>
          </Select>
        </FormControl>
        <IconButton>
          <AccountBoxIcon />
        </IconButton>
      </div>
    </NavigationDiv>
  );
};

export default Navigation;
