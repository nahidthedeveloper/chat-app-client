import moment from 'moment'

export const formattedDateTime = (props) => {
    return moment(props).calendar()
}
