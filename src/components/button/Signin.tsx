import { toggleLoginOverlay } from "@/store/ui-slice";
import { useDispatch } from "react-redux";

export default function Signin() {
  const dispatch = useDispatch();

  const signinHandler = () => {
    dispatch(toggleLoginOverlay());
  };

  return (
    <button
      onClick={signinHandler}
      className='border-[#5F72FF] text-[#5F72FF] py-2 px-5 rounded-lg border-2 font-medium'
    >
      Sign in
    </button>
  );
}
