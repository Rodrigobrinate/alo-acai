import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-purple-800 pt-8">
      <div className="flex w-full  justify-around  ">
        <img className="rounded-md w-20" src="./logo.jpg" alt="" />
        <div className="flex justify-center w-2/12 self-center">
          <a href="/about">Sobre</a>
          <a href="https://linktr.ee/delivery_alo" className="ml-4">Peça já</a>
        </div>

        <div></div>
      </div>

      <div>
        <div className="rounded-full w-4/12 h-4/12 bg-cyan-500 mx-auto mt-4">
          <div className="w-48 h-20 md:h-28 bg-white absolute rounded-md -ml-28 flex px-6 py-4">
            <div>
              <h1 className="text-purple-800 font-bold ">Barca</h1>
              <p className="text-gray-400 text-xs md:text-sm line-through">R$ 60,00</p>
              <p className="text-green-600 text-xs md:text-sm">R$ 40,00</p>
            </div>
            <img
              className="max-w-20 w-10 max-h-16 my-auto ml-2"
              src="barca.png"
              alt=""
            />
          </div>

          <div className="w-48 h-20 md:h-28 bg-white absolute rounded-md -ml-28 flex px-6 py-4 mt-40">
            <div>
              <h1 className="text-purple-800 font-bold">Shake</h1>
              <p className="text-gray-400 text-xs md:text-sm line-through">R$ 28,00</p>
              <p className="text-green-600 text-xs md:text-sm">R$ 18,00</p>
            </div>
            <img
              className="max-w-20 max-h-16 my-auto ml-2"
              src="shake.png"
              alt=""
            />
          </div>

          <div style={{marginLeft: "25%"}} className="w-52 h-32  absolute rounded-md  flex px-6 py-4 mt-20">
            <div>
              <h1 className="text-white-800 text-5xl font-bold  ">AÇAÍ</h1>
            </div>
          </div>
          <div style={{marginLeft: "25%"}} className="w-52 h-32  absolute rounded-md  flex px-6 py-4 mt-40">
            <div>
              <h1 className="text-white-800 text-2xl   ">O melhor açaí da região</h1>
            </div>
          </div>
          <img className="mx-auto w-4/12" src="fruts.png" alt="" />
          <img className="mx-auto w-8/12 -mt-10" src="main.png" alt="" />

          
        </div>
      </div>
    </main>
  );
}
