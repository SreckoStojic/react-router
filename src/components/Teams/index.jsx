import React from "react";
import Header from "../Header";
import Team from "../Team";
import teams  from '../../data/teams';
import { useSearchParams } from "react-router-dom";

function Teams() {
   const [searchParams, setSearchParams] = useSearchParams();  
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
                        teams.filter(t => {
                            let search = searchParams.get("search"); 
                            if(!search) {
                                return true;
                            }
                            if (t.name.toLowerCase().includes(search.toLowerCase()) || 
                                t.coach.toLowerCase().includes(search.toLowerCase()) ||
                                t.address.toLowerCase().includes(search.toLowerCase()) ||
                                t.id === Number(search) ||
                                t.venue.toLowerCase().includes(search.toLowerCase()) ||
                                t.email.toLowerCase().includes(search.toLowerCase()) ||
                                t.phoneNumber.toLowerCase().includes(search.toLowerCase())) {
                                return true;
                            }
                        })
                        .map(t =>
                        <Team id={t.id} key={t.id} phoneNumber={t.phoneNumber} name={t.name} address={t.address} email={t.email} venue={t.venue} coach={t.coach} />)
                    }
                </tbody>
            </table>
    </div>
    );
};

export default Teams;