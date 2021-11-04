import React from "react";
import Player from '../Player';
import Header from "../Header";
import players  from '../../data/players';
import teams  from '../../data/teams';
import { useSearchParams } from "react-router-dom";
import './Players.css';

function Players() {
    const [searchParams, setSearchParams] = useSearchParams();    
    function findTeam(teamID) {
        let teamName = '';
        teams.forEach(t => {
          if(Number(t.id) === Number(teamID)) {
            teamName = t.name;
          }
        });
        return teamName;
    }
    return (
        <div className="css-table-div">
            <Header />
            <input className="css-search" placeholder="Search..." value={searchParams.get("search") || ''} 
            onChange={event => {
                let search = event.target.value;
                if (search) {
                    setSearchParams({ search });
                } else {
                    setSearchParams({});
                }
            }}/>
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
                    players.filter(pl => {
                        let search = searchParams.get("search"); 
                        if(!search) {
                            return true;
                        }
                        if (pl.id === Number(search) ||
                            pl.name.toLowerCase().includes(search.toLowerCase()) ||
                            pl.number.toLowerCase().includes(search.toLowerCase()) ||
                            pl.position.toLowerCase().includes(search.toLowerCase()) ||
                            pl.height === Number(search) ||
                            pl.nationality.toLowerCase().includes(search.toLowerCase()) ||
                            findTeam(pl.teamID).toLowerCase().includes(search.toLowerCase())
                            ) {
                            return true;
                        }
                    })
                    .map(p => 
                        <Player id={p.id} key={p.id} number={p.number} name={p.name} position={p.position} height={p.height} nationality={p.nationality} team={findTeam(p.teamID)} />
                    )
                    
                }
                </tbody>
            </table>
        </div>
    );
};

export default Players;