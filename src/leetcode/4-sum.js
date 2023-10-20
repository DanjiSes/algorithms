// https://youtu.be/yBbF4KsYg1w

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    // Сортирую массив
    nums.sort((a, b) => a - b);

    const result = [];
    
    // Ставлю указатель a в начало массива который будет двигаться не доходя до последних 2 элементов
    for (let a = 0; a <  nums.length - 3; a++) {
      if (a > 0 && nums[a] === nums[a - 1]) continue; // Если предыдущий элемент a равен текущему то пропускаю итерацию
        
      // Ставлю указатель b который идет после a и до предпоследнего элемента
      for (let b = a + 1; b <  nums.length - 2; b++) {
        if (b > a + 1 && nums[b] === nums[b - 1]) continue; // Skip duplicate elements for b
        // Итого на этом шаге я получаю два числа и их сумму - и мне  нужно найти вторую пару
        const targetSum = target - nums[a] - nums[b];

        // Ставлю указатель left на один правее второго числа
        let left = b + 1;
        // Ставлю указатель right на конец массива
        let right =  nums.length - 1;

        // Запускаю ибнарный поиск
        while (left < right) {
          const currentSum = nums[left] + nums[right];
  
          if (currentSum === targetSum) {
            // Если сумма двух вторых чисел равна искомой то добавляю ее в массив результатов
            result.push([nums[a], nums[b], nums[left], nums[right]]);
            // и двигаю указатели
            left++;
            right--;
            
            // пропускаю все повторяющиеся элементы
            while (left < right && nums[left] === nums[left - 1]) left++; // Skip duplicate elements for left
            while (left < right && nums[right] === nums[right + 1]) right--; // Skip duplicate elements for right
          } else if (currentSum < targetSum) {
            // если текущая сумма меньше чем искомая то двигаю левый указатель
            left++;
          } else {
            // иначе текущая сумма больше искомой тогда я двигаю правый указатель
            right--;
          }
        }
      }
    }
  
    return result;
  }

module.exports = fourSum