import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { UseFetchGifs } from "../hooks/UseFetchGifs";

// 1. Creamos un componente GifGrid que muestra imágenes cargadas desde la API de Giphy.

// 2. Utilizamos un hook personalizado UseFetchGifs para manejar la carga de imágenes de manera asincrónica.

// 3. Inicializamos el estado isLoadingImages para controlar la carga de imágenes.

// 4. Actualizamos el estado de imageList solo después de que las imágenes se hayan cargado completamente y isLoading sea false.

// 5. Implementamos una función deleteImage en GifGrid que permite eliminar imágenes y actualiza el estado de imageList para reflejar los cambios.

// 6. Implementamos una lógica condicional para mostrar u ocultar el encabezado h3 en el componente GifGrid en función de si el arreglo imageList está vacío. El encabezado se muestra solo si el arreglo contiene elementos



export const GifGrid = ({category}) => {

  const { images, isLoading } = UseFetchGifs(category);
  const [imageList, setImageList] = useState([]);

  const deleteImage = (id) => {
    const updatedImages = imageList.filter((image) => image.id !== id);
    setImageList(updatedImages);
  };

  useEffect(() => {
    if (!isLoading) {
      setImageList(images);
    }
  }, [isLoading]);

  return (
    <>
        { imageList.length > 0 && <h3>{category}</h3>}
        {isLoading ? <h2>Cargando...</h2> : null}
        {/* { imageList.length < 1 && <h5>Looks like you got bored. Let's try a different search!</h5>} */}


        <div className="card-grid">
          {
            imageList.map((image) => (
              <GifItem 
                key={image.id}
                { ...image }
                deleteImage = {deleteImage}
              />
            ))
          }
        </div>

        
    </>
  )
}
