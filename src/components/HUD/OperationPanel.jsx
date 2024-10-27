import { Fragment } from "react";

export default function OperationPanel() {

  return (
    <Fragment>
      <div className="absolute left-0 bg-black opacity-50 text-white p-1.5 bottom-0">
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;w a s d&quot; to move</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;k&quot; to swap camera</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;r&quot; to swap camera</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;arrow keys&quot; for flips</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;k&quot; to switch between 1rd and 3rd</p>
        <p className="m-1.5 text-xs tracking-tighter font-mono">Press &quot;Esckeys&quot; to menu</p>
      </div>
    </Fragment>
  );
}