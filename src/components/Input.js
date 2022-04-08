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



    const [memeImgUrl, setMemeImgUrl] = useState(memeImg);
    
    function updateMeme (){
        setMemeImgUrl(returnRandomMeme());
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
                <img src={memeImgUrl} alt="meme" />
            </div>
        </div>
    )
}