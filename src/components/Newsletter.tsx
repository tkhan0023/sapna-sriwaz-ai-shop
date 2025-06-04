
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with AI Insights
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 50,000+ subscribers and get exclusive access to new products, AI recommendations, and special offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-100 focus:bg-white/20"
            />
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
              Subscribe
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-blue-100">
            <Gift className="h-5 w-5" />
            <span className="text-sm">Get 10% off your first order when you subscribe</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
