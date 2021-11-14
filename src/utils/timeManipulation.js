export const formatDateNumericInRussian = (date = new Date()) => new Intl.DateTimeFormat('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}).format(new Date(date)).slice(0, -2);

export const calculateAgeInRussian = (date = new Date()) => {
    const year = new Date().getFullYear() - new Date(date).getFullYear();
    return `${year} ${year%10 === 1 ? 'год' : year % 10 < 5 ? 'года' : 'лет'}`;
};

export const getBirthdayMonthDate = (date = new Date()) => new Intl.DateTimeFormat('ru-RU', {
    month: 'long',
    day: 'numeric',
}).format(new Date(date));