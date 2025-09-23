import "./MainFooter.css";

type Link = { category: string; page: string[] };

const links: Link[] = [
  {
    category: "dc comics",
    page: ["characters", "comics", "movies", "tv", "games", "videos", "news"],
  },
  {
    category: "shop",
    page: ["shop dc", "shop dc collectibles"],
  },
  {
    category: "DC",
    page: [
      "terms of use",
      "privacy policy",
      "ad choices",
      "advertising",
      "jobs",
      "subscriptions",
      "talent workshops",
      "CPSC Certfications",
      "ratings",
      "shop help",
      "contact us",
    ],
  },
  {
    category: "sites",
    page: ["DC", "MAD magazine", "DC kids", "DC universe", "DC power visa"],
  },
];

type LinkBottom = { icon: string };

const icons: LinkBottom[] = [
  { icon: "/src/assets/footer-facebook.png" },
  { icon: "/src/assets/footer-twitter.png" },
  { icon: "/src/assets/footer-youtube.png" },
  { icon: "/src/assets/footer-pinterest.png" },
  { icon: "/src/assets/footer-periscope.png" },
];

function MainFooter() {
  return (
    <footer>
      <section className="bg-[url(/src/assets/footer-bg.jpg)] bg-img flex">
        <div className="bebas-neue-regular flex justify-center p-7 gap-x-5 w-1/2">
          {links.map((link) => (
            <section
              key={link.category}
              className="flex flex-col justify-start items-start"
            >
              <h4 className="text-xl text-white py-3.5 cursor-pointer">
                {link.category}
              </h4>
              <ul className="flex flex-col items-start">
                {link.page.map((p) => (
                  <li
                    key={p}
                    className="text-gray-600 cursor-pointer hover:text-white"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="bg-[url(/src/assets/dc-logo-bg.png)] w-[30%] bg-cover bg-center text-transparent">
          image
        </div>
      </section>
      <section className="bg-[#242424] flex justify-around items-center py-8 pr-14">
        <button className="uppercase rounded-none bg-transparent border-blue-500">
          sign-up now!
        </button>
        <div className="flex items-center gap-x-6">
          <div className="text-blue-500 bebas-neue-regular text-2xl cursor-pointer">
            follow us
          </div>
          <ul className="flex gap-x-5">
            {icons.map((icon) => (
              <li key={icon.icon}>
                <img src={icon.icon} className="cursor-pointer" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
}
export default MainFooter;
