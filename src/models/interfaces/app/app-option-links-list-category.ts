import { IconType } from "react-icons"
import { AppOptionLinksLink } from "./app-option-links-link"


export interface AppOptionLinksListCategory {
    id: string,
    icon: IconType
    title: string
    childrens: AppOptionLinksLink[]
}