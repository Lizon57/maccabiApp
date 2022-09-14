import { useEffect, useState } from "react"

import { gamePosterService } from "../../services/entities/game-poster-service"
import { gamePosterType } from "../../types/game-poster"


export const GamePosterList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [gamePosters, setGamePosters] = useState<gamePosterType[]>([])


    useEffect(() => {
        if (!isLoading) return

        const loadGamePosters = async () => {
            if (!isLoading) return

            try {
                const gamePosters = await gamePosterService.query() as gamePosterType[]
                setGamePosters(gamePosters)
            } catch ({ message }) {
                // TODO: Handle error
                setErrorMessage(message as string)
            } finally {
                setIsLoading(false)
            }
        }
        loadGamePosters()
    }, [isLoading])


    if (isLoading) return <div>טוען</div>
    if (errorMessage) return <div>{errorMessage}</div>

    return (
        <div className="game-poster--list__container">
            {gamePosters.map(poster => {
                return (
                    <div key={poster.id}>כרזת משחק</div>
                )
            })}
        </div>
    )
}