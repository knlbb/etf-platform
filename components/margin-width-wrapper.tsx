import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex bg-[#f7faff] flex-col md:mr-[20%]  min-h-screen">
      {children}
    </div>
  );
}