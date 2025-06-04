import { create } from 'zustand';
import { toast } from 'sonner';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  fabric: string;
  occasion: string;
  color: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  isInCart: (productId: number) => boolean;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],

  addToCart: (product) => {
    const { cart } = get();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      set({
        cart: cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
    toast.success('Added to cart');
  },

  removeFromCart: (productId) => {
    set({ cart: get().cart.filter(item => item.id !== productId) });
    toast.success('Removed from cart');
  },

  updateCartQuantity: (productId, quantity) => {
    if (quantity < 1) {
      get().removeFromCart(productId);
      return;
    }
    set({
      cart: get().cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ),
    });
  },

  addToWishlist: (product) => {
    const { wishlist } = get();
    const isInWishlist = wishlist.some(item => item.id === product.id);

    if (!isInWishlist) {
      set({ wishlist: [...wishlist, product] });
      toast.success('Added to wishlist');
    } else {
      get().removeFromWishlist(product.id);
    }
  },

  removeFromWishlist: (productId) => {
    set({ wishlist: get().wishlist.filter(item => item.id !== productId) });
    toast.success('Removed from wishlist');
  },

  isInWishlist: (productId) => {
    return get().wishlist.some(item => item.id === productId);
  },

  isInCart: (productId) => {
    return get().cart.some(item => item.id === productId);
  },

  getCartTotal: () => {
    return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartItemCount: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useStore;