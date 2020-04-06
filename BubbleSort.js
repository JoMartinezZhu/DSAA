/**
 * n个元素的需要 n-1 趟
 * 每趟需要比较 n-m 次 ，及 第m 趟，需要比较 n-m 趟
 * @param {Array} array
 */
function BubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

// 改进优化
// 在冒泡排序过程中，每一趟都会把最大值找出来，然后放到最后，与此同时也会理顺部分其他元素，当出现一次不用交换的一趟排序后，说明所有元素的顺序都已经排好
// hasSwap 作为标志，表示是否继续跑趟，交换数据
function BubbleSortOptimization(array) {
    let hasSwap = true;
    for (let i = 0; i < array.length - 1 && hasSwap; i++) {
        hasSwap = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                hasSwap = true;
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

let arr = new Array(3, 1, 2, 8, 5, 10, 1, 9);

BubbleSortOptimization(arr);

console.log("result :", arr);
