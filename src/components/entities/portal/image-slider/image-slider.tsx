import Slider from "react-slick"


export const ImageSlider = ({ imagePath, images }: Props) => {
    const SETTING = {
        dots: true,
        speed: 300,
        rtl: true,
    }

    return (
        <div className="entities-portal-cmp--image-carousel__container" title="תצוגת תמונות">
            <Slider {...SETTING}>
                {images.map(image => <img
                    key={image}
                    src={require(`../../../../assets/images/entities/${imagePath}/${image}`)}
                    alt="תמונת תצוגה" />
                )}
            </Slider>
        </div>
    )
}


type Props = {
    imagePath: string,
    images: string[]
}