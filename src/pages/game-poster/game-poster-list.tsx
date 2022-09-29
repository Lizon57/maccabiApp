import { useEffect, useState } from "react"

import { gamePosterService } from "../../services/entities/game-poster-service"
import { gamePosterType } from "../../types/game-poster"
import { GamePosterPreview } from "../../components/entities/game-poster/game-poster-preview"

import { Loader } from "../../components/common/loader/loader"
import { ErrorMessage } from "../../components/common/error-message/error-message"
import { MainTitle } from "../../components/common/main-title/main-title"
import { ListOptions } from "../../components/entities/common/list-options/list-options"


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
        <section className="game-poster--list__page-container">
            <MainTitle text="אוסף הכרזות" additionalCmp={<ListOptions />} />
            <div className="list-container">
                {gamePosters.map(poster => <GamePosterPreview key={poster.id} poster={poster} />)}
            </div>
        </section>
    )
}