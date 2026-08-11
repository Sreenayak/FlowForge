export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="bg-gray-950 px-6 py-24 text-white sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Build Together
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Bring the entire
          <br />
          product lifecycle together.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
          Give your team one connected workspace for planning, building,
          collaborating, documenting, reviewing, and delivering products.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-gray-950 transition hover:bg-gray-200 sm:w-auto"
          >
            Get started
          </button>

          <button
            type="button"
            className="flex h-12 w-full items-center justify-center rounded-xl border border-gray-700 px-6 text-sm font-semibold text-white transition hover:border-gray-500 hover:bg-gray-900 sm:w-auto"
          >
            Explore platform
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-600">
          One workspace. One source of truth. One product lifecycle.
        </p>
      </div>
    </section>
  );
}