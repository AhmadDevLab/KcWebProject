/**
 * KC The Royal Karan's Collection - store configuration and catalog.
 * Edit this file to change the contact number, add products, or set prices.
 */

const STORE = {
  brand: "KC The Royal Karan's Collection",
  whatsapp: "923269800032",       // country code + number, digits only
  phoneDisplay: "0326-9800032",
  currencySymbol: "Rs."
};

// category: "men" | "ladies" | "digital" | "perfumes"
// price: optional number. Leave it out to show "Price on WhatsApp".
const PRODUCTS = [
  { id: "p01", category: "perfumes", title: "Rose Blush Eau de Parfum",         tag: "Perfume", image: "kc-00.jpg" },
  { id: "p02", category: "perfumes", title: "Marine White Eau de Parfum",       tag: "Perfume", image: "kc-01.jpg" },
  { id: "p03", category: "perfumes", title: "Signature Black Gift Edition",     tag: "Perfume", image: "kc-02.jpg" },

  { id: "w01", category: "men",      title: "Gold Day-Date Classic",            tag: "Men's Watch", image: "kc-25.jpg" },
  { id: "w02", category: "men",      title: "Gold & Black Jubilee",             tag: "Men's Watch", image: "kc-24.jpg" },
  { id: "w03", category: "men",      title: "Gold Skeleton Automatic Style",    tag: "Men's Watch", image: "kc-22.jpg" },
  { id: "w04", category: "men",      title: "Rose Gold Diver",                  tag: "Men's Watch", image: "kc-16.jpg" },
  { id: "w05", category: "men",      title: "Two-Tone Silver & Gold",           tag: "Men's Watch", image: "kc-23.jpg" },
  { id: "w06", category: "men",      title: "Silver Classic Dial",              tag: "Men's Watch", image: "kc-21.jpg" },
  { id: "w07", category: "men",      title: "Silver Skeleton Edition",          tag: "Men's Watch", image: "kc-26.jpg" },
  { id: "w08", category: "men",      title: "Black & Yellow Chronograph",       tag: "Men's Watch", image: "kc-18.jpg" },
  { id: "w09", category: "men",      title: "Black & Yellow Sport",             tag: "Men's Watch", image: "kc-20.jpg" },
  { id: "w10", category: "men",      title: "Square White Edition",             tag: "Men's Watch", image: "kc-14.jpg" },
  { id: "w11", category: "men",      title: "Square Black Edition",             tag: "Men's Watch", image: "kc-15.jpg" },
  { id: "w12", category: "men",      title: "Square Steel Classic",             tag: "Men's Watch", image: "kc-19.jpg" },
  { id: "w13", category: "men",      title: "Rectangular Classic",              tag: "Men's Watch", image: "kc-09.jpg" },
  { id: "w14", category: "men",      title: "Gold Luxury Timepiece",            tag: "Men's Watch", image: "kc-27.jpg" },
  { id: "w15", category: "men",      title: "Four-Piece Steel Collection",      tag: "Collection",  image: "kc-17.jpg" },

  { id: "l01", category: "ladies",   title: "Oval Ladies - Rose Pink",          tag: "Ladies' Watch", image: "kc-08.jpg" },
  { id: "l02", category: "ladies",   title: "Oval Ladies Diamond - Rose Gold",  tag: "Ladies' Watch", image: "kc-13.jpg" },
  { id: "l03", category: "ladies",   title: "Ladies Diamond - Black Edition",   tag: "Ladies' Watch", image: "kc-07.jpg" },
  { id: "l04", category: "ladies",   title: "Oval Ladies - Rose Gold & Black",  tag: "Ladies' Watch", image: "kc-10.jpg" },
  { id: "l05", category: "ladies",   title: "Ladies Four-Colour Collection",    tag: "Collection",    image: "kc-05.jpg" },

  { id: "d01", category: "digital",  title: "Square Digital Classic",           tag: "Digital Watch", image: "kc-11.jpg" },
  { id: "d02", category: "digital",  title: "Digital Duo - White & Navy",       tag: "Digital Watch", image: "kc-12.jpg" }
];

const FILTERS = [
  { key: "all",      label: "All" },
  { key: "men",      label: "Men's Watches" },
  { key: "ladies",   label: "Ladies' Watches" },
  { key: "digital",  label: "Digital" },
  { key: "perfumes", label: "Perfumes" }
];
