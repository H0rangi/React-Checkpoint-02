import Player from "./Players";

 function PlayersList({ players }) {
  console.log(players);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "30px",
      }}
    >
      {players?.map((e, i) => {
        const { id, name, age, nationality, position, club, imageURL } = e;

        return (
          <Player
            key={i}
            id={id}
            name={name}
            age={age}
            nationality={nationality}
            position={position}
            club={club}
            imageURL={imageURL}
          />
        );
      })}
    </div>
  );
}

export default PlayersList;