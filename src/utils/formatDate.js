
export function formatDate(dateInput) {
    // YEAR/MM/DD
    try {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date(`${dateInput}`);
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const day = date.getDate();
        const format_month = month < 10 ? `0${month}` : month;
        const format_date = day < 10 ? `0${day}` : day;
        // const res = `${year}-${format_month}-${format_date}`;
        const res = `${format_month} ${format_date}, ${year}`;
        return res
    }
    catch (err) {
        return ``;
    }
}