export type CategoryLink = {
    id: string
    text: string
    childrens: CategoryLinkProps[]
}


export type CategoryLinkProps = {
    id?: string
    title: string
    description: string
    path: string
    img: string
    isDisabled?: boolean
}