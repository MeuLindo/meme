import memeData from '../data.js'
import meme from '../images/memeimg.png'


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

    return(
        <div className="inputs">
            <div className="form">
                <div className="input--fields">
                    <input placeholder="TOP TEXT"  />
                    <input placeholder="BOTTOM TEXT"/>
                </div>
                <button onClick={returnRandomMeme}>Get new meme 🖼</button>
            </div>
            <div className="result">
                <img src={memeImg} alt="meme" />
            </div>
        </div>
    )
}