import { SimpleListEntityDetailsCmpInfo } from "../../../types/entities/entity-details-structure-cmp/simple-list-entity-details-cmp-info"
import { BasicEntityDetailsStructureCmp } from "./basic-entity-details-structure-cmp"


export interface SimpleListEntityDetailsCmp extends BasicEntityDetailsStructureCmp {
    infos: SimpleListEntityDetailsCmpInfo[]
}