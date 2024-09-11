import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedInstallment, setSelectedInstallment] = useState("24");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleInstallmentClick = (months) => {
    setSelectedInstallment(months);
  };

  const handleAddToCart = () => {
    console.log(
      `Product added to cart with ${selectedInstallment} month(s) installment`
    );
  };

  return (
    <div className="Single mt-40">
      <div className="container mx-auto px-4 lg:px-8">
        {product ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-md p-5">
            <div className="flex flex-col items-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full max-w-md h-auto rounded-md"
              />
              <div className="flex gap-2 mt-4">
                {product.images &&
                  product.images
                    .slice(0, 3)
                    .map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`${product.title} thumbnail`}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                    ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
                <div className="flex items-center mb-2">
                  <span className="text-lg text-green-600 font-semibold mr-2">
                    1 yil kafolat
                  </span>
                  <span className="text-lg text-green-600 font-semibold">
                    IMEI
                  </span>
                </div>
                <p className="text-lg text-slate-700 mb-4">
                  {product.description}
                </p>
                <div className="text-xl font-semibold text-red-600 mb-4">
                  Narx: {product.price} som
                </div>
                <p className="text-slate-500 line-through text-lg mb-4">
                  Eski narx: 2 822 352 som
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold mb-4">
                  Muddati tolov: 174 927 som/oyiga
                </p>
                <div className="flex gap-2 mb-6">
                  {["3", "6", "12", "18", "24"].map((months) => (
                    <button
                      key={months}
                      onClick={() => handleInstallmentClick(months)}
                      className={`px-4 py-2 rounded-md border ${
                        months === selectedInstallment
                          ? "bg-slate-900 text-white"
                          : "border-slate-300 text-slate-600"
                      }`}
                    >
                      {months} oyga
                    </button>
                  ))}
                </div>
                <button
                  className="bg-slate-800 text-white py-3 px-6 w-full rounded-md font-semibold hover:bg-slate-900 transition"
                  onClick={handleAddToCart}
                >
                  Savatga qoshish
                </button>
              </div>
            </div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default Single;
