   
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addproductInCart } from "../redux/slices/cartSlice";


// ---- Dummy Student Products ----
const Products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Perfect pack for everyday use.",
    category: "men's clothing",
    imageUrl: "https://tse2.mm.bing.net/th/id/OIP.8GKXh2SN96o0D_PlJFyGhQHaE6?pid=Api&P=0&h=180",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description: "Slim-fitting style, long sleeve...",
    category: "men's clothing",
    imageUrl:
      "https://tse4.mm.bing.net/th/id/OIP.bJ5aHr1uKKyMyHYZoxvX8QHaEg?pid=Api&P=0&h=180",
    rating: { rate: 4.1, count: 259 },
  },
   {
   id: 3,
   name: "Mens Cotton Jacket",
   price: 55.99,
   description:
     "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
   category: "men's clothing",
   imageUrl: "https://tse1.mm.bing.net/th/id/OIP.plDYY7sY-UbupGSoHMJirgHaE8?pid=Api&P=0&h=180",
   rating: {
     rate: 4.7,
     count: 500,
   },
 },
 {
   id: 4,
   name: "Mens Casual Slim Fit",
   price: 15.99,
   description:
     "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the student description.",
   category: "men's clothing",
   imageUrl: "https://tse2.mm.bing.net/th/id/OIP.8_QUEseH1Lz5HfKxI5d5QQHaE7?pid=Api&P=0&h=180",
   rating: {
     rate: 2.1,
     count: 430,
   },
 },
 {
   id: 5,
   name:
     "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
   price: 695,
   description:
     "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
   category: "jewelery",
   imageUrl:
     "https://tse2.mm.bing.net/th/id/OIP.kkc8AY-5bgz2IyQqhhEB9gHaE8?pid=Api&P=0&h=180",
 rating: {
     rate: 4.6,
     count: 400,
   },
 },
 {
   id: 6,
   name: "Solid Gold Petite Micropave ",
   price: 168,
   description:
     "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
   category: "jewelery",
   imageUrl:
     "https://tse3.mm.bing.net/th/id/OIP.y_L9xwKNfzwL8JSVkZqhDwHaHa?pid=Api&P=0&h=180",
   rating: {
     rate: 3.9,
     count: 70,
   },
 },
 {
   id: 7,
 name: "White Gold Plated Princess",
   price: 9.99,
   description:
     "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
   category: "jewelery",
   imageUrl:
     "https://tse1.mm.bing.net/th/id/OIP.FKn60rRlDphrQJ7bhCs8HgHaHa?pid=Api&P=0&h=180",
   rating: {
     rate: 3,
     count: 400,
   },
 },
 {
 id: 8,
  name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
   price: 10.99,
   description:
     "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
   category: "jewelery",
   imageUrl:
     "https://tse2.mm.bing.net/th/id/OIP.tfvJQ2x3XXn_-GjpH69ewAHaHa?pid=Api&P=0&h=180",
   rating: {
     rate: 1.9,
     count: 100,
   },
 },
];

// ---- Product Card ----
const ProductCard = ({ product}) => {
  const dispatch = useDispatch();
  const [discount] = useState(15);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-dark2 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg h-96 hover:scale-110"
          src={product.imageUrl}
          alt={product.title}
        />
      </a>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>

        {/* Rating */}
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            ⭐ {product.rating.rate}
          </span>
        </div>

        {/* Price + Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            <del className="text-red-400">
              {(product.price * 1.25).toFixed(2)}
            </del>{" "}
            <span className="text-green-500">{product.price}</span> {discount}%
            OFF
          </span>
          <button
            onClick={() => dispatch(addproductInCart(product))}

            className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 
              text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ---- Students List Grid ----
const ProductsList = () => {
  return (
    <div>
      <div className="grid grid-cols-1 bg-white dark:bg-dark1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-3 sm:p-6 md:p-12 md:gap-7">
        {Products.map((prod, i) => (
          <ProductCard product={prod} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

// ---- Services Component (DB Students) ----
export const Services = ({ products }) => {
  return (
    <>
      <div className="flex justify-end mt-4 mr-2">
        <button className="btn btn-success">add student</button>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 px-20 my-10">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      ) : (
        <h1>no students to display</h1>
      )}
    </>
  );
};



