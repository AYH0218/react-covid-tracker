const Cards = ({ allCountriesData }) => {
  return (
    <div className="card-container">
      {allCountriesData.map((singleData, index) => (
        <div className="card" key={index}>
          <div>
            <h2>{singleData.Country}</h2>
            <p>
              新規感染者：<span>{singleData.NewConfirmed.toLocaleString()}</span>
            </p>
            <p>
              感染者総数：<span>{singleData.TotalConfirmed.toLocaleString()}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
