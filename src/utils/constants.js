export const options = {
    method: 'GET',
    url: 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users',
    headers: {
        'Content-Type': 'application/json',
        // 'Prefer': 'code=200, dynamic=true'
        // 'Prefer': 'code=500, dynamic=true'
    },
};

export const departmentsMap = new Map([
    ['android', 'Android'],
    ['ios', 'iOS'],
    ['design', 'Дизайн'],
    ['management', 'Менеджмент'],
    ['qa', 'QA'],
    ['back_office', 'Бэк-офис'],
    ['frontend', 'Frontend'],
    ['hr', 'HR'],
    ['pr', 'PR'],
    ['backend', 'Backend'],
    ['support', 'Техподдержка'],
    ['analytics', 'Аналитика']
]);