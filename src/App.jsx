import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';

function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-neutral-600">
          <div>
            <h3 className="text-neutral-900 font-medium">About</h3>
            <p className="mt-2">Lullaby Boutique brings modern, gentle designs for babies — ethically made, incredibly soft, and timelessly cute.</p>
          </div>
          <div>
            <h3 className="text-neutral-900 font-medium">Support</h3>
            <ul className="mt-2 space-y-1">
              <li>Shipping & returns</li>
              <li>Size guide</li>
              <li>Care instructions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-neutral-900 font-medium">Join our newsletter</h3>
            <p className="mt-2">Get 10% off your first order and early access to new drops.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="you@example.com" className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300" />
              <button className="rounded-lg bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Lullaby Boutique. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
      </main>
      <Footer />
    </div>
  );
}
