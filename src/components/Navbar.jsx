import { useState } from 'react';
import { ShoppingCart, User, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-pink-400 via-rose-400 to-fuchsia-500" />
            <span className="text-xl font-semibold tracking-tight text-neutral-900">
              Lullaby Boutique
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <li className="hover:text-neutral-900 transition-colors cursor-pointer">New Arrivals</li>
            <li className="hover:text-neutral-900 transition-colors cursor-pointer">Dresses</li>
            <li className="hover:text-neutral-900 transition-colors cursor-pointer">Accessories</li>
            <li className="hover:text-neutral-900 transition-colors cursor-pointer">Sale</li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <button className="relative inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 hover:bg-neutral-50">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full bg-rose-500 text-white text-xs h-5 min-w-[1.25rem] px-1">2</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 hover:bg-neutral-50">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-neutral-200 p-2 hover:bg-neutral-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-neutral-200">
            <ul className="grid gap-2">
              {['New Arrivals', 'Dresses', 'Accessories', 'Sale'].map((item) => (
                <li key={item} className="">
                  <button className="w-full text-left px-2 py-2 rounded-md hover:bg-neutral-50 text-neutral-700">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center gap-3">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 hover:bg-neutral-50">
                <ShoppingCart className="h-5 w-5" /> Cart
              </button>
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 hover:bg-neutral-50">
                <User className="h-5 w-5" /> Account
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
