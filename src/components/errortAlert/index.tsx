/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TranslateAnimateX } from "../translation";

interface Props {
  message: string | any;
  onDismiss?: () => void;
}
export default function ErrorAlert({ message, onDismiss }: Props) {
  if (!message) return null;
  return (
    <TranslateAnimateX>
      <div className="text-[#6e6446]  bg-[#fcedbe]  p-3 pr-6 py-4 flex items-center justify-between gap-4 rounded-xs relative">
        <p className="font-body flex-1 font-normal  text-sm leading-4 text-grey">
          {message}
        </p>
      </div>
    </TranslateAnimateX>
  );
}
