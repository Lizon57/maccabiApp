import { GoGear } from "react-icons/go"
import { FiEdit2 } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"


export const UpToLaptopOptionBar = () => {
    return (
        <div className="app-layout--up-to-laptop-option-bar__container">
            <ul>
                <li><GoGear /></li>
                <li><FiEdit2 /></li>
                <li><AiOutlineUser /></li>
            </ul>
        </div>
    )
}