const products = [
  {
    id: 1,
    name: 'Cloud Soft Tulle Dress',
    price: 49,
    color: 'Blush Pink',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1640&auto=format&fit=crop',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Little Star Headband Set',
    price: 19,
    color: 'Champagne',
    image:
      'https://images.unsplash.com/photo-1556228453-efd1c249d4b6?q=80&w=1640&auto=format&fit=crop',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Organic Cotton Romper',
    price: 35,
    color: 'Oat',
    image:
      'https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?q=80&w=1640&auto=format&fit=crop',
    tag: 'Limited',
  },
  {
    id: 4,
    name: 'Pearl Button Cardigan',
    price: 39,
    color: 'Ivory',
    image:
      'https://images.unsplash.com/photo-1520975922224-c6da83a6ffed?q=80&w=1640&auto=format&fit=crop',
    tag: 'Cozy',
  },
];

function ProductCard({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-medium text-neutral-900">{product.name}</h3>
            <p className="text-sm text-neutral-500">{product.color}</p>
          </div>
          <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-medium text-rose-700 ring-1 ring-rose-200">
            {product.tag}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold">${product.price}</p>
          <button className="rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium hover:bg-neutral-50">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-16 sm:py-20 bg-gradient-to-b from-white to-rose-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              Featured pieces
            </h2>
            <p className="mt-2 text-neutral-600">
              Curated favorites for special moments and everyday magic.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-neutral-900 underline-offset-4 hover:underline">
            View all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
