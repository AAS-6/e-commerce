import Register from "./Register";
import Signin from "./Signin";

export default function NavbarButton() {
  return (
    <div className='flex items-center gap-x-6 border-slate-300 border-l-2 pl-6'>
      <Signin />
      <Register />
    </div>
  );
}
