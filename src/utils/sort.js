const sortByName = (store) => [...store].sort((a, b) => a.firstName.localeCompare(b.firstName));
const withFieldDate = (field) => (a, b) => a[field].getTime() - b[field].getTime();
const sortByBirthDay = (store) => {
    const currentYear = new Date().getFullYear();
    const now = Date.now();
    return [...store].map(item => {
        const date = new Date(item.birthday);
        const birthdayDate = new Date(currentYear, date.getMonth(), date.getDate());
        if (birthdayDate.valueOf() < now) {
            birthdayDate.setFullYear(currentYear + 1);
        }
        return { ...item, birthdayDate };
    }).sort(withFieldDate('birthdayDate'));
}
export const sort = { name: sortByName, birthday: sortByBirthDay };