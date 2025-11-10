import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2i3rXHrL28W2aFSa/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[72vh] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-rose-700 ring-1 ring-rose-200 text-sm font-medium">
                New • Spring Collection 2025
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
                Baby dresses and accessories, made with love.
              </h1>
              <p className="mt-4 text-lg text-neutral-600">
                Discover ultra-soft fabrics, delicate details, and modern silhouettes for the little ones. Designed for comfort, crafted for memories.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#featured" className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800">
                  Shop Featured
                </a>
                <a href="#categories" className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-neutral-900 hover:bg-neutral-50">
                  Browse Categories
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
