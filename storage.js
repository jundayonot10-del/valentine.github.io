function saveChoice(key, values) {
    localStorage.setItem(key, JSON.stringify(values));
}

function getChoice(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
