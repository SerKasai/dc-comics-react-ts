import "./MainHeader.css";

const arrayLinks = [
  {
    id: 0,
    text: "Characters",
    href: "#",
    active: false,
  },
  {
    id: 1,
    text: "Comics",
    href: "#",
    active: true,
  },
  {
    id: 2,
    text: "Movies",
    href: "#",
    active: false,
  },
  {
    id: 3,
    text: "TV",
    href: "#",
    active: false,
  },
  {
    id: 4,
    text: "Games",
    href: "#",
    active: false,
  },
  {
    id: 5,
    text: "Collectibles",
    href: "#",
    active: false,
  },
  {
    id: 6,
    text: "Videos",
    href: "#",
    active: false,
  },
  {
    id: 7,
    text: "Fans",
    href: "#",
    active: false,
  },
  {
    id: 8,
    text: "News",
    href: "#",
    active: false,
  },
  {
    id: 9,
    text: "Shop",
    href: "#",
    active: false,
  },
];

function MainHeader() {
  return (
    <header className="text-black flex w-full justify-around p-3.5">
      <img src="/src/assets/dc-logo.png" className="cursor-pointer" />
      <ul className="flex flex-wrap gap-6 uppercase text-xl items-center justify-center content-center bebas-neue-regular">
        {arrayLinks.map((link) => (
          <li key={link.id} className="hover:text-blue-500 cursor-pointer">
            {link.text}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default MainHeader;
