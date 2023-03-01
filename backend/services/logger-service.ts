import fs from "fs"
import { asyncLocalStorage } from "./als-service"


const LOG_DIR = './logs'
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR)

const getTime = () => new Date().toLocaleString('en')

const isError = (error: Error) => (error && error.stack && error.message)


const doLog = (type: string, ...args: any) => {
    const strs = args.map((arg: any) =>
        (typeof arg === 'string' || isError(arg)) ? arg : JSON.stringify(arg)
    )

    let line = strs.join(' | ')
    const store = asyncLocalStorage.getStore() as any
    const userId = store?.loggedinUser?._id
    const str = userId ? `(userId: ${userId})` : ''
    line = `${getTime()} - ${type} - ${line} ${str}\n`
    console.log(line)
    fs.appendFile('./logs/backend.log', line, (err) => {
        if (err) console.log('FATAL: cannot write to log file')
    })
}


export const loggerService = {
    debug(...args: any) {
        if (process.env.NODE_NEV === 'production') return
        doLog('DEBUG', ...args)
    },
    info(...args: any) {
        doLog('INFO', ...args)
    },
    warn(...args: any) {
        doLog('WARN', ...args)
    },
    error(...args: any) {
        doLog('ERROR', ...args)
    }
}