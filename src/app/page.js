import MainTable from "./components/MainTable";
import Sphere from "./components/Sphere";

export default function Home() {
  const my2DArray = [
    [1, 2, 3, 1],
    [4, 1, 6, 0],
    [7, 1, 9, 8]
  ];

  return (
    <>
      <div className="caption">
        Full stack web developer course 2025-
      </div>
      <MainTable cells={my2DArray} />
      <div className="caption">
        just check
      </div>
      <Sphere />
    </>

  );
}
