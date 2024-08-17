interface IMenu {
  id: number;
  label: string;
  href: string;
}

export const Menu: IMenu[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Animes",
    href: "/search/animes",
  },
  {
    id: 3,
    label: "Mangas",
    href: "/search/mangas",
  },
  {
    id: 4,
    label: "Characters",
    href: "/search/characters",
  },
];
