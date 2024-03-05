import { useEffect, useState } from 'react'
import Recipe from './Recipe'
import style from './Recipes.module.scss'
import recipes from './itens.json'

interface RecipeProps {
  tag: null | number
  sort: string
  search: string
}

const Recipes = ({ search, sort, tag }: RecipeProps) => {
  const [recipeList, setRecipeList] = useState(recipes)

  useEffect(() => {
    function filterBySearch(title: string) {
      const regex = new RegExp(search, 'i')
      return regex.test(title)
    }

    function filterByTag(tagSelected: null | number) {
      if (tag !== null) return tagSelected === tag
      return true
    }

    function orderBySort(newList: typeof recipes) {
      switch (sort.toLowerCase()) {
        case 'porção':
          return newList.sort((x, y) => (x.size > y.size ? 1 : -1))
        case 'qtd. pessoas':
          return newList.sort((x, y) => (x.serving > y.serving ? 1 : -1))
        case 'preço':
          return newList.sort((x, y) => (x.price > y.price ? 1 : -1))
        default:
          return newList
      }
    }

    const newList = recipes.filter(
      (recipe) =>
        filterByTag(recipe.category.id) && filterBySearch(recipe.title),
    )
    setRecipeList(orderBySort(newList))
  }, [search, sort, tag])

  return (
    <div className={style.recipes}>
      {recipeList.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} />
      ))}
    </div>
  )
}

export default Recipes
