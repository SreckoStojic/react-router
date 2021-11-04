import React from "react";

function Team(props) {
    return (
        <tr className="css-team">
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.coach}</td>
            <td>{props.address}</td>
            <td>{props.email}</td>
            <td>{props.phoneNumber}</td>
            <td>{props.venue}</td>
        </tr>
    );
};

export default Team;