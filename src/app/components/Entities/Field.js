import Cell from "./Cell";

class Field {

    constructor(columns, rows) {

        this.columns = columns;
        this.rows = rows;
        this.cells = [];
        this.next = [];

        for (let i = 0; i < this.rows; i++) {
            this.cells[i] = [];
            for (let j = 0; j < this.columns; j++) {
                //fake values, just to see if it works
                this.cells[i][j] = new Cell(i, j, j == i ? true : false);
            }
        }

        this.defineFamilies();
    }

    /*
        determine the surroundings of each cell - 8 adjacent cells
    */
    defineFamilies() {

        const lastRow = this.rows - 1;
        const lastColumn = this.columns - 1;

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                let family = [];

                //origin
                let row = i;
                let column = j;

                //first step: up
                row = row == 0 ? lastRow : --row;
                family.push(this.cells[row][column]);

                //second step: right
                column = column == lastColumn ? 0 : ++column;
                family.push(this.cells[row][column]);

                //third step: down - same row as origin
                row = i;
                family.push(this.cells[row][column]);

                //fourth step: down
                row = row == lastRow ? 0 : ++row;
                family.push(this.cells[row][column]);

                //fifth step: left - same column as origin
                column = j;
                family.push(this.cells[row][column]);

                //sixth step: left
                column = column == 0 ? lastColumn : --column;
                family.push(this.cells[row][column]);

                //seventh step: up - same row as origin
                row = i;
                family.push(this.cells[row][column]);

                //eight step: up
                row = row == 0 ? lastRow : --row;
                family.push(this.cells[row][column]);

                this.cells[i][j].setFamily(family);
            }
        }
    }

    update() {
        for (let i = 0; i < this.rows; i++) {
            this.next[i] = [];
            for (let j = 0; j < this.columns; j++) {
                //temp array to keep new states
                this.next[i][j] = this.cells[i][j].update();
            }
        }

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                //copy temp value to main array
                this.cells[i][j].setState(this.next[i][j]);
            }
        }
    }
}

export default Field;