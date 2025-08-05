class Cell {

    constructor(row, column, alive) {

        this.column = column;

        this.row = row;

        this.alive = alive;

        this.family = [];
    }

    setState(newState) {

        this.alive = newState;
    }

    getState() {
        return this.alive;
    }

    setFamily(family) {

        this.family = family;
    }

    update() {
        //count living surrounding cells
        let density = 0;
        density = this.family.filter(cell => cell.alive).length;

        //compute new state
        return density == 3 ?
            true :
            density == 2 && this.alive ?
                true :
                false;
    }
}

export default Cell;