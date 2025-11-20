'use client';

import Experience from '@/components/3d/Experience';
import { useConfigurator } from '@/store/useConfigurator';

export default function Home() {
  const { setColor } = useConfigurator();

  return (
    <main className="flex h-screen flex-col">
      {/* Zone 3D */}
      <div className="relative flex-1">
        <Experience />
        
        {/* Interface UI superposée simple pour tester */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-xl shadow-xl flex gap-4">
          <button 
            onClick={() => setColor('#ef4444')} 
            className="w-8 h-8 rounded-full bg-red-500 border-2 border-white shadow-sm hover:scale-110 transition"
          />
          <button 
            onClick={() => setColor('#3b82f6')} 
            className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white shadow-sm hover:scale-110 transition"
          />
          <button 
            onClick={() => setColor('#22c55e')} 
            className="w-8 h-8 rounded-full bg-green-500 border-2 border-white shadow-sm hover:scale-110 transition"
          />
        </div>
      </div>
    </main>
  );
}
