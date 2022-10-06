import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Noiu EO",
  about:
    "Welcome to our Trip and Tour Agency. Lorem simply text amet cing elit.",
  icons: [
    // {
    //   id: 1,
    //   icon: "fas fa-phone-square-alt",
    //   // content: "+ 92 666 999 0000",
    //   subHref: "tel",
    // },
    // {
    //   id: 2,
    //   icon: "fas fa-envelope",
    //   content: "needhelp@company.com",
    //   subHref: "mailto",
    // },
    // {
    //   id: 3,
    //   icon: "fas fa-map-marker-alt",
    //   content: "666 road, broklyn street new york",
    // },
  ],
  companies: [
    { id: 1, link: "/contact", title: "Kontak" },
    { id: 2, link: "/tours", title: "Paket Wisata" },
    { id: 3, link: "/tours-list", title: "Paket Wisata" },
    { id: 4, link: "/news", title: "News" },
    { id: 5, link: "/about", title: "Tentang Kami" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
