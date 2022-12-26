import Slider from "react-slick"


const SETTING = {
    dots: true,
    speed: 300,
}


export const ImageSlider = ({ images, fallbackImgUrl }: Props) => {
    if (!images.length) {
        if (!fallbackImgUrl) return <></>
        return (<div className="entities-portal-cmp--image-carousel__container">
            <Slider {...SETTING}>
                <img
                    src={fallbackImgUrl}
                    className="fallback"
                    alt="לא נמצאה תמונת תצוגה"
                    title="לא נמצאה תמונת תצוגה"
                />
            </Slider>
        </div>)
    }

    return (
        <div className="entities-portal-cmp--image-carousel__container">
            <Slider {...SETTING}>
                {images.map(image => <img
                    key={image.id}
                    src={image.imageUrl}
                    alt={image.name}
                    title={image.name + ((images.length > 1) ? ` (מתוך ${images.length} תמונות)` : '')}
                />)}
            </Slider>
        </div>
    )
}


type Props = {
    images: {
        id: string,
        name: string,
        imageUrl: string,
    }[],
    fallbackImgUrl?: string
}