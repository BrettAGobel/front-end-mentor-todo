import React, {useState} from "react";
import image from '../images/PS1-GAME-COVERS/PS1-GAME-COVERS/2Xtreme (USA).png'
let imageObject = {};

function importAll(r) {

    r.keys().map((item, index) => { imageObject[item.replace('./', '')] = r(item); });
    return imageObject;
}

const images = importAll(require.context('../images/PS1-GAME-COVERS/PS1-GAME-COVERS', true, /\.(png|jpe?g|svg)$/));


console.log(images.typeOf)

 const objKeys = Object.entries(images)
    // console.log(objKeys[1200]);


const Slider  = () => {




    // const [imageArray, setImgArray] = useState([{name: images.item, image: images.["007 - The World Is Not Enough (USA).png"]}])

return (

    <div>
        <div className='slider-container'>
            {objKeys.map(item => {
                let imageName = item[0]
                let imagePicture = item[1].default
                console.log(image)
                return (
                    <img className='slider-image' src={imagePicture} />
                )
            })}
            {/*{images.map(image => (*/}
            {/*    <img className='slider-image' src={image} />*/}
            {/*))}*/}
            {/*<div>{imageMap}</div>*/}
            {/*<img src={images['2Xtreme (USA).png'].default} className='slider-image'/>*/}
            {/*<img src={images['007 - The World Is Not Enough (USA).png'].default} className='slider-image'/>*/}
            {/*<img src={image} alt=''/>*/}
            {/*<span>{images["Ace Combat 2 (USA).png"]}</span>*/}
        </div>
    </div>

)

}


export default Slider