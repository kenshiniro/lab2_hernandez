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
    status: "COMPLETED",
    rank: 1,
  },
  {
    name: "One Piece",
    language: "Sub | ENG",
    year: 2012,
    status: "COMPLETED",
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe",
  },
  {
    name: "Solo Leveling",
    language: "Sub | JP",
    year: 2019,
    status: "ONGOING",
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/5e7f533c3b4f46244ca228af62e83dfa.jpe",
  },
  {
    name: "Frieren",
    language: "Sub | KR",
    status: "COMPLETED",
    rank: 4,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f446d7a2a155c6120742978fb528fb82.jpe",
  },
  {
    name: "Spy X Family",
    language: "Sub | JP",
    status: "COMPLETED",
    rank: 5,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/095217fdb4f228410df09b18f151be28.jpe",
  },
  {
    name: "Shield Hero",
    language: "Sub | ENG",
    status: "ONGOING",
    rank: 6,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e5d61ac62e1ccf624e1d7507ec1758bb.jpe",
  },
  {
    name: "Wrong Use of Healing Magic",
    language: "Sub | ENG",
    status: "ONGOING",
    rank: 7,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/3f493195883a48083f37cb6a2e18427c.jpe",
  },
  {
    name: "Unwanted Hero",
    language: "Sub | ENG",
    status: "COMPLETED",
    rank: 8,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/14de5c5e50b2322bfc501478ff7b7143.jpe",
  },
  {
    name: "MASHLE",
    language: "Sub | ENG",
    status: "ONGOING",
    rank: 9,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f7dfe109de592c6dd9a78dc75ec1965b.jpe",
  },
  {
    name: "Tsukimichi",
    language: "Sub | ENG",
    status: "COMPLETED",
    rank: 10,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/9b2fb07e9be2b7f1f3cca7d660552b5e.jpe",
  },
  {
    name: "Classroom of the Elite",
    language: "Sub | ENG",
    status: "ONGOING",
    rank: 11,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/8b35b4a6cffe66004f752aa147351cab.jpe",
  },
  {
    name: "Dr.Stone",
    language: "Sub | ENG",
    status: "COMPLETED",
    rank: 12,
    photoName:
      "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/29e0d306dbff3a163acadf66a35b3cf5.jpe",
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
