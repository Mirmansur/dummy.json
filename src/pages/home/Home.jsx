import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../LoadingSpinner";
import { toggleHeart } from "../../redux/slice/likeSlice";
import { FcDislike, FcLike } from "react-icons/fc";
import { addToCart } from "../../redux/slice/cartSlice";
const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.liked.value);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const isProductLiked = (productId) => {
    return likedProducts?.some((product) => product.id === productId);
  };

  const addToCarts = (product) => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <div className="Home mt-40">
      <div className="container mx-auto">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="product bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300 relative"
              >
                <button
                  onClick={() => dispatch(toggleHeart(product))}
                  className="absolute top-3 right-3 text-slate-500 hover:text-red-500 transition duration-200"
                >
                  {isProductLiked(product.id) ? (
                    <FcDislike size={24} />
                  ) : (
                    <FcLike size={24} />
                  )}
                </button>

                <Link to={`/single/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-contain rounded-md mb-4 cursor-pointer"
                  />
                </Link>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-bold text-slate-800">
                    ${product.price}
                  </span>
                  <h3 className="text-xl font-semibold line-clamp-1 text-slate-900">
                    {product.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-5 line-clamp-3">
                  {product.description}
                </p>
                <button
                  onClick={() => addToCarts(product)}
                  className="w-full bg-slate-900 text-white p-3 rounded-md hover:bg-slate-800 transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="min-h-screen flex justify-center items-center">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
