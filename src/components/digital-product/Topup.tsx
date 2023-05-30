import { useState } from "react";

export default function Topup() {
  const menu = useState<"Pulsa" | "Paket Data" | "Flight" | "Listrik PLN">(
    "Pulsa"
  );

  return (
    <div className='basis-1/2 mx-3'>
      <h2 className='font-semibold text-lg'>Top Up & Tagihan</h2>
      <div className='flex flex-col'>
        <div className='basis-1/5'>
          
        </div>
      </div>
    </div>
  );
}
