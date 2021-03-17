import React, { useState } from "react";
import styled from "styled-components";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {
  FormControl,
  Select,
  MenuItem,
  IconButton,
  Typography,
} from "@material-ui/core";
import User from "./Main/User";

const NavigationDiv = styled.div`
  width: 100%;
  height: 5%;
  justify-content: space-between;
  display: flex;
  padding: 0 25px;
  box-shadow: 0 0 3px 0px #949494;
  min-height: 43px;
`;

const Navigation = ({ lang, handleLangChange, Back }) => {
  const [open, setOpen] = useState(false);

  const handleUser = () => setOpen((prevState) => !prevState);

  return (
    <NavigationDiv>
      <div>
        <User open={open} lang={lang} handleCancel={handleUser} />
        {Back ? (
          Back
        ) : (
          <IconButton color="primary" onClick={handleUser}>
            <AccountBoxIcon />
          </IconButton>
        )}
      </div>
      <Typography variant="h4" component="h4" color="primary">
        {lang.wellcome}!
      </Typography>
      <FormControl variant="filled" size="small">
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={localStorage.getItem("language")}
          onChange={handleLangChange}
          variant="outlined"
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ru"}>Русский</MenuItem>
          <MenuItem value={"uz"}>O'zbekcha</MenuItem>
        </Select>
      </FormControl>
    </NavigationDiv>
  );
};

export default Navigation;
