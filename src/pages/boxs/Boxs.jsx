import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/slice/cartSlice";

const Boxs = () => {
  const { products } = useSelector((state) => state.cards);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <div className="mt-40">
      <div className="container mx-auto ">
        <h1 className="text-2xl font-semibold mb-6">Savat</h1>
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between border rounded-lg p-4 bg-white"
            >
              <div className="flex space-x-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-20 object-contain rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">
                    Narx: {product.price} som
                  </p>
                  <p className="text-sm text-gray-500">
                    Sotuvchi: {product.seller}
                  </p>
                  <p className="text-sm text-gray-500">
                    Yetkazib berish muddat: {product.deliveryTime}
                  </p>
                  <div className="mt-2">
                    <span className="bg-gray-100 text-sm px-2 py-1 rounded-md">
                      Muddati tolov: {product.installmentPrice} som ×{" "}
                      {product.installmentMonths} oyga
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center">
                  <button className="bg-gray-200 px-2 py-1">-</button>
                  <span className="mx-2">1</span>
                  <button className="bg-gray-200 px-2 py-1">+</button>
                </div>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:text-red-600 flex items-center space-x-1"
                >
                  <span>Ochirish</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 4a1 1 0 00-1 1v1H3a1 1 0 100 2h1v9a2 2 0 002 2h8a2 2 0 002-2V8h1a1 1 0 100-2h-2V5a1 1 0 00-1-1H6zm7 3V5H7v2h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxs;
