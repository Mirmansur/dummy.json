import { useSelector } from "react-redux";
import { FcLike, FcDislike } from "react-icons/fc";
import { toggleHeart } from "../../redux/slice/likeSlice";

const Like = () => {
  const liked = useSelector((state) => state.liked.value);
  return (
    <div className="mt-40">
      <div className="container mx-auto">
        {liked.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {liked.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 relative"
              >
                <button
                  onClick={() => toggleHeart(product)}
                  className="absolute top-3 right-3 text-slate-500 hover:text-red-500 transition duration-200"
                >
                  {liked.some((p) => p.id === product.id) ? (
                    <FcDislike className="text-3xl" />
                  ) : (
                    <FcLike className="text-3xl" />
                  )}
                </button>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
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
                <button className="w-full bg-slate-900 text-white p-3 rounded-md hover:bg-slate-800 transition duration-200">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl text-gray-500">No liked products yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Like;
