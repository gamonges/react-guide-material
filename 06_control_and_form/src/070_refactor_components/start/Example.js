import { useState } from "react";
import AnimalList from "./componentes/AnimalList";
import AnimalFilter from "./componentes/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");
  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterdAnimals} filterVal={filterVal} />
    </>
  );
};

export default Example;
