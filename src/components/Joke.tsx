interface JokeProps {
    joke: string
}

const Joke = (props : JokeProps) => {
    return(
        <div className="rounded-md min-h-min bg-gray-400 drop-shadow-lg max-w-md">
            <span>{props.joke}</span>
        </div>
    )
}

export default Joke;