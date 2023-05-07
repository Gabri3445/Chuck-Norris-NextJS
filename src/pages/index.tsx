import { GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import Joke from "~/components/Joke";
import Select from "~/components/Select";
import { useState } from "react";
import LoadJoke from "~/components/LoadJoke";
import Head from "next/head";
import type { ChangeEvent } from "react";

interface IndexProps {
  categories: string[];
}

const Home: NextPage = (props: IndexProps) => {

  const [category, setCategory] = useState<string>("random");

  const [joke, setJoke] = useState<string>("");

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  interface JokeResponse {
    value: string;
  }

  const onJokeButtonClick = async () => {
    if (category === "random") {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json() as JokeResponse;
      setJoke(data.value);
    } else {
      const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
      const data = await response.json() as JokeResponse;
      setJoke(data.value);
    }
    return Promise.resolve();
  };

  return (
    <>
      <Head>
        <title>Chuck Norris API</title>
        <meta name="title" content="Chuck Norris API" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Chuck Norris API" />
        <meta property="og:description" content="" />
        <meta property="og:image"
              content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Chuck Norris API" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image"
              content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
      <div className="bg-yellow-200 h-screen overflow-hidden flex flex-col justify-center items-center">
        <div className="flex grow items-center">
          <h1 className="text-8xl uppercase font-concert text-orange-500 drop-shadow-lg text-center">joke chuck norris</h1>
          <Image src="/uzi.png" alt="uzi" width="128" height="75" />
        </div>
        <div className="grow flex flex-col justify-center items-center">
          <Joke joke={joke}></Joke>
        </div>
        <div className="grow flex flex-col justify-center items-center w-screen">
          <Select categories={props.categories} onChange={onSelectChange}></Select>
          <LoadJoke onClick={onJokeButtonClick}></LoadJoke>
        </div>
      </div>
    </>
  );
};


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await res.json() as string[];

  return {
    props: {
      categories: categories,
    },
  };
};

export default Home;
