
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "AI Smart Watch Pro",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Neural Headphones",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 89,
    badge: "New"
  },
  {
    id: 3,
    name: "Smart Home Hub",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 156,
    badge: "Sale"
  },
  {
    id: 4,
    name: "AI Fitness Tracker",
    price: 89,
    originalPrice: 129,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    reviews: 203,
    badge: "Popular"
  }
];

const ProductHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Products</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our AI-curated selection of premium products designed for the modern lifestyle
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card key={product.id} className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-2xl overflow-hidden animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      product.badge === 'Best Seller' ? 'bg-blue-100 text-blue-700' :
                      product.badge === 'New' ? 'bg-green-100 text-green-700' :
                      product.badge === 'Sale' ? 'bg-red-100 text-red-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Wishlist */}
                  <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  
                  {/* Quick Add */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-50">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
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
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="text-sm text-green-600 font-medium">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% off
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 py-4 rounded-xl border-2 hover:bg-blue-50 hover:border-blue-300">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
