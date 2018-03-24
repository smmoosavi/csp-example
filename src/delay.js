import RNG from 'rng-js'

const rng = new RNG()

export const timeout = async (d) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(d)
        }, d)
    })
}

export const networkDelay = async (m) => m && timeout(Math.ceil(rng.exponential() * m))
