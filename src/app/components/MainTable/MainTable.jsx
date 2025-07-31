import './MainTableStyle.css'
import Sphere from '../Sphere';

export default function MainTable(props) {
    const { cells } = props;

    const width = cells.length;
    const height = cells[0].length;

    const cellSize = 25;

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${height}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${width}, ${cellSize}px)`,
    };

    return <div style={gridStyle}>
        {cells.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
                <Sphere
                    key={`${rowIndex}-${colIndex}`}
                    alive={cell}
                /*className={`cell${cell == '1' ? '.alive' : ''}`}*/
                />
            ))
        )}

    </div>


}