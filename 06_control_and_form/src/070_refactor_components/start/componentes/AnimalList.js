import AnimalItem from "./AnimalItem";
const AnimalList = ({ animals, filterVal }) => {
  if (animals.length === 0) {
    return <h3>アニマルが見つかりませんでした</h3>;
  }
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem animal={animal} key={animal} />;
      })}
    </ul>
  );
};

export default AnimalList;
