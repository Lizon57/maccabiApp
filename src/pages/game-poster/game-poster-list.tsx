import { useEffect, useState } from "react"

import { gamePosterService } from "../../services/entities/game-poster-service"
import { gamePosterType } from "../../types/game-poster"

import { Loader } from "../../components/common/loader/loader"
import { ErrorMessage } from "../../components/common/error-message/error-message"


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
                setErrorMessage(message as string)
            }
            finally {
                setIsLoading(false)
            }
        }
        loadGamePosters()
    }, [isLoading])


    if (isLoading) return <Loader />
    if (errorMessage) return <ErrorMessage message={errorMessage} />

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