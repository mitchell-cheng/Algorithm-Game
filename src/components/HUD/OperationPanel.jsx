import { Fragment } from "react";

export default function OperationPanel() {

  const replayGame = () => {
    window.location.reload(false);
  }

  return (
    <Fragment>
      <div className="absolute left-0 bg-black opacity-50 text-white p-1.5 top-0">
        <p className="m-1.5 text-xs tracking-tighter font-mono">
          <button onClick={replayGame}>Replay</button>
        </p>
      </div>

      <div className="absolute left-0 bg-black opacity-50 text-white p-1.5 bottom-0">
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;w a s d&quot; to move</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;k&quot; to swap camera</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;r&quot; to swap camera</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;arrow keys&quot; for flips</p>
      </div>
    </Fragment>
  );
}