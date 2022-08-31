import BEMHelper from "react-bem-helper"

import logo from '../../../assets/images/logo.png'


const BEM_HELPER = new BEMHelper('app-header')


export const AppHeader = () => {
    return (
        <div {...BEM_HELPER('container')}>
            <div {...BEM_HELPER('content')}>
                <img src={logo} alt="עמוד ראשי" title="עמוד ראשי" {...BEM_HELPER('brand-logo')} />
            </div>
        </div>
    )
}