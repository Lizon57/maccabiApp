import { BiCategory } from "react-icons/bi"

import { MiniPageCategory } from "../../../types/page-category"


export const UnitAdditionalContent = ({ miniCategories }: Props) => {
    return (
        <section className="unit-cmps--additional-content__container">
            {miniCategories?.length && <div className="page-categories-container">
                <h2 className="title">
                    <span className="icon">{<BiCategory />}</span>
                    <span className="title">קטגוריות</span>
                </h2>

                <div className="list-container">
                    {miniCategories.map(category => <div key={category.id}>{category.name.display}</div>)}
                </div>
            </div>}
        </section>
    )
}


type Props = {
    miniCategories: MiniPageCategory[]
}