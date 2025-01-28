import React from 'react';

const Watches = () => {
  const watchData = [
    { id: 1, name: 'Tissot Supersports', price: 50000, description: 'Sporty and stylish', image: '/Tissot.jpg' },
    { id: 2, name: 'Omega', price: 8000, description: 'Sporty design', image: '/Omega.jpg' },
    { id: 3, name: 'Rolex', price: 12000, description: 'Luxury watch', image: '/Rolex.jpg' },
    { id: 4, name: 'Omega Master', price: 40000, description: 'Elegant timepiece', image: '/Omega Master.jpg' },
    { id: 5, name: 'Master Ultra', price: 45000, description: 'Luxury watch', image: '/Master Ultra.jpg' },
    { id: 6, name: 'Blancpain Villeret', price: 10000, description: 'Diamond Dial Gold Watch', image: '/Blancpain Villeret.jpg' },
    { id: 7, name: 'RADO', price: 7000, description: 'Bold and rugged', image: '/RADO.jpg' },
    { id: 8, name: 'La Hublot Classic ', price: 35000, description: 'Luxury watch', image: '/La Hublot Classic .jpg' },
    { id: 9, name: 'David Yarman', price: 5000, description: 'Luxury watch', image: '/David Yarman.jpg' },
  ];

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
            <img src={watch.image} alt={watch.name} />
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;