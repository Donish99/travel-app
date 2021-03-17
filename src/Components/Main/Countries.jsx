import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const CountriesDiv = styled.div`
  height: calc(100% - 12% - 43px);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "99%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Countries = ({ tileData, searchResults }) => {
  const classes = useStyles();

  return (
    <CountriesDiv>
      {searchResults.length === 0 ? (
        <h1>Not found</h1>
      ) : (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            {tileData.map((tile) => (
              <GridListTile key={tile.img} rows={2} cols={1}>
                <img src={tile.img} alt={tile[window.lang].name} />
                <GridListTileBar
                  title={tile[window.lang].name}
                  subtitle={<span>{tile[window.lang].capital}</span>}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile[window.lang].name}`}
                      className={classes.icon}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </CountriesDiv>
  );
};

export default Countries;
