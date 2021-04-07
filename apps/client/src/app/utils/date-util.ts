const months = [
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'Jun',
'Jul',
'Aug',
'Sep',
'Oct',
'Nov',
'Dec'
]

export function getFormattedDate(unixDate: number) {
    const milliseconds = unixDate * 1000
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.getMonth();
    return day + ' ' + months[month];
}
