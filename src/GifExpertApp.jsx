import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {

    if(categories.some(category => category === value )) return;
    
    setCategories([value, ...categories]);
  }

  return (
      <>
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory= {onAddCategory} />

        {
          categories.map(category =>
            <GifGrid
            key={category}
            category={category}
            />)
          }

          { categories.length === 0 && <h5>Such empty. Let's get some awesome gifs</h5>}

      </>
  )
}
