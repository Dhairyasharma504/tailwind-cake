import { filter, uniqBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import PriceCard from './elements/PriceCard';
import CategoryTabs from './product/CategoryTabs';

const data = [
  {
    name: 'chocolate',
    label: 'cake',
    image: '/images/choclate cake/pexels-ruslan-khmelevsky-8732812 (1).jpg',
    category: 'chocolate',
    type: 'veg',
  },
  {
    name: 'Dark-chocolate',
    label: 'cake',
    image: '/images/choclate cake/pexels-meryem-adak-11647298.jpg',
    category: 'chocolate',
    type: 'veg',
  },
  {
    name: 'chocolate-mud',
    label: 'cake',
    image: '/images/choclate cake/pexels-mathew-thomas-10661285.jpg',
    category: 'chocolate',
    type: 'nonVeg',
  },
  {
    name: 'chocolate-lava-cake',
    label: 'cake',
    image: '/images/choclate cake/black-chocolate-dark.jpg',
    category: 'chocolate',
    type: 'nonVeg',
  },
  {
    name: 'Velvet Cake',
    label: 'cake',
    image: '/images/valvet cake/raspberry-pink-velvet-cake-1574437052.jpg',
    category: 'Velvet Cake',
    type: 'nonVeg',
  },
  {
    name: 'Velvet Cake',
    label: 'cake',
    image: '/images/valvet cake/hummingbird-cake-1577124607.jpg',
    category: 'Velvet Cake',
    type: 'veg',
  },
  {
    name: 'chocolate-lava-cake',
    label: 'cake',
    image: '/images/valvet cake/pexels-photo-6211054.jpeg',
    category: 'Velvet Cake',
    type: 'nonVeg',
  },
  {
    name: 'Velvet-cake',
    label: 'cake',
    image: '/images/valvet cake/pexels-photo-5848119.jpeg',
    category: 'Velvet Cake',
    type: 'veg',
  },
  {
    name: 'Velvet-cake',
    label: 'cake',
    image: '/images/valvet cake/pexels-photo-140831.webp',
    category: 'Velvet Cake',
    type: 'nonVeg',
  },
  {
    name: 'fruit-cake',
    label: 'cake',
    image: '/images/fruit cake/pexels-photo-1352295.jpeg',
    category: 'fruit Cake',
    type: 'veg',
  },
  {
    name: 'fruit-cake',
    label: 'cake',
    image: '/images/fruit cake/pexels-photo-3913295.jpeg',
    category: 'fruit Cake',
    type: 'nonVeg',
  },
  {
    name: 'fruit-cake',
    label: 'cake',
    image: '/images/fruit cake/pexels-photo-7525168.webp',
    category: 'fruit Cake',
    type: 'veg',
  },
  {
    name: 'fruit-cake',
    label: 'cake',
    image: '/images/fruit cake/pexels-photo-7525189.webp',
    category: 'fruit Cake',
    type: 'veg',
  },
  {
    name: 'Velvet-cake',
    label: 'cake',
    image: '/images/valvet cake/pexels-photo-1027811.jpeg',
    category: 'Velvet Cake',
    type: 'nonVeg',
  },
];

function Products() {
  const categories = uniqBy(data, 'category');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [type, setType] = useState('all');
  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (type === 'all' && selectedCategory === 'all') {
      setProducts(data);
    } else if (type === 'all' && selectedCategory !== 'all') {
      const result = filter(data, { category: selectedCategory });
      setProducts(result);
    } else if (type !== 'all' && selectedCategory === 'all') {
      const result = filter(data, { type });
      setProducts(result);
    } else if (type !== 'all' && selectedCategory !== 'all') {
      const result = filter(data, { type, category: selectedCategory });
      setProducts(result);
    }
  }, [type, selectedCategory]);

  return (
    <div>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setType={setType}
        type={type}
      />

      <div className="grid md:grid-cols-3 grid-cols-1">
        {products.map((item) => (
          <PriceCard key={item.id} item={item} />
        ))}
      </div>
      {products && products.length === 0 && (
        <div className="text-white text-5xl text-center">No data available</div>
      )}
    </div>
  );
}

export default Products;
