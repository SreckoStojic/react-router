import './App.css';
import React from 'react';
import Header from './components/Header';
import {
  Switch,
  Route
} from "react-router-dom";
import Player from './components/Player';
import Team from './components/Team';
import players  from './data/players';
import teams  from './data/teams';
import { useParams, useEffect } from 'react-router-dom';
//import { createBrowserHistory } from 'history'

function App() {
  const { teamID } = useParams();
  console.log(teamID);

  function findPlayersByTeamID(teamID) {
    let playersByTeamID = [];
    players.forEach(p => {
      if(p.teamID === teamID) {
        playersByTeamID.push(p);
      }
    });
    return playersByTeamID;
  }
  let searchPlayers = findPlayersByTeamID(teamID);
  console.log(searchPlayers);

  function findTeam(teamID) {
    let teamName = '';
    teams.forEach(t => {
      if(t.id === teamID) {
        teamName = t.name;
      }
    });
    return teamName;
  }
  return (
    <main>
        <Switch>
              <Route path="/" component={Header} exact />
              <Route path="/players">
                <div className="css-table-div">
                  <Header />
                  <table className="css-table">
                    <thead>
                      <tr>
                          <th>ID</th>
                          <th>#</th>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Height</th>
                          <th>Nationality</th>
                          <th>Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        players.map(p =>
                            <Player id={p.id} key={p.id} number={p.number} name={p.name} position={p.position} height={p.height} nationality={p.nationality} team={findTeam(p.teamID)} />
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </Route>
              <Route path="/teams">
                <div className="css-table-div">
                  <Header />
                  <table className="css-table">
                    <thead>
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Coach</th>
                          <th>Address</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Venue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        teams.map(t =>
                            <Team id={t.id} key={t.id} phoneNumber={t.phoneNumber} name={t.name} address={t.address} email={t.email} venue={t.venue} coach={t.coach} />
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </Route>
              <Route path="/players/:teamID">
                <div className="css-table-div">
                  <Header />
                  <table className="css-table">
                    <thead>
                      <tr>
                          <th>ID</th>
                          <th>#</th>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Height</th>
                          <th>Nationality</th>
                          <th>Team</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        searchPlayers.map(p =>
                            <Player id={p.id} key={p.id} number={p.number} name={p.name} position={p.position} height={p.height} nationality={p.nationality} team={findTeam(p.teamID)} />
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </Route>
        </Switch>
    </main>
)
}

export default App;
