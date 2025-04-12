import React,{useState} from 'react'
import RightSide from './RightSide'
import Product from '../Home/Products.json'

const LeftSide = () => {
  const [filteredProducts, setFilteredProducts] = useState(Product);
    // const color=[`All (${Product.length})`,`black(${Product.filter((item)=>item.color==='black').length})`,`brown(${Product.filter((item)=>item.color==='brown').length})`,`gold(${Product.filter((item)=>item.color==='gold').length})`,`grey(${Product.filter((item)=>item.color==='grey').length})`,`rose(${Product.filter((item)=>item.color==='rose').length})`,`white(${Product.filter((item)=>item.color==='white').length})`]
    
    const colors = [
      { label: `All (${Product.length})`, value: 'all' },
      { label: `black (${Product.filter((item) => item.color === 'black').length})`, value: 'black' },
      { label: `brown (${Product.filter((item) => item.color === 'brown').length})`, value: 'brown' },
      { label: `gold (${Product.filter((item) => item.color === 'gold').length})`, value: 'gold' },
      { label: `grey (${Product.filter((item) => item.color === 'grey').length})`, value: 'grey' },
      { label: `rose (${Product.filter((item) => item.color === 'rose').length})`, value: 'rose' },
      { label: `white (${Product.filter((item) => item.color === 'white').length})`, value: 'white' },
  ];
    
    const material=['Allp (12)','Chrome (2)','Concrete (3)','Glass (2)','Metal (1)','Steel (2)','Wood (2)']

    const handleColorClick = (color) => {
      if (color === 'all') {
          setFilteredProducts(Product);
      } else {
          setFilteredProducts(Product.filter((item) => item.color === color));
      }
  };

  return (
    <div className='flex mb-4  justify-center'>
    {/* Left Side - Links */}
    <div className='w-1/4 p-4 hidden md:block'>
        <ul>
        <li className='font-bold text-md'>COLOR</li>
        </ul>
        <ul>
        {colors.map((item)=>(
            <li
            key={item.value}
            className='mt-1 cursor-pointer text-gray-500 hover:text-black'
            onClick={() => handleColorClick(item.value)}
        >
            {item.label}
        </li>
        ))}
        </ul>

        <ul className='mt-5'>
        <li className='font-bold text-md'>MATERIAL</li>
        </ul>
        <ul>
        {material.map((item)=>(
            <li key={item} className='mt-1 cursor-pointer  text-gray-500 hover:text-black'>{item}</li>
        ))}
        </ul>

    </div>

    {/* Right Side - Content */}
    <div className='w-3/4 p-4'>
      <RightSide items={filteredProducts}/>
    </div>

  </div>
  )
}

export default LeftSide