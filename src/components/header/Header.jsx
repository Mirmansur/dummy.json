import { Modal } from "antd";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative">
      <div className="Header py-5 px-10 fixed top-0 left-0 shadow-lg z-10 w-full bg-white border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="logo">
              <Link to="/">
                <h1 className="text-4xl font-bold text-slate-900">RM</h1>
              </Link>
            </div>

            <div className="search w-[500px]">
              <form className="flex items-center border rounded-md overflow-hidden shadow-sm">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none p-3 w-full text-gray-700"
                />
                <button className="bg-slate-900 text-white p-3">
                  <CiSearch className="text-2xl" />
                </button>
              </form>
            </div>

            <div className="icons flex items-center gap-5">
              <CiHeart className="text-3xl text-slate-700 cursor-pointer hover:text-red-500 transition duration-200" />
              <FaBoxOpen className="text-3xl text-slate-700 cursor-pointer hover:text-blue-500 transition duration-200" />
              <button
                type="button"
                onClick={showModal}
                className="bg-slate-700 text-white p-2 px-5 rounded-md hover:bg-slate-800 transition duration-200"
              >
                Kirish
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        width={400}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col items-center p-5">
          <input
            type="number"
            placeholder="+998"
            className="p-3 w-full border rounded-md outline-none text-gray-700 mt-5"
          />
          <button className="mt-5 p-3 w-full text-white font-semibold bg-slate-700 rounded-md hover:bg-slate-800 transition duration-200">
            Kirish
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
