import { useState, useEffect } from 'react';
import { Suspense, lazy } from 'react';

import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon"

import OperationPanel from './HUD/OperationPanel';

const LazyPauseMenu = lazy(() => import('./HUD/PauseMenu'));

export default function App() {
  const [isPaused, setIsPaused] = useState(false);

  const handleMainMenu = () => {
    window.location.href = '/';
  }

  const handleExit = () => {
    window.open('', '_self');
    window.close();
  }

  const handleResume = () => {
    setIsPaused(false);
  }

  const handleReplay = () => {
    window.location.reload(false);
  }
  
  useEffect(() => {
    const handleEscKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsPaused(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleEscKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscKeyDown);
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative w-full h-screen">
        <div className="w-full h-full"
        style={{
          filter: isPaused ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease-in-out',
        }}>
          <Canvas frameloop="demand">
            {!isPaused && (
              <Physics
                broadphase="SAP"
                gravity={[0, -2.6, 0]}
              >
                <Scene />
              </Physics>
            )}
          </Canvas>
          <OperationPanel />
        </div>

        {isPaused && (
          <div className='absolute top-0 left-0 w-full h-full bg-black/30 flex justify-center items-center z-1000 backdrop-blur'>
            <LazyPauseMenu
              onResume={handleResume}
              onMainMenu={handleMainMenu}
              onExit={handleExit}
              onReplay={handleReplay}
            />
          </div>
        )}
      </div>
    </Suspense>
  );
}