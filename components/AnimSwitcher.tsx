import React, { useState } from "react";
import { animations } from "../lib/animations";

export default function AnimSwitcher({
  anims,
  setAnimation,
  startIndex
}: {
  setAnimation: (value: any) => void;
  startIndex: number;
  anims: typeof animations;
}) {
  const [value, setValue] = useState(startIndex);

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const v = Number(e.currentTarget.value);
    setValue(v);
    setAnimation(anims[v]);
  };
  return (
    <div className="anim-switch">
      <select value={value} onChange={handleChange}>
        {anims.map((animation, index) => {
          return (
            <option value={index} key={animation.name}>
              {animation.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
