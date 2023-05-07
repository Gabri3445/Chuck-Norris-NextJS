import type {MouseEvent} from "react";

interface LoadJokeProps {
  onClick: (e: MouseEvent) => void;
}

const LoadJoke = (props: LoadJokeProps) => {
  return(
    <>
      <button onClick={props.onClick} className="rounded-md bg-blue-500 p-2 text-white w-1/5 drop-shadow-lg">Load Joke</button>
    </>
  )
}

export default LoadJoke;