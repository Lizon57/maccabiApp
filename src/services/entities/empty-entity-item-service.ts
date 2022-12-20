const _BASIC_EMPTY_ENTITY_ITEM = {
    entityInfo: {
        name: {
            display: ''
        },
        ctgIds: [],
    },

    itemInfo: {
        view: 0,
        rate: {
            avg: 0,
            raterCount: 0
        },
        editHistory: {
            total: 0,
            lastEditDate: new Date()
        }
    }
}

const get = (type: string) => {
    const ITEM = structuredClone(_BASIC_EMPTY_ENTITY_ITEM)

    switch (type) {
        case 'signature':
            ITEM.relatedInfo = {
                miniProfile: {
                    profileId: '',
                    displayName: ''
                }
            }

            ITEM.images = []
            break

        case 'image':
            ITEM.entityInfo = {
                ...ITEM.entityInfo,
                imageUrl: ''
            }
            break

        case 'profile':
            ITEM.relatedInfo = {
                profileImageId: ''
            }

            ITEM.entityInfo = {
                name: {
                    he: {
                        private: '',
                        middle: '',
                        family: '',
                        nickname: ''
                    }
                },

                lifetime: {
                    born: {
                        date: undefined,

                        uncomplete: {
                            year: undefined,
                            month: undefined,
                            day: undefined,
                        }
                    },

                    died: {
                        date: undefined,

                        uncomplete: {
                            year: undefined,
                            month: undefined,
                            day: undefined,
                        }
                    },

                    bornLocation: {
                        city: '',
                        reguion: '',
                        country: ''
                    }
                },
            }
            break

        case 'library':
            ITEM.entityInfo = {
                ...ITEM.entityInfo,
                item: {
                    writers: [],
                    publishers: [],
                    pageCount: undefined,
                    publishYear: undefined,
                    isBiography: undefined,
                }
            }
            break

        case 'default':
    }

    return ITEM
}


export const emptyEntityItemService = {
    get
}