import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';


export async function findDrink() {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const jsonData = await data.json()
  console.log("jsonData.drinks[0]", jsonData.drinks[0])
  const drink = {}
  drink.name = jsonData.drinks[0].strDrink;
  drink.alcho = jsonData.drinks[0].strAlcoholic;

  // const drink = jsonData.drinks[0].strDrink

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
      <h2>{drinkData.name}</h2>
      <p> <em>{drinkData.alcho}</em></p>
      {/* <p>{drinkData}</p> */}
      <br></br>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}