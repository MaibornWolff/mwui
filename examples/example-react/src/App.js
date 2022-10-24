function App() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-br from-background-dark to-background-dark/90">
        <div className="container mx-auto pt-xl">
          <h2 className="text-neutral-white font-semibold text-lg mb-s">Gradients</h2>
          <small className="bg-code p-xs rounded-md">
            <code>bg-gradient-to-r from-magenta-500 to-green-500 via-blue-500</code>
          </small>
          <div className="mt-m w-full rounded-md h-m bg-gradient-to-r from-magenta-500 to-green-500 via-blue-500"></div>
          <div className="mt-xl">
            <h2 className="text-neutral-white font-semibold text-lg mb-s">Flexbox</h2>
            <small className="bg-code p-xs rounded-md">
              <code>flex flex-wrap gap-m</code>
            </small>
            <div className="mt-l flex flex-wrap gap-m">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                <div className=" text-neutral-white w-xl h-xl text-center hover:text-background-dark hover:cursor-pointer bg-background-dark hover:bg-magenta-500 rounded-full border border-neutral-white/25"></div>
              ))}
            </div>
          </div>
          <div className="mt-xl">
            <h2 className="text-neutral-white font-semibold text-lg mb-s">Spacings</h2>
            <div className="flex flex-wrap gap-xxl">
              <div>
                <div className="mb-l border border-code/50 pl-xl bg-background-dark w-fit rounded-md">
                  <div className="p-xs bg-code/25 text-neutral-white">pl-xl</div>
                </div>
                <div className="mb-l border border-code/50 pt-l pr-xl bg-background-dark w-fit rounded-md">
                  <div className="p-xs rounded-tr-md bg-code/25 text-neutral-white">pt-l pr-xl</div>
                </div>
              </div>
              <h1 className="text-neutral-white/5 hover:text-neutral-white/50 font-semibold text-8xl tracking-tighter">tlm-tailwind</h1>
            </div>
          </div>
          <div className="mt-xl">
            <h2 className="text-neutral-white font-semibold text-lg mb-s">Button</h2>
            <div className="flex flex-wrap gap-l">
              <button className="bg-transparent hover:bg-neutral-white/50 border border-neutral-white text-neutral-white font-semibold px-s py-xs rounded-md">
                Button Outlined
              </button>
              <button className=" bg-magenta-500 hover:bg-magenta-400 active:bg-magenta-600 hover:border-magenta-400 active:border-magenta-600  border border-magenta-500 text-magenta-100 font-semibold px-s py-xs rounded-md">
                Button Filled
              </button>
            </div>
          </div>

          <div className="mt-xl">
            <h2 className="text-neutral-white font-semibold text-lg mb-s">Card</h2>

            <div className="flex gap-xl">
              {[1, 2, 3].map(() => (
                <div className="group shadow-md rounded-md bg-neutral-white p-l">
                  <h3 className="text-xl font-semibold">title</h3>
                  <p className="text-md mt-l mb-s">lorem ipsum dolor sit amet</p>
                  <div className="flex justify-end">
                    <button className="bg-transparent border border-neutral-white hover:bg-magenta-100 hover:text-neutral-white group-hover:border-magenta-600 group-active:bg-magenta-100 group-hover:text-magenta-500 text-background-dark font-semibold px-s py-xs rounded-md">
                      Button
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
