import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart, Filter, SortAsc } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useStore from '@/store/useStore';

const sareeProducts = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 2499,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 156,
    badge: "Best Seller",
    fabric: "Pure Silk",
    occasion: "Wedding",
    color: "Royal Blue"
  },
  // ... rest of the products array stays the same
];

const Sarees = () => {
  const { addToCart, addToWishlist, isInWishlist, isInCart } = useStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Saree
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Collection</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our exquisite collection of traditional and contemporary sarees for every occasion
            </p>
          </div>
          
          {/* Filter and Sort Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <SortAsc className="h-4 w-4" />
                <span>Sort by Price</span>
              </Button>
            </div>
            <div className="text-gray-600">
              Showing {sareeProducts.length} products
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sareeProducts.map((product, index) => (
              <Card key={product.id} className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl overflow-hidden animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.badge === 'Best Seller' ? 'bg-blue-100 text-blue-700' :
                        product.badge === 'Premium' ? 'bg-purple-100 text-purple-700' :
                        product.badge === 'New Arrival' ? 'bg-green-100 text-green-700' :
                        product.badge === 'Trending' ? 'bg-orange-100 text-orange-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                    
                    {/* Wishlist */}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={`absolute top-3 right-3 bg-white/80 hover:bg-white ${isInWishlist(product.id) ? 'text-red-500' : ''}`}
                      onClick={() => addToWishlist(product)}
                    >
                      <Heart className="h-4 w-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} />
                    </Button>
                    
                    {/* Quick Add */}
                    <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        className={`w-full ${isInCart(product.id) ? 'bg-green-600 hover:bg-green-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Product Details */}
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Fabric:</span>
                        <span className="font-medium">{product.fabric}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Occasion:</span>
                        <span className="font-medium">{product.occasion}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Color:</span>
                        <span className="font-medium">{product.color}</span>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                      <span className="text-sm text-green-600 font-medium">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                      </span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="space-y-2">
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => addToCart(product)}
                      >
                        Buy Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className={`w-full ${isInWishlist(product.id) ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
                        onClick={() => addToWishlist(product)}
                      >
                        {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Sarees;