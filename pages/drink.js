import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';
import React, { useEffect } from 'react';


export async function findDrink() {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const jsonData = await data.json()
  console.log("jsonData.drinks[0]", jsonData.drinks[0])
  // const drink = {}
  // drink.name = jsonData.drinks[0].strDrink;
  // drink.alcho = jsonData.drinks[0].strAlcoholic;

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

  

  const findIngredients = (drinkData) => {
    const ingredients = {}

    if (drinkData.strIngredient1 !== null) {
      ingredients.ingredient1 = drinkData.strIngredient1
      ingredients.measurement1 = drinkData.strMeasure1
    }

    if (drinkData.strIngredient2 != null) {
      ingredients.ingredient2 = drinkData.strIngredient2
      ingredients.measurement2 = drinkData.strMeasure2
    }

    if (drinkData.strIngredient3 != null) {
      ingredients.ingredient3 = drinkData.strIngredient3
      ingredients.measurement3 = drinkData.strMeasure3
    }

    if (drinkData.strIngredient4 != null) {
      ingredients.ingredient4 = drinkData.strIngredient4
      ingredients.measurement4 = drinkData.strMeasure4
    }


    if (drinkData.strIngredient5 != null) {
      ingredients.ingredient5 = drinkData.strIngredient5
      ingredients.measurement5 = drinkData.strMeasure5
    }

    if (drinkData.strIngredient6 != null) {
      ingredients.ingredient6 = drinkData.strIngredient6
      ingredients.measurement6 = drinkData.strMeasure6
    }

    return ingredients;

  }


  const ingredients = findIngredients(drinkData)

  
  // const image = "${drinkData.strDrinkThumb}"

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
      <p>{ingredients.ingredient1} - <em>{ingredients.measurement1}</em></p>
      {ingredients.ingredient2 ? <p>{ingredients.ingredient2} - <em>{ingredients.measurement2}</em></p> : ''}
      {ingredients.ingredient3 ? <p>{ingredients.ingredient3} - <em>{ingredients.measurement3}</em></p> : ''}
      {ingredients.ingredient4 ? <p>{ingredients.ingredient4} - <em>{ingredients.measurement4}</em></p> : ''}
      {ingredients.ingredient5 ? <p>{ingredients.ingredient5} - <em>{ingredients.measurement5}</em></p> : ''}
      {ingredients.ingredient6 ? <p>{ingredients.ingredient6} - <em>{ingredients.measurement6}</em></p> : ''}
      <p></p>

      <p>Instructions:</p>
      <p><em>{drinkData.strInstructions}</em></p>
      <br></br>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </>
  )
}