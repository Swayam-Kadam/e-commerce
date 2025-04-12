import React, { useState, useEffect } from 'react';

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartItems")) || [];
    setData(storedData);
  }, []);

  const handleRemove = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("cartItems", JSON.stringify(updatedData));
  };

  return (
    <div className="relative overflow-x-auto mt-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Color</th>
            <th className="px-6 py-3">Category</th>
            <th className="px-6 py-3">Price</th>
            <th className="px-10 py-3">Action</th>
            <th className="px-1 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">
                <img src={item.img} alt={item.title} className="h-14 w-14 object-cover rounded" />
              </td>
              <td className="px-6 py-4">{item.color}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">${item.price}</td>
              <td className="px-6 py-4"><button className='btn btn-danger' onClick={()=>handleRemove(item.id)}>Remove</button></td>
              <td className="px-6 py-4"><button className='btn btn-danger' onClick={()=>handleRemove(item.id)}>Add To Card</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
