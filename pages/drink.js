import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';


export async function findDrink() {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const jsonData = await data.json()
  const drink = jsonData.drinks[0].strDrink

  return drink;
}


export async function getStaticProps() {

  const drinkData = await findDrink()
  return {
    props: {
      drinkData,
    }
  }

}


export default function Drink({ drinkData }) {



  return(
    <>
      <Head>
        <title>Random Drink</title>
      </Head>

      <h1>Random Drink</h1>
      <Image
        src="/images/drink.png"
        height={200}
        width={100}
        alt="Drink"
      >
      </Image>
      <p>{drinkData}</p>
      <br></br>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}