import React, { useState } from "react";

const useInput = (init: string = "") => {
  const [value, setValue] = useState(init);
  const onChange = (e: any) => setValue(e.target.value);
  return { value, onChange };
};

export default useInput;
