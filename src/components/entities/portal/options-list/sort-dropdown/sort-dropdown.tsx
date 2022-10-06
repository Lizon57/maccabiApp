import { useNavigate } from "react-router-dom"

import { BiSort } from "react-icons/bi"
import { AiOutlineCloseCircle } from "react-icons/ai"

import { EntitySortOption } from "../../../../../types/entity-sort-option"

import { Dropdown } from "../../../../common/dropdown/dropdown"


export const SortDropdown = ({ sorts, setIsLoading }: propsType) => {
    const navigate = useNavigate()
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)


    const onSelectSort = ({ key, order }: EntitySortOption) => {
        params.set('sKey', key)
        params.set('sOrder', order)
        navigate({ search: params.toString() })
        setIsLoading(true)
    }


    const getIsSortOptionActive = ({ key, order }: EntitySortOption) => {
        return ((key === params.get('sKey')) && (order === params.get('sOrder'))) ? true : false
    }


    const onClearSort = () => {
        params.delete('sKey')
        params.delete('sOrder')
        navigate({ search: params.toString() })
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
                        <span className="icon"><AiOutlineCloseCircle /></span>
                        <span className="text">נקה מיון</span>
                    </div>
                </>
            </Dropdown>
        </div>
    )
}


type propsType = {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    sorts: EntitySortOption[]
}