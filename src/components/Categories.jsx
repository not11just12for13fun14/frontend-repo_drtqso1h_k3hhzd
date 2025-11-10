const categories = [
  {
    slug: 'dresses',
    name: 'Dresses',
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1640&auto=format&fit=crop',
  },
  {
    slug: 'rompers',
    name: 'Rompers',
    image:
      'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=1640&auto=format&fit=crop',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1640&auto=format&fit=crop',
  },
  {
    slug: 'knitwear',
    name: 'Knitwear',
    image:
      'https://images.unsplash.com/photo-1571731956672-d3d2e2b1c3f0?q=80&w=1640&auto=format&fit=crop',
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
              Shop by category
            </h2>
            <p className="mt-2 text-neutral-600">
              Find the perfect style for every season and occasion.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-neutral-900">{c.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
