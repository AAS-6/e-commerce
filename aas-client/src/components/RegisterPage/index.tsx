import Image from "next/image";



function handleSubmit(e: any) {
  e.preventDefault();
  console.log("submit");
}

export default function RegisterPage() {
  return (
    <>
     <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col p-10 rounded-xl shadow-[0px_0px_25px_5px_rgba(0,0,0,0.1)]">
          <h1 className="text-4xl font-bold text-center pb-10">AAS E-Commerce</h1>
          <div className="flex">
            <div className="flex flex-col text-center justify-center items-center px-8 mr-16 ">
              <Image src="/favicon.ico" width={250} height={250} alt=""/>
              <h4 className="font-bold text-3xl pt-4 pb-1">Beli mudah hanya di AAS</h4>
              <p className="text-[15px] opacity-60">Gabung dan rasakan kemudahan bertransaksi di AAS</p>
            </div>
            <div className="text-center px-4 py-2 rounded-xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]">
                <h5 className="text-xl font-bold ">Daftar Sekarang</h5>
                <h6 className="text-[13px] pb-2">Sudah punya akun AAS? <a href="/login">Masuk</a></h6>
                <button className="flex justify-between  py-1 rounded-lg w-full shadow-[0px_5px_20px_3px_rgba(0,0,0,0.1)]">
                  <div className="flex-[0.3_0.3_0] ml-2 ">
                    <Image src="/favicon.ico" width={20} height={20} alt=""/>
                  </div>
                  <h5 className="text-[13px] ml-10 flex-1 text-start px-4 ">Google</h5>
                </button>
                <fieldset className="border-t border-slate-300">
                  <legend className="mx-auto px-4  text-[13px] py-3">atau daftar dengan</legend>
                </fieldset>
                <form className="flex flex-col">
                  <input type="text" placeholder="Email" className="border-2 rounded-lg mb-1 py-1 px-2"/>
                  <input type="text" placeholder="Password" className="border-2 rounded-lg mb-1 py-1 px-2"/>
                  <input type="text" placeholder="Konfirmasi Password" className="border-2 rounded-lg mb-1 py-1 px-2"/>
                  <button className="border-2 rounded-lg py-2 bg-slate-500 text-white" type="submit">Daftar</button>
                </form>
            </div>
          </div>

        </div>
     </div>
    </>
  );
}
