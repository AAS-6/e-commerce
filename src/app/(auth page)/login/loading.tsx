import { CSSProperties } from "react";
import { SyncLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loading() {
  return (
    <main className='flex h-screen w-screen justify-center items-center'>
      <SyncLoader
        color='#5F72FF'
        loading={true}
        cssOverride={override}
        size={10}
        speedMultiplier={1.1}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </main>
  );
}
