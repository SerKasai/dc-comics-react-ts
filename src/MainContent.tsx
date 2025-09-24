import "./MainContent.css";
import { useFetch } from "./hooks/FetchReducer";

type CharacterHero = { id: number; name: string; image: string };

const cards = [
  {
    id: 0,
    img: "/src/assets/buy-comics-digital-comics.png",
    text: "digital comics",
  },
  {
    id: 1,
    img: "/src/assets/buy-comics-merchandise.png",
    text: "dc merchandise",
  },
  {
    id: 2,
    img: "/src/assets/buy-comics-subscriptions.png",
    text: "subscription",
  },
  {
    id: 3,
    img: "/src/assets/buy-comics-shop-locator.png",
    text: "comic shop locator",
  },
  {
    id: 4,
    img: "/src/assets/buy-dc-power-visa.svg",
    text: "dc power visa",
  },
];

function MainContent() {
  const url =
    "https://superheroapi.com/api/008bbcada1368ec4c5e00b3d1807b0f7/63";
  const { data: characters, loading, error } = useFetch<CharacterHero[]>(url);

  if (loading) {
    return <div>Caricamento eroi...</div>;
  }
  if (error) {
    return <div>Errore di caricamento! {error}</div>;
  }

  return (
    <main>
      <div className="jumbotron bg-[#242424] bg-[url(/src/assets/jumbotron.jpg)]"></div>
      <div>
        <button className="uppercase">Current series</button>
        <ul>
          {characters?.map((chara) => (
            <li key={chara.id}>
              <img src={chara.image} />
              <p>{chara.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-blue-500 flex flex-wrap justify-center">
        <ul className="uppercase flex items-center gap-5 p-12 justify-evenly w-[73%]">
          {cards.map((card) => (
            <li
              className="cursor-pointer flex items-center justify-center gap-x-3.5 h-16 w-[230px]"
              key={card.id}
            >
              <img src={card.img} className="max-w-12" /> {card.text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default MainContent;
