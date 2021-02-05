import React from "react";
import { useCountRenders } from "../useCountRenders";

//memo --> compare the props. if props have changed it will re render.
export const Hello = React.memo(({increment}) => {
  // useCountRenders();
  
  return (
    <button onClick={() => increment(5)}>Hell</button>
  );
});