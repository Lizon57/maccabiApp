import { AppOptionRestriction } from "../../../types/app/app-option-link/app-option-restriction"

export interface AppOptionLinksLink {
    id: string
    text: string
    path: string
    isRelative: boolean
    action?: () => void
    restriction?: AppOptionRestriction
}