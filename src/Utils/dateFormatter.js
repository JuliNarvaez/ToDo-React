export default function formatDate(input) {
    if (!input) return ''
    const date = new Date(input)
    const day = date.getDate();
    const year = date.getFullYear();
    const monthNum = date.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${day} ${months[monthNum]} ${year}`
}