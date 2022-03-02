export const getTextBtnCorrect = (objectsCount) => {
    return objectsCount > 4
        ? `Показать ${objectsCount} объектов`
        : objectsCount > 1
        ? `Показать ${objectsCount} объекта`
        : objectsCount > 0
        ? `Показать ${objectsCount} объект`
        : objectsCount === 0
        ? 'Нет объектов с такими параметрами'
        : ''
}
