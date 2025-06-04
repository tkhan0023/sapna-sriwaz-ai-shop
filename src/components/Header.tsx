```tsx
import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import useStore from '@/store/useStore';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const cartItemCount = useStore(state => state.getCartItemCount());
  const navigate = useNavigate();
  
  const productCategories = [
    {
      name: "Sarees",
      description: "Traditional and modern sarees",
      href: "/sarees"
    },
    {
      name: "Kurtis",
      description: "Elegant kurtis and tops",
      href: "#kurtis"
    },
    {
      name: "Lehengas",
      description: "Designer lehengas for special occasions",
      href: "#lehengas"
    },
    {
      name: "Suits",
      description: "Salwar suits and dress materials",
      href: "#suits"
    },
    {
      name: "Accessories",
      description: "Jewelry and fashion accessories",
      href: "#accessories"
    },
    {
      name: "Fabrics",
      description: "Premium fabrics and materials",
      href: "#fabrics"
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sapna Sriwaz
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white">
                      <div className="grid grid-cols-2 gap-4">
                        {productCategories.map((category) => (
                          <a
                            key={category.name}
                            href={category.href}
                            className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {category.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {category.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => navigate('/cart')}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
```