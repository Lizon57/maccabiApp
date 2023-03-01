export type LibraryFilterby = {
    pageName?: string
    includeBranches?: string
    writer?: {
        type: number
        writers: string
    }
    publisher?: {
        type: number
        publishers: string
    }
    pageCount?: {
        type: number
        count: string
    }
    publishYear?: {
        type: number
        count: string
    }
    isBiography?: string
    isTranslated?: string
    isArchived?: string
}