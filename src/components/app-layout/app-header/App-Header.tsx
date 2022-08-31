import BEMHelper from "react-bem-helper"


const BEM_HELPER = new BEMHelper('app-header')


export const AppHeader = () => {
    return (
        <div {...BEM_HELPER('container')}>תפריט</div>
    )
}