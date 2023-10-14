import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const onInputSubmit = (e) => {
        e.preventDefault();
        const newInputValue = inputValue.trim();
        
        if(newInputValue.length < 3) return;

        onNewCategory(newInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit= { onInputSubmit }>
            <input
                type="text"
                name=""
                value={inputValue}
                placeholder="Buscar Gifs"
                onChange= { onInputChange }
            />
        </form>
    )
}