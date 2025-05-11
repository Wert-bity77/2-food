import { useState } from 'react';
import { ShoppingCart, User, Menu, Search } from 'lucide-react';

export default function FoodiDeliveryApp() {
  const [activeTab, setActiveTab] = useState('home');

  const popularCategories = [
    { name: "Pizza", icon: "🍕", color: "bg-amber-100" },
    { name: "Salad", icon: "🥗", color: "bg-green-100" },
    { name: "Burger", icon: "🍔", color: "bg-orange-100" },
    { name: "Sushi", icon: "🍣", color: "bg-blue-100" }
  ];

  const featuredDishes = [
    {
      name: "Vegetable salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 12.99,
      rating: 4.8,
      time: "30 min"
    },
    {
      name: "Pasta with sauce",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 14.99,
      rating: 4.5,
      time: "25 min"
    },
    {
      name: "Rice with curry",
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      price: 15.99,
      rating: 4.7,
      time: "35 min"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Navigation Bar */}
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-green-500">Foodi</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className={`${activeTab === 'home' ? 'text-green-500 font-medium' : 'text-gray-600'}`}>Home</a>
            <a href="#" className={`${activeTab === 'menu' ? 'text-green-500 font-medium' : 'text-gray-600'}`}>Menu</a>
            <a href="#" className={`${activeTab === 'about' ? 'text-green-500 font-medium' : 'text-gray-600'}`}>About</a>
            <a href="#" className={`${activeTab === 'contact' ? 'text-green-500 font-medium' : 'text-gray-600'}`}>Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100">
              <Search size={20} />
            </button>
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100">
              <ShoppingCart size={20} />
            </button>
            <button className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
              Sign Up
            </button>
            <button className="md:hidden text-gray-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dive Into Delights<br />
                Of <span className="text-green-500">Delectable Food</span>
              </h1>
              <p className="text-gray-600 mb-8 max-w-lg">
                Where every flavor tells a story. Fresh ingredients, authentic recipes, and passionate cooking bring you the best dining experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium">
                  Order Now
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium">
                  Watch Video
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-green-500 rounded-full w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://i.ibb.co/fdCVjYSQ/274fbc24c74d318156023a0fe71cf0dab4009ace.png" 
                    alt="Food delivery person" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Categories */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {popularCategories.map((category, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`${category.color} w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-2`}>
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Dishes */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Standard Dishes<br />From Our Menu</h2>
            <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center text-green-500">
              →
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                    ♡
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{dish.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-500 text-sm">⭐ {dish.rating}</span>
                    <span className="text-gray-500 text-sm">⏱️ {dish.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">${dish.price}</span>
                    <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden bg-white border-4 border-white shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=677&q=80" 
                    alt="Chef" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">What Our Customers<br />Say About Us</h2>
                <p className="text-gray-600 mb-6">
                  Our customers love our food and service! We take pride in delivering quality meals and exceptional dining experiences every time.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="italic text-gray-600 mb-4">
                    "The food is amazing, fresh and delicious. Delivery is always on time and the staff is very friendly. I highly recommend Foodi to everyone!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                        alt="Customer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">John Smith</h4>
                      <div className="flex text-yellow-400">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Foodi</h3>
              <p className="text-gray-400">
                Delicious food delivered to your doorstep
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Safety Center</li>
                <li>Community Guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Subscribe</h4>
              <div className="flex mb-4">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none"
                />
                <button className="bg-green-500 text-white px-4 rounded-r-lg">
                  →
                </button>
              </div>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Foodi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}