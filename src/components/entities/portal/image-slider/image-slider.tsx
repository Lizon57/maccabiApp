import Slider from "react-slick"


export const ImageSlider = ({ images }: Props) => {
    const SETTING = {
        dots: true,
        speed: 300,
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
    }[]
}