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
    
    const [allMemeImages, setAllMemeImages] = useState(memeData);

    function updateMeme (){
        setMeme( prevState => {
            return {
                randomImage: returnRandomMeme(),
                topText: prevState.topText,
                bottomText: prevState.bottomText
            }
        });
    }

    return(
        <div className="inputs">
            <div className="form">
                <div className="input--fields">
                    <input placeholder="TOP TEXT"  />
                    <input placeholder="BOTTOM TEXT"/>
                </div>
                <button onClick={updateMeme}>Get new meme 🖼</button>
            </div>
            <div className="result">
                <img src={meme.randomImage} alt="meme" />
            </div>
        </div>
    )
}