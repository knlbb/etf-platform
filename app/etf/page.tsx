
export default function Etf() {
  return (
    <div>
      <div className="flex gap-5">

        <div className="w-1/6 h-[20vh] bg-white rounded-2xl relative overflow-hidden flex ">
            <div className="absolute w-full h-full justify-center items-center flex">
              <h1 className="text-black text-2xl font-bold">Deposit</h1>
            </div>

            {/* <img src="https://t4.ftcdn.net/jpg/02/98/74/51/360_F_298745154_1PB10DTNfxNVorskCS6Q3tkm0QBauEkl.jpg" alt="" className="h-full w-full pointer-events-none"/> */}
        </div>
        <div className="w-2/3 h-[20vh] bg-white rounded-2xl relative overflow-hidden flex ">
            <div className="absolute w-full h-full z-1 justify-center items-center flex">
              <h1 className="text-white text-3xl font-bold">$50,000</h1>
            </div>
            <div className="bg-white w-full ">
              <img src="https://t4.ftcdn.net/jpg/02/98/74/51/360_F_298745154_1PB10DTNfxNVorskCS6Q3tkm0QBauEkl.jpg" alt="" className="h-full w-full pointer-events-none"/>
            </div>
        </div>
        <div className="w-1/6 h-[20vh] bg-white rounded-2xl relative overflow-hidden flex ">
            <div className="absolute w-full h-full justify-center items-center flex">
              <h1 className="text-black text-2xl font-bold">Withdraw</h1>
            </div>

            {/* <img src="https://t4.ftcdn.net/jpg/02/98/74/51/360_F_298745154_1PB10DTNfxNVorskCS6Q3tkm0QBauEkl.jpg" alt="" className="h-full w-full pointer-events-none"/> */}
        </div>
      </div>

<div className="flex gap-5">

      <div className="w-2/3 h-[60vh] bg-black rounded-2xl relative mt-5 overflow-hidden flex ">
          <div className=" w-full h-full p-5 flex">
            <h1 className="text-white text-2xl font-bold">graph here of money growth</h1>
          </div>

          {/* <img src="https://t4.ftcdn.net/jpg/02/98/74/51/360_F_298745154_1PB10DTNfxNVorskCS6Q3tkm0QBauEkl.jpg" alt="" className="h-full pointer-events-none"/> */}
      </div>
      <div className="w-1/3 h-[60vh] bg-black rounded-2xl relative mt-5 overflow-hidden flex ">
          <div className=" w-full h-full p-5 flex">
            <h1 className="text-white text-2xl font-bold">Percentage of the coins here</h1>
          </div>

          {/* <img src="https://t4.ftcdn.net/jpg/02/98/74/51/360_F_298745154_1PB10DTNfxNVorskCS6Q3tkm0QBauEkl.jpg" alt="" className="h-full pointer-events-none"/> */}
      </div>
</div>
    </div>
  );
}

