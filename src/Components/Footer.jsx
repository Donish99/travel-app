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
  height: 45px;
  justify-content: center;
`;

const Footer = ({ lang }) => {
  return (
    <FooterDiv>
      <a href="http://github.com/Donish99">
        <IconButton color="primary">
          <GitHubIcon />
        </IconButton>
      </a>
      <a href="https://www.linkedin.com/in/akhmadullo-nurmakhamatov-8165111b3">
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
      </a>
      <a href="http://t.me/Nurmakhamatov_A">
        <IconButton color="primary">
          <TelegramIcon />
        </IconButton>
      </a>
    </FooterDiv>
  );
};

export default Footer;
