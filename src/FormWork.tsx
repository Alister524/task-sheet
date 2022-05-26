import React,{useState} from "react";

interface ITasts {
    onAdd(title: string) : void
}

export const FormWork: React.FC <ITasts> = props =>{
    
    const [letter, setLetter] = useState<string>('')

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setLetter(event.target.value)
    }

    const KeyPressHand = (event: React.KeyboardEvent) =>{
        if(event.key === 'Enter'){
            props.onAdd(letter)
            setLetter('')
        }
    }

    return(
        <div className="Input-field margT2">
            <input 
                onChange={changeValue}
                value={letter}
                type='text' 
                id='title' 
                placeholder="Введите название дела..."
                onKeyPress={KeyPressHand}
                />
            <label htmlFor="title" className="active">
                Введите название дела
            </label> 
        </div>    
    )
}