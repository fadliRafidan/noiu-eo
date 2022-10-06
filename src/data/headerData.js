import logo from "@/images/noiu.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
     
    ],
  },
  {
    id: 2,
    name: "Dokumentasi",
    href: "/destinations",
    subNavItems: [
     
    ],
  },
  {
    id: 3,
    name: "Paket",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "Paket Wisata", href: "/tours" },
      { id: 2, name: "Paket Outbound", href: "/tours-list" },
      // { id: 3, name: "Tours Details", href: "/tour-details" },
    ],
  },
  {
    id: 4,
    name: "Tentang Kami",
    href: "/about",
    subNavItems:[],
  },
  {
    id: 5,
    name: "Artikel",
    href: "/news",
    subNavItems: [
      // { id: 1, name: "News", href: "/news" },
      // { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Kontak",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+ 92 666 999 0000",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "needhelp@company.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
