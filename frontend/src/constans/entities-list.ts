import { Entity } from "../models/interfaces/entities/entity"

import { crowdOrganizationEntity } from "../data/entities/crowd-organization/crowd-organization"
import { libraryEntity } from "../data/entities/library/library"
import { signatureEntity } from "../data/entities/signature/signature"
import { pageCategory } from "../data/entities/page-category/page-category"


export const ENTITIES_LIST: { [key: string]: Entity } = {
    signature: signatureEntity,
    'crowd-organization': crowdOrganizationEntity,
    library: libraryEntity,
    'page-category': pageCategory
}