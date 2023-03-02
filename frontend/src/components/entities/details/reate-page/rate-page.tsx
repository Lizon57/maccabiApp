import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"

import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"

import { Dropdown } from "../../../common/dropdown/dropdown"
import { Rater } from "./rater"


export const RatePage = () => {
    const { item } = useSelector((state: RootState) => state.displayEntityItemModule)
    const { user } = useSelector((state: RootState) => state.userStateModule)


    const isRatedBefore = !!item.itemInfo.rate.avg


    return (
        <div className="entity-details--rate-page__container">
            {user?._id
                ? <Dropdown
                    controllerText={isRatedBefore ? item.itemInfo.rate.avg : 'היה הראשון לדרג!'}
                    controllerIcon={isRatedBefore ? AiFillStar : undefined}
                    title={`דרג עמוד`}
                    children={<Rater />}
                />
                : <Link to="/login-signup">התחבר כדי לדרג</Link>
            }
        </div>
    )
}