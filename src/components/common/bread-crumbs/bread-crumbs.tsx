import { Link } from "react-router-dom"

import { makeId } from "../../../services/util/make-id"

import { BiChevronLeft } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"


export const BreadCrumbs = ({ path }: Props) => {
    return (
        <section className="common-cmp--bread-crumbs__container">
            <Link to="/" title="עמוד ראשי"><AiFillHome size={14} /></Link>
            {path.map(({ text, link }, idx) => <span className="wrapper" key={makeId()}>
                {link && <span title={text}><Link to={'/' + link}>{text}</Link></span>}
                {!link && <span title={text}>{text}</span>}
                {(idx + 1 !== path.length) && <span><BiChevronLeft /></span>}
            </span>

            )}
        </section>
    )
}


type Props = {
    path: {
        text: string,
        link?: string
    }[]
}