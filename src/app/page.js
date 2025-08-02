import MainTable from "./components/MainTable";
import Field from "./components/Entities/Field";

export default function Home() {
  const my2DArray = [
    [1, 2, 3, 1],
    [4, 1, 6, 0],
    [7, 1, 9, 8]
  ];

  const fieldOfCells = new Field(7, 5).cells;

  return (
    <>
      <MainTable cells={fieldOfCells} />
    </>
  );
}
