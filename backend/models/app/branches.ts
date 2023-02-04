import { Team } from "./team"

export interface Branch {
    id: string

    name: {
        display: string
    }

    teams: Team[]
    mainTeamId: string
}