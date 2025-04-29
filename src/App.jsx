import { episodeList } from "./data";
import { useState } from "react";

export default function App() {
  console.log(episodeList);

  const [selectedEpisode, setEpisode] = useState(null);

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <section id="episodesContainer">
        <h2>Episodes</h2>
        {episodeList.map((episode) => {
          return (
            <h3 className={selectedEpisode === episode ? "selectedEpisode" : ""} key={episode.id} onClick={() => setEpisode(episode)}>
              {episode.title}
            </h3>
          );
        })}
      </section>

      <section id="infoContainer">
        {!selectedEpisode ? (
          <h3>Click to view an episode!</h3>
        ) : (
          <>
            <h3>{selectedEpisode.title}</h3>
            <h4>Episode {selectedEpisode.id}</h4>
            <h5>{selectedEpisode.description}</h5>
          </>
        )}
      </section>
    </>
  );
}
