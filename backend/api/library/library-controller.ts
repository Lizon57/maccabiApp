import escape from 'escape-html'
import { Sortby } from "../../models/entities/items/misc/sortby"
import { loggerService } from "../../services/logger-service"
import { libraryService } from "./library-service"


const get = async (req: any, res: any) => {
    loggerService.debug('Getting library')

    const filterBy = {
        pageName: req.query.fDisplayName,
        includeBranches: req.query.fBranchIds,
        writer: {
            type: +req.query.fWritersType,
            writers: req.query.fWriters
        },
        publisher: {
            type: +req.query.fPublishersType,
            publishers: req.query.fPublishers
        },
        pageCount: {
            type: +req.query.fPageCountType,
            count: req.query.fPageCount
        },
        publishYear: {
            type: +req.query.fPublishYearType,
            count: req.query.fPublishYear
        },
        isBiography: req.query.fBiography,
        isTranslated: req.query.fTranslated,
        isArchived: req.query.fArchived
    }

    const sortby: Sortby = {
        order: (req.query.sOrder === 'asc') ? 1 : -1,
        key: req.query.sKey
    }

    try {
        const library = await libraryService.query(filterBy, sortby)
        res.json(library)
    } catch (err) {
        loggerService.error('Failed to get library', err)
        res.status(500).send({ err: 'Failed to get library' })
    }
}


const getById = async (req: any, res: any) => {
    loggerService.debug('Getting library item by id')
    const id = req.params.id

    try {
        const item = await libraryService.getById(id)
        res.json(item)
    } catch (err) {
        loggerService.error(`Failed to get library item (${id})`, err)
        res.status(500).send({ err: 'Failed to get library item' })
    }
}


const save = async (req: any, res: any) => {
    loggerService.debug('Saving library item')

    try {
        const libraryItem = req.body
        if (libraryItem._id) {
            const savedLibraryItem = await libraryService.update(libraryItem)
            res.json(savedLibraryItem)
        } else {
            const addedLibraryItem = await libraryService.add(libraryItem)
            res.json(addedLibraryItem)
        }
    } catch (err) {
        loggerService.error('Failed to save library item', err)
        res.status(500).send({ err: 'Failed to save library item' })
    }
}


const removeById = async (req: any, res: any) => {
    loggerService.debug('Removing library item by id')
    const id = req.params.id

    try {
        const removedId = await libraryService.removeById(id)
        res.send(escape(removedId))
    } catch (err) {
        loggerService.error(`Failed to remove library item (${id})`, err)
        res.status(500).send({ err: 'Failed to remove library item' })
    }
}


export const libraryController = {
    get,
    getById,
    save,
    removeById
}
