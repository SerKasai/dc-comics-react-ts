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
  return (
    <main>
      <div className="text-white bg-[#242424] p-7">-- CONTENT GOES HERE --</div>
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
