import "./App.css";
import Navbar from "./navbar";
import Header from "./header";
import Content from "./content";

const animeData = [
  {
    name: "Jujutsu Kaisen",
    language: "Sub | JP",
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe",
  },
  {
    name: "One Piece",
    language: "Sub | ENG",

    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe",
  },
  {
    name: "Solo Leveling",
    language: "Sub | JP",

    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/5e7f533c3b4f46244ca228af62e83dfa.jpe",
  },
  {
    name: "Frieren",
    language: "Sub | KR",

    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f446d7a2a155c6120742978fb528fb82.jpe",
  },
  {
    name: "Spy X Family",
    language: "Sub | JP",

    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/095217fdb4f228410df09b18f151be28.jpe",
  },
  {
    name: "Shield Hero",
    language: "Sub | ENG",

    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e5d61ac62e1ccf624e1d7507ec1758bb.jpe",
  },
];

function App() {
  return (
    <div id="content">
      <Navbar />
      <div className="app-body-wrapper">
        <div className="page-wrapper--5HUY2 erc-browse">
          <Header />

          {animeData.map((anime) => (
            <Content animeObj={anime} key={anime.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
