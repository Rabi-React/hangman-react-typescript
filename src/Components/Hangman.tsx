import React,{useState, useRef, useEffect} from 'react'

export default function Hangman() {
    const word = "Bedsheet".toUpperCase();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [guessed, setGuessed] = useState<string | any>([])
    const [lives, setLives] = useState(10)
    const maskedWord = word.split("").map(item => guessed.includes(item) ? item : "__").join(" ")

    useEffect(()=>{
        if(inputRef.current) inputRef.current.focus();
    },[guessed])
  return (
    <div>
      <h2>Welcome to Hangman</h2>
      <h3>Total Lives Left: {lives<=0 ? 0: lives}</h3>
      <h3>{maskedWord}</h3>
      <label>Enter your letter: </label>
      <input ref={inputRef} type="text" onChange={(e)=> {
        if(word.includes(e.target.value.toUpperCase())){
            setGuessed([...guessed, e.target.value.toUpperCase()])
        }else{setLives(lives-1)}
      }}/>
      <h3>{lives<=0 && "You Lost the Game"}</h3>
      <h3>{!maskedWord.includes("__") && "You Won"}</h3>

    </div>
  )
}
