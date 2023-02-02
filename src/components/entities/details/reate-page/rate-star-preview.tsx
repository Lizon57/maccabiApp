import { AiFillStar, AiOutlineStar } from "react-icons/ai"

export const RateStarPreview = ({ filledStar }: Props) => {
    const filledStars = new Array(filledStar).fill(true)
    const unfilledStars = new Array(5 - filledStar).fill(true)

    return (
        <div className="entity-details--rate-star-preview__container">
            {filledStars.map(_ => <span className="filled"><AiFillStar /></span>)}
            {unfilledStars.map(_ => <span><AiOutlineStar /></span>)}
        </div>
    )
}


type Props = {
    filledStar: number
}