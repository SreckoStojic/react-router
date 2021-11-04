import React from "react";
import './Player.css';

function Player(props) {
    return (
        <tr className="css-player">
            <td>{props.id}</td>
            <td>{props.number}</td>
            <td>{props.name}</td>
            <td>{props.position}</td>
            <td>{props.height}cm</td>
            <td>{props.nationality}</td>
            <td>{props.team}</td>
        </tr>
    );
};

export default Player;