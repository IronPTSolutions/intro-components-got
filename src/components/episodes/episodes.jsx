import episodes from "../../data/episodes.json";

function Episodes() {
  return (
    <div className="d-flex flex-wrap border-top mt-3 pt-2">
      {episodes.map((episode) => (
        <Episode
          key={episode.id}
          image={episode.image.medium}
          title={episode.name}
          description={episode.summary}
          season={episode.season}
          episode={episode.number}
        />
      ))}
    </div>
  );
}

function Episode({ image, title, description, season, episode }) {
  return (
    <div className="card m-2" style={{ width: "300px" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          S{season}E{episode}
        </p>
      </div>
    </div>
  );
}

export default Episodes;
