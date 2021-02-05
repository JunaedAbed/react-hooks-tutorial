import React from "react";
import { useCountRenders } from "../useCountRenders";

//memo --> compare the props. if props have changed it will re render.
export const Square = React.memo(({increment, n}) => {
  useCountRenders();
  
  return (
    <button onClick={() => increment(n)}>{n}</button>
  );
});