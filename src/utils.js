import _ from 'lodash'

export const log = (i, ...strs) => {
    console.log(_.padStart('' + i, i + 4), ...strs)
}
