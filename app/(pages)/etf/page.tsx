
export default function Etf() {
  return (
    <div>
      <div className="w-full h-[20vh] bg-white rounded-2xl justify-center relative overflow-hidden flex ">
        <div className="w-full h-full px-5 flex absolute justify-center items-center">
          <button className=" w-1/6 h-[70%] rounded-2xl z-1 bg-[#ffffff28] hover:bg-[#ffffff57]  left-5 justify-center items-center flex">
            <h1 className="text-white lg:text-md md:text-sm text-xs ">Deposit</h1>
          </button>
          <div className=" w-2/3 h-full z-1 justify-center items-center flex">
            <h1 className="text-white text-3xl font-bold">$50,000</h1>
          </div>
          <button className=" w-1/6 h-[70%] rounded-2xl bg-[#ffffff28] hover:bg-[#ffffff57]  z-1 right-5 justify-center items-center flex">
            <h1 className="text-white lg:text-md md:text-sm text-xs">Withdraw</h1>
          </button>
        </div>
          <div className="bg-white w-full ">
            <img src="https://img.freepik.com/premium-photo/black-grainy-gradient-background-abstract-golden-blurred-wave-dark-noise-texture-copy-space_284753-2399.jpg" alt="" className="h-full w-full pointer-events-none"/>
          </div>
      </div>

      <div className="flex gap-5">
            <div className="w-2/3 h-[60vh] bg-black rounded-2xl relative mt-5 overflow-hidden flex ">
                <div className=" w-full h-full p-5 flex">
                  <h1 className="text-white text-2xl font-bold">graph here of money growth</h1>
                </div>
            </div>
            <div className="w-1/3 h-[60vh] bg-black rounded-2xl relative mt-5 overflow-hidden flex ">
                <div className=" w-full h-full p-5 flex">
                  <h1 className="text-white text-2xl font-bold">Percentage of the coins here</h1>
                </div>
            </div>
      </div>
    </div>
  );
}

