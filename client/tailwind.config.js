/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage:
          "url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')",
        dining:
          "url('https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp')",
        chocolate:
          "url('https://b.zmtcdn.com/data/collections/0a4f52d9dc95cf3a5d3cf05f2299c1bf_1704348957.png?output-format=webp')",
        insta:
          "url('https://b.zmtcdn.com/data/collections/ae71f4c72fda8a608a3650b15a994fdb_1696838475.jpg?output-format=webp')",
        cozy: "url('https://b.zmtcdn.com/data/collections/2022843bd23fe6c24f67cbea79836a4f_1704970294.png?output-format=webp')",
        zomato:
          "url('https://b.zmtcdn.com/data/cover_images/7dc92ec243c19684b2eaefd0050d656e1548144012.jpeg')",
      },
      colors: {
        primary: "#E23744",
      },
    },
  },
  plugins: [],
};
