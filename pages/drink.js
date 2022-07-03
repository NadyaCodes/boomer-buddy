import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';
// import React, { useEffect } from 'react';
import { useRouter } from 'next/router'


export async function findDrink() {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const jsonData = await data.json()

  const drink = jsonData.drinks[0]

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

  const router = useRouter()
  const { user } = router.query

  const findIngredients = (drinkData) => {
    const allIngredients = []

    for (let i = 1; i <= 15; i++) {
      let drinkIng = `strIngredient${i}`;
      let drinkAm = `strMeasure${i}`
      if (drinkData[drinkIng] !== null) {
        const ingredients = []
        ingredients.push(drinkData[drinkIng])
        ingredients.push(drinkData[drinkAm])
        allIngredients.push(ingredients)
      }
    }
    console.log(allIngredients)
    return allIngredients;
  }


  const ingredients = findIngredients(drinkData)

  const ingredientsDisplay = [];

  for (let i = 0; i < ingredients.length; i++) {
    ingredientsDisplay.push(<p>{ingredients[i][0]} - <em>{ingredients[i][1]}</em></p>);
  }


  const myLoader=({src})=>{
    return `${drinkData.strDrinkThumb}`;
  }

  return(
    <>
      <Head>
        <title>Random Drink</title>
      </Head>

      <h1>Random Drink</h1>
      <Image
        loader={myLoader}
        src= {`${drinkData.strDrinkThumb}`}    
        height={200}
        width={200}
        unoptimized="true"
        alt="Drink"
      >
      </Image>
      <h2>{drinkData.strDrink}</h2>
      <p> <em>{drinkData.strAlcoholic}</em></p>
      <p> Ideal glass: <em>{drinkData.strGlass}</em></p>
      <br />
      <h2>Ingredients</h2>
      {ingredientsDisplay}
      <br />
      <h2>Instructions:</h2>
      <p><em>{drinkData.strInstructions}</em></p>
      <br></br><button>
      <Link href={{
        pathname: "/home",
        query: {
          user
        }}} as={`home/${user}`}
      >
        <a>Back to home</a>
      </Link></button>
    </>
  )
}