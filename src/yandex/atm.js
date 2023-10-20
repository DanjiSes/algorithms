/**
 * Задача банкомат
 * 
 * тебе даны вот такие данные
 * 
 * const limitations = { 5000: 0, 2000: 3, 1000: 2, 500: 4, 100: 2, 50: 1 } - это сколько в банкомате есть денег
 * 
 * const nominals = [5000, 2000, 1000, 500, 100, 50] - и массив наминалов
 * 
 * test(atm(1550, limitations, nominals), 1550)
 * test(atm(1000000, limitations, nominals), 'Ошибка. Не хватает купюр')
 * test(atm(999, limitations, nominals), 'Ошибка. Не валидная сумма')
 * test(atm(1050, limitations, nominals), 'Ошибка. Не хватает купюр')
 * test(atm(1500, limitations, nomials), 1500)
 * 
 * Тебе нужно мутировать объект limitations записывая в него новые кол-ва номиналов когда выдеешь сумма из банкомата
 * 
 * Приоритет отдается крупному номиналу
 */

function atm(sum, limitations, nominals) {
    if ( sum % nominals[nominals.length-1] !== 0 ) return "Ошибка. Не валидная сумма"
    let limSum = 0
    Object.entries(limitations).forEach(
        ([key, value]) => {
            limSum += (key * value)      
        }
    )
    if ( sum > limSum) return "Ошибка. Не хватает купюр"
    let currentSum = sum
    nominals.forEach((item) => {
        if ( currentSum !== 0 &&
            currentSum >= item &&
            limitations[item] !== 0) {
            limitations[item] = limitations[item] - 1;
            currentSum = currentSum - item;
        }
    })
    return sum
}

module.exports = atm