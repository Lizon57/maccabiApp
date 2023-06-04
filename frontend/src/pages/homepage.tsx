import CountUp from "react-countup"
import uuid from 'react-uuid'
import { CATEGORY_NUMBERS } from "../constans/category-numbers"
import { BiPlus } from "react-icons/bi"


export const HomePage = () => {
    return (
        <main className="homepage__container">
            <section className="category-numbers">
                {CATEGORY_NUMBERS.map(({ count, title }) => <div key={uuid()} className="preview-container">
                    <div className="count-container">
                        <CountUp className="count" end={count} duration={5} />
                        <span className="plus"><BiPlus /></span>
                    </div>

                    <div className="title">{title}</div>
                </div>
                )}
            </section>
        </main>
    )
}