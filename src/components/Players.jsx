function Player({ name, club, nationality, position, imageURL, age }) {
    ;
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-[30px] w-[360px]">
        <img className="w-full h-[240px]" src={imageURL} alt="Player" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="font-bold text-xl mb-2">Age : {age}</div>
  
          <p className="text-gray-700 text-base">Club : {club}</p>
          <p className="text-gray-700 text-base">Nationality : {nationality}</p>
          <p className="text-gray-700 text-base">Position : {position}</p>
        </div>
      </div>
    );
  }
  
  export default Player;