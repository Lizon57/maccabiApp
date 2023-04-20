import { BasicEntityDetailsStructureCmp } from "../../interfaces/entities/entity-details-structure-cmp/basic-entity-details-structure-cmp"
import { KeySpecifyBasicEntityDetailsStructureCmp } from "../../interfaces/entities/entity-details-structure-cmp/key-specify-basic-entity-details-structure-cmp"
import { SimpleListEntityDetailsCmp } from "../../interfaces/entities/entity-details-structure-cmp/simple-list-entity-details-cmp"


export type EntityDetailsStructureCmp = BasicEntityDetailsStructureCmp | SimpleListEntityDetailsCmp | KeySpecifyBasicEntityDetailsStructureCmp