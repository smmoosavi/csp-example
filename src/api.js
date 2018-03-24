import chalk from 'chalk'
import { networkDelay } from './delay'
import { NET_DELAY } from './constants'
import { log } from './utils'

let value = 0

export const getValue = async (i) => {
    log(i, 'get req')
    const d1 = await networkDelay(NET_DELAY) // reqest delay
    let v = value // read server value
    log(i, 'get val', v, chalk.gray(d1 + 'ms'))
    const d2 = await networkDelay(NET_DELAY) // response delay
    log(i, 'get res', chalk.gray(d2 + 'ms'))
    return v
}

export const setValue = async (v, i) => {
    log(i, 'set req')
    const d1 = await networkDelay(NET_DELAY) // reqest delay
    value = v // write server value
    log(i, 'set val', v, chalk.gray(d1 + 'ms'))
    const d2 = await networkDelay(NET_DELAY) // response delay
    log(i, 'set res', chalk.gray(d2 + 'ms'))
}