import { useState } from "react";

const ClickablePicture = ({img, imgClicked}) =>{
    const [altImg, setAltImage] = useState(false)
    const changeImg = () => {
        setAltImage(!altImg)
    }

    return(
        <div>
            <img 
                alt = 'imagem'
                src={altImg ? imgClicked : img}
                onClick={changeImg}
            />
        </div>
    )
}

export default ClickablePicture