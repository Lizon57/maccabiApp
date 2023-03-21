import Slider from "react-slick"


const CustomDots = () => {
    return (
        <span className="entities-portal-cmp--image-carousel-dots__container"></span>
    )
}

const SETTING = { dots: true, speed: 300, customPaging: CustomDots }

export const ImageSlider = ({ images, fallbackImgUrl }: Props) => {
    if (!images.length && !fallbackImgUrl) return <></>


    return (
        <div className="entities-portal-cmp--image-carousel__container">
            <Slider {...SETTING}>
                {images.length
                    ? images.map(image => <img
                        key={image.id}
                        src={image.imageUrl}
                        alt={image.name}
                        title={image.name + ((images.length > 1) ? ` (מתוך ${images.length} תמונות)` : '')}
                    />)
                    : <img
                        src={fallbackImgUrl}
                        className="fallback"
                        alt="לא נמצאה תמונת תצוגה"
                        title="לא נמצאה תמונת תצוגה"
                    />}
            </Slider>
        </div>
    )
}


type Props = {
    images: {
        id: string
        name: string
        imageUrl: string
    }[]
    fallbackImgUrl?: string
}