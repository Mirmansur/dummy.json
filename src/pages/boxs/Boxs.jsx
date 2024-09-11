import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/slice/cartSlice";
const Boxs = () => {
  const { products } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  console.log(products);
  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-40">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-4 bg-white max-w-sm mx-auto"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain rounded-md mb-4 cursor-pointer"
            />
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold line-clamp-1 text-slate-900">
                {product.title}
              </h3>
              <span className="text-md font-bold text-slate-800">
                ${product.price}
              </span>
            </div>
            <p className="text-gray-600 mb-5 line-clamp-3">
              {product.description}
            </p>
            <button className="w-full bg-slate-800 text-white p-2 rounded-md hover:bg-slate-900 transition duration-200">
              Muddati tolovga olish
            </button>
            <button
              onClick={() => handleDelete(product.id)}
              className="w-full border border-gray-300 text-gray-800 p-2 rounded-md mt-2 hover:bg-gray-100 transition duration-200"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxs;
