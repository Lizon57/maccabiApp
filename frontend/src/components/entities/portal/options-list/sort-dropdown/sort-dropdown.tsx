import { useNavigate } from "react-router-dom"

import { BiSort } from "react-icons/bi"
import { FiXCircle } from "react-icons/fi"

import { EntitySortOption } from "../../../../../types/entity/sort/entity-sort-option"

import { Dropdown } from "../../../../common/dropdown/dropdown"


export const SortDropdown = ({ sorts, setIsLoading }: Props) => {
    const { searchParams: params } = new URL(window.location.href)
    const navigate = useNavigate()


    const navigateNewSort = () => {
        navigate({ search: params.toString().replaceAll('%2C', ',') })
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setIsLoading(true)
    }


    const onSelectSort = ({ key, order }: EntitySortOption) => {
        params.set('sKey', key)
        params.set('sOrder', order)
        navigateNewSort()
    }


    const onClearSort = () => {
        params.delete('sKey')
        params.delete('sOrder')
        navigateNewSort()
    }


    const getIsSortOptionActive = ({ key, order }: EntitySortOption) => {
        return ((key === params.get('sKey')) && (order === params.get('sOrder')))
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
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    sorts: EntitySortOption[]
}