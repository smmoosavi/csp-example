import chalk from 'chalk'
import { getValue, setValue } from './api'
import { networkDelay, timeout } from './delay';
import { REQUEST_DELAY } from './constants'
import { log } from './utils'

const update = async (i) => {
    await setValue((await getValue(i)) + 1, i)
}

const handleReqeust = async (i) => {
    log(i, 'start')
    await update(i)
    log(i, 'end')
}

const main = async () => {
    for (let i = 0; i < 100; i++) {
        const d = await networkDelay(REQUEST_DELAY)
        log(i, 'delay', chalk.gray(d + 'ms'))
        handleReqeust(i) // without awit :D
    }
    await timeout(5 * REQUEST_DELAY)
    console.log(await getValue(0))
}

main()
