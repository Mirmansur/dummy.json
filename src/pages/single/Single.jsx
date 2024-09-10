import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  console.log(id);

  return (
    <div className="Single mt-20">
      <div className="container mx-auto">
        {product ? (
          <div className="single p-5 bg-white shadow-md rounded-md">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
            <p className="text-xl text-slate-600 mb-4">${product.price}</p>
            <p className="text-gray-700 mb-5">{product.description}</p>
            <button className="bg-slate-900 text-white p-3 rounded-md">
              Add to Cart
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Single;
