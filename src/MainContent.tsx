/* eslint-disable @typescript-eslint/no-explicit-any */
import "./MainContent.css";
import { useFetch } from "./hooks/FetchReducer";

type CharacterHero = {
  id: number;
  name: string;
  biography: any;
  image: string;
};

const cards = [
  {
    id: 0,
    img: "../public/assets/img/buy-comics-digital-comics.png",
    text: "digital comics",
  },
  {
    id: 1,
    img: "../public/assets/img/buy-comics-merchandise.png",
    text: "dc merchandise",
  },
  {
    id: 2,
    img: "../public/assets/img/buy-comics-subscriptions.png",
    text: "subscription",
  },
  {
    id: 3,
    img: "../public/assets/img/buy-comics-shop-locator.png",
    text: "comic shop locator",
  },
  {
    id: 4,
    img: "../public/assets/img/buy-dc-power-visa.svg",
    text: "dc power visa",
  },
];

function MainContent() {
  const url = "https://api.npoint.io/502206370ba9c8f6b8de";
  const { data: characters, loading, error } = useFetch<CharacterHero[]>(url);

  console.log(characters);

  if (loading) {
    return <div>Caricamento eroi...</div>;
  }
  if (error) {
    return <div>Errore di caricamento! {error}</div>;
  }

  return (
    <main>
      <div className="jumbotron bg-[#242424] bg-[url(../public/assets/img/jumbotron.jpg)]">
        <button className="uppercase relative top-[93%] right-[29%] bg-blue-500! rounded-none! cursor-auto! text-lg!">
          Current series
        </button>
      </div>
      <div className="bg-[#242424] px-[165px] py-12">
        <ul className="flex flex-row justify-center gap-x-5 gap-y-10 uppercase flex-wrap">
          {characters?.map((chara) => (
            <li key={chara.id} className="flex flex-col items-center w-52">
              <img
                src={chara.image}
                alt={chara.name}
                className="pb-2.5 aspect-square w-52 object-cover object-top cursor-pointer"
              />
              <h2 className="underline font-bold cursor-pointer pb-2.5">
                {chara.name}
              </h2>
              <p>Prima apparizione</p>
              <p className="text-gray-600">
                {chara.biography["first-appearance"]}
              </p>
            </li>
          ))}
        </ul>
        <button className="uppercase bg-blue-500! rounded-none! mt-5 w-48">
          Load more
        </button>
      </div>

      <div className="bg-blue-500 flex flex-wrap justify-center">
        <ul className="uppercase flex items-center gap-5 p-12 justify-evenly w-[73%]">
          {cards.map((card) => (
            <li
              className="cursor-pointer flex items-center justify-center gap-x-3.5 h-16 w-[230px]"
              key={card.id}
            >
              <img src={card.img} alt={card.text} className="max-w-12" />{" "}
              {card.text}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default MainContent;
