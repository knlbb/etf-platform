import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="pt-2 px-12 space-y-2 bg-[#f7faff] flex-grow pb-4">
      {children}
    </div>
  );
}