import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex bg-[#f7faff] flex-col lg:mr-96  min-h-screen">
      {children}
    </div>
  );
}