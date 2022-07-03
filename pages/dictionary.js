import Link from 'next/link';
import Head from 'next/head';
import React, {useState} from 'react';

import useSWR from 'swr';
import { useRouter } from 'next/router'


  

const fetcher = url => fetch(url).then(r => r.json())




export default function DictionaryEntries(  ) {

  const router = useRouter()
  const { user } = router.query
  

  const [word, setWord] = useState('');

  function Definition() {
    const { data, error } = useSWR(`https://api.urbandictionary.com/v0/define?term=${word}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;

    return (
      <div>
        {data.list.map( (article, index) => (
        <p key={index}>{article.definition}</p>
        ))}
      </div>
    )
    
  }


const onChangeHandler = event => {
  event.preventDefault()
   setWord(event.target.value);
  //  console.log(word)
};


  return (
    <>
      <Head>
        <title>Dictionary</title>
      </Head>
      <h1>My Dictionary</h1>
        <input type="text" id="dictionaryWord" name="dictionaryWord" onChange={onChangeHandler} value={word}></input>
      <p>Looking up word: {word}</p>
      <p>Definition:</p>
      
      {word && <Definition />}

      <button>
      <Link href={{
        pathname: "/home",
        query: {
          user
        }}} as={`home/${user}`}
      >
        <a>Back to home</a>
      </Link>
      </button>
    </>
  )
}