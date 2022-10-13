import { useNavigate } from "react-router-dom"

import { BiSort } from "react-icons/bi"
import { FiXCircle } from "react-icons/fi"

import { EntitySortOption } from "../../../../../types/entity/sort/entity-sort-option"

import { Dropdown } from "../../../../common/dropdown/dropdown"


export const SortDropdown = ({ sorts, setIsLoading }: Props) => {
    const navigate = useNavigate()
    const PARAMS = new URL(window.location.href).searchParams


    const onSelectSort = ({ key, order }: EntitySortOption) => {
        PARAMS.set('sKey', key)
        PARAMS.set('sOrder', order)
        navigate({ search: PARAMS.toString().replaceAll('%2C', ',') })
        window.scrollTo({ top: 0 })
        setIsLoading(true)
    }


    const getIsSortOptionActive = ({ key, order }: EntitySortOption) => {
        return ((key === PARAMS.get('sKey')) && (order === PARAMS.get('sOrder'))) ? true : false
    }


    const onClearSort = () => {
        PARAMS.delete('sKey')
        PARAMS.delete('sOrder')
        navigate({ search: PARAMS.toString().replaceAll('%2C', ',') })
        window.scrollTo({ top: 0 })
        setIsLoading(true)
    }


    return (
        <div className="options-list--sort-dropdown__container">
            <Dropdown controllerIcon={BiSort} title="מיין תצוגה">
                <>
                    <div className="sorts-container">
                        {sorts.map(sort => (
                            <div
                                key={sort.id}
                                className={"sort-option" + (getIsSortOptionActive(sort) ? ' active' : '')}
                                title={'מיין לפי ' + sort.title}
                                onClick={() => onSelectSort(sort)}>
                                {sort.title}
                            </div>))}
                    </div>

                    <div className="clear-sort" onClick={onClearSort} title="נקה מיון">
                        <span className="icon"><FiXCircle /></span>
                        <span className="text">נקה מיון</span>
                    </div>
                </>
            </Dropdown>
        </div>
    )
}


type Props = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    sorts: EntitySortOption[]
}