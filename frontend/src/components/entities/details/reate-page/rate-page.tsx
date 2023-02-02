import { AiFillStar } from "react-icons/ai"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"

import { Dropdown } from "../../../common/dropdown/dropdown"
import { Rater } from "./rater"


export const RatePage = () => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)


    const isRatedBefore = !!item.itemInfo.rate.avg

    return (
        <div className="entity-details--rate-page__container">
            <Dropdown
                controllerText={isRatedBefore ? item.itemInfo.rate.avg : 'היה הראשון לדרג!'}
                controllerIcon={isRatedBefore ? AiFillStar : undefined}
                title={`דרג עמוד`}
                children={<Rater />}
            />
        </div>
    )
}