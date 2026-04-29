import Link from "next/link";
import { Leaf, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl mr-1">🌳</span>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-green-400 transition-all">
                Adrian Landscaping
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium landscaping and hardscaping services. We bring warmth and elegance to your outdoor living spaces with expert craftsmanship and attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-gray-400 hover:text-green-500 transition-colors text-sm">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-green-600 shrink-0" />
                <a href="tel:480-363-6207" className="hover:text-green-500 transition-colors">(480) 363-6207</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-green-600 shrink-0" />
                <a href="mailto:info@adrianlandscape.com" className="hover:text-green-500 transition-colors">info@adrianlandscape.com</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-green-600 shrink-0" />
                <span>Serving the local Metro & Surrounding Areas</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-semibold mb-6">Business Hours</h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-400 text-sm">
                <span>Monday - Friday</span>
                <span>7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400 text-sm">
                <span>Saturday</span>
                <span>8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400 text-sm">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Adrian Landscape. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-green-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
