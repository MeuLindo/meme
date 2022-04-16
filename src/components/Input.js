import memeData from '../data.js'
import { useState } from 'react';


export default function Input(){
    let popMemes = memeData.data.memes;
    let randomMeme = popMemes[Math.floor(Math.random() * popMemes.length)];
    let memeImg = randomMeme.url;
    function returnRandomMeme(){
        
        randomMeme = popMemes[Math.floor(Math.random() * popMemes.length)];
        memeImg = randomMeme.url;
        console.log(memeImg)
        return memeImg;
    }



    const [meme, setMeme] = useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: ""
    });


    function updateMeme (){
        setMeme( prevState => {
            return {
                randomImage: returnRandomMeme(),
                topText: prevState.topText,
                bottomText: prevState.bottomText
            }
        });
    }

    console.log(meme)

    function handleChange(event){
        const {name, value} = event.target;
        
        setMeme(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    return(
        <div className="inputs">
            <div className="form">
                <div className="input--fields">
                    <input 
                        placeholder="TOP TEXT"
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        placeholder="BOTTOM TEXT"
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={updateMeme}>Get new meme 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}