```tsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useStore from '@/store/useStore';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal } = useStore();
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const handleCheckout = () => {
    if (!selectedPayment) {
      toast.error('Please select a payment method');
      return;
    }
    toast.success('Order placed successfully!');
    // Here you would typically integrate with a payment gateway
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some items to your cart to get started!</p>
          <Button onClick={() => window.location.href = '/sarees'}>
            Continue Shopping
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {item.fabric} • {item.color}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="font-semibold">₹{item.price * item.quantity}</div>
                            <div className="text-sm text-gray-500 line-through">
                              ₹{item.originalPrice * item.quantity}
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="text-red-500 hover:text-red-700"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{getCartTotal()}</span>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">Payment Method</h3>
                    <div className="space-y-2">
                      {[
                        { id: 'cod', label: 'Cash on Delivery' },
                        { id: 'card', label: 'Credit/Debit Card' },
                        { id: 'upi', label: 'UPI' },
                        { id: 'netbanking', label: 'Net Banking' }
                      ].map((method) => (
                        <div
                          key={method.id}
                          className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                            selectedPayment === method.id 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'hover:border-gray-400'
                          }`}
                          onClick={() => setSelectedPayment(method.id)}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 rounded-full border-2 ${
                              selectedPayment === method.id 
                                ? 'border-blue-500 bg-blue-500' 
                                : 'border-gray-400'
                            }`} />
                            <span>{method.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full"
                    onClick={handleCheckout}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Proceed to Payment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
```