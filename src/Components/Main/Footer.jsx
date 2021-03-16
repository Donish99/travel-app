import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";

const FooterDiv = styled.div`
  width: 100%;
  box-shadow: 0 0 3px 0px #949494;
  display: flex;
  height: 43px;
  justify-content: center;
`;

const Footer = ({ lang }) => {
  return (
    <FooterDiv>
      <IconButton color="primary">
        <GitHubIcon />
      </IconButton>
      <IconButton color="primary">
        <LinkedInIcon />
      </IconButton>
      <IconButton color="primary">
        <TelegramIcon />
      </IconButton>
    </FooterDiv>
  );
};

export default Footer;
