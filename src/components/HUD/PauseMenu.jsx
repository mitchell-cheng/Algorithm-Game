import { Link } from "react-router-dom";

function PauseMenu({ onResume, onMainMenu, onExit, onReplay }) {
  return (
    <div className="bg-white/10 p-8 rounded-xl min-w-64 border-solid border-1 border-white flex flex-col justify-center items-center gap-4 backdrop-blur shadow">
      <h2 className="text-white mt-0 mr-0 mb-1 ml-0 text-center text-3xl">
        Game Paused
      </h2>
      <button onClick={onResume} style={buttonStyle} onMouseEnter={e => {
          e.target.style.backgroundColor = '#2d3748';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.target.style.backgroundColor = '#4a5568';
          e.target.style.transform = 'translateY(0)';
        }}>Resume Game</button>
      <button onClick={onMainMenu} style={buttonStyle} onMouseEnter={e => {
          e.target.style.backgroundColor = '#2d3748';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.target.style.backgroundColor = '#4a5568';
          e.target.style.transform = 'translateY(0)';
        }}>
          <Link to="/">
            Exit to Main Menu
          </Link>
        </button>
      <button onClick={onReplay} style={buttonStyle} onMouseEnter={e => {
          e.target.style.backgroundColor = '#2d3748';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.target.style.backgroundColor = '#4a5568';
          e.target.style.transform = 'translateY(0)';
        }}>Replay Game</button>
      <button onClick={onExit} style={buttonStyle} onMouseEnter={e => {
          e.target.style.backgroundColor = '#2d3748';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.target.style.backgroundColor = '#4a5568';
          e.target.style.transform = 'translateY(0)';
        }}>Exit Game</button>
    </div>
  );
}

const buttonStyle = {
  width: '20rem',
  height: '3rem', 
  padding: '0.8rem 1.5rem',
  backgroundColor: '#4a5568',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'all 0.2s ease-in-out',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
}

export default PauseMenu;