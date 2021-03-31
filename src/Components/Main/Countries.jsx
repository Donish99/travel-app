import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { withRouter } from "react-router-dom";

const CountriesDiv = styled.div`
  height: calc(100% - 12% - 45px);
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
  gridListTile: {
    border: "2px solid red",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

const Countries = ({ tileData, searchResults, history }) => {
  const classes = useStyles();
  const language = localStorage.getItem("language");

  return (
    <CountriesDiv>
      {searchResults.length === 0 ? (
        <h1>Not found</h1>
      ) : (
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            {tileData.map((tile) => (
              <GridListTile
                key={tile.img}
                rows={2}
                cols={1}
                onClick={() => console.log(history.push(`/country/${tile.id}`))}
              >
                <img src={tile.img} alt={tile[language].name} />
                <GridListTileBar
                  title={tile[language].name}
                  subtitle={<span>{tile[language].capital}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </CountriesDiv>
  );
};

export default withRouter(Countries);
