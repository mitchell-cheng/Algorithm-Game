import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useHover } from '../custom-hooks/useHover';

function MenuButton({ children, onClick }) {
  const [nodeRef, isHovered] = useHover();

  return (
    <button
      ref={nodeRef}
      onClick={onClick}
      className={`px-4 py-8 text-lg ${isHovered ? 'bg-slate-500' : 'bg-slate-slate-600'}  border-solid border-2 ${isHovered ? 'border-black' : 'border-slate-950'} rounded-lg text-white cursor-pointer transition-all delay-100 ease-linear uppercase font-bold tracking-normal w-full ${isHovered ? 'shadow-lg' : 'none'} ${isHovered ? '-translate-y-2' : 'translate-y-0'}`}
    >
      {children}
    </button>
  );
}

function HomePage({ onStartGame }) {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-slate-600 to-slate-800 flex flex-col items-center justify-center gap-8 text-white font-serif">
      <div className="absolute text-center top-0 m-4">
        <h1 className="text-6xl mb-8 uppercase tracking-normal shadow-slate-900">
          Algorithm Game
        </h1>
      </div>

      <div className="flex flex-col gap-4 min-w-72">
        <MenuButton onClick={onStartGame}>
          <Link to="/play">Play</Link>
        </MenuButton>
        <MenuButton onClick={() => console.log('Settings clicked')}>
          Setting
        </MenuButton>
        <MenuButton onClick={() => console.log('Leaderboard clicked')}>
          Leaderboard
        </MenuButton>
        <MenuButton onClick={() => window.close()}>Exit Game</MenuButton>
      </div>

      <div className="absolute bottom-5 text-sm opacity-70">
        By Mitchell Cheng
      </div>
    </div>
  );
}

export default HomePage;
