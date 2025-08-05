'use client';

import './MainTableStyle.css'
import Sphere from '../Sphere';
import Field from "../Entities/Field";
import React, { useState, useEffect, useRef } from 'react';


export default function MainTable() {

    const interval = 1000; //should it also be available for adjustment?

    const field = new Field(7, 5);
    const [cells, updateCells] = useState(field.cells);

    const height = 5;// cells.length;
    const width = 7;// cells[0].length;     
    const cellSize = 25;

    useEffect(() => {
        const intervalId = setInterval(() => {
            field.update();
            updateCells([...field.cells]);
        }, interval);

        return () => clearInterval(intervalId);
    }, []);

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${width}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${height}, ${cellSize}px)`,
    };

    return <div style={gridStyle}>
        {cells.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
                <Sphere
                    key={`${rowIndex}-${colIndex}`}
                    alive={cell.getState()}
                />
            ))
        )}
    </div>
}