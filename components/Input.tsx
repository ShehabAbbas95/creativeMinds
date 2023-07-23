import { ComponentProps, forwardRef } from "react";

const formClasses =
  "block w-full appearance-none rounded-md border border-gray-200 px-3 py-2 text-gray-900 placeholder-gray-400 sm:text-sm";
const enabled =
  "focus:border-blue-400 bg-white focus:outline-none focus:ring-blue-400";
const disabled =
  "focus:outline-none focus:ring-current  border-hidden bg-transparent px-0 font-semibold";

export type Props = ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, Props>(({ id, className }, ref) => {
  return <input id={id} ref={ref} className={className} />;
});

export default Input;
