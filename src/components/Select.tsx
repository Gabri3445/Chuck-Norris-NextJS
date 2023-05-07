import Image from "next/image";
import type { ChangeEvent } from "react";

interface SelectProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  categories: string[];
}

const Select = (props: SelectProps) => {

  return(
    <>
      <Image src="/chuck.gif" alt="chuck gif" width="104" height="124"></Image>
      <select onChange={props.onChange} className="w-1/4 text-center capitalize drop-shadow-lg">
        <option value="random">Random</option>
        {props.categories.map((category) => (
          <option key={category} value={category} className="capitalize">
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select;