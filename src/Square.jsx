import React from "react";

const Square = ({squares,setSquares,player,setPlayer,value,index}) => {
    const handleClick = () => {
        if (!value) {
            if (player) {
                squares.splice(index,1,'X')
                setSquares(squares)
                setPlayer(!player)
            } else {
                squares.splice(index, 1, "O");
                setSquares(squares);
                setPlayer(!player);
            }
        }
    }

    return (
        <div className="square" onClick={handleClick}>
            {value === "O" ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : value}
        </div>
    );
};

export default Square;