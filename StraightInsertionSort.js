/**
 * 直接插入排序
 * Straight Insertion Sort
 */

// 无哨兵
function StraightInsertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        for (let j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
            array[j] = temp;
        }
    }
}

function StraightInsertionSort2(array) {
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        for (; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = temp;
        }
        array[j + 1] = temp;
    }
}

function StraightInsertionSortUpdate(array) {
    let temp;
    let len = array.length;
    for (let i = 1; i < len; i++) {
        temp = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
}

// 带 哨兵 的 直接插入排序，代替 j>=0 && array[j]>temp 这个条件
function StraightInsertionSortWithSentry(array) {
    array.unshift(0); // 因为要使用哨兵 array[0],所以需要初始化原数组,给原数组增加一个存储空间 array[0]
    for (let i = 2; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            array[0] = array[i];
            let j = i - 1;
            for (; array[j] > array[0]; j--) {
                array[j + 1] = array[j];
            }
            array[j + 1] = array[0];
        }
    }
}

// 折半插入排序
function StarightInsertionSortMid(array) {
    array.unshift(0);
    for (let i = 2; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            array[0] = array[i];
            let low = 1;
            let high = i - 1;
            // 找到要插入的位置
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (array[mid] < array[0]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
            let j = i - 1;
            for (; j >= high + 1; j--) {
                array[j + 1] = array[j];
            }
            array[j + 1] = array[0];
        }
    }
    array.shift();
}

function StaightInsertionSortWithHalf(array) {
    array.unshift(0);
    for (let i = 2; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
            array[0] = array[i];
            let low = 1;
            let high = i - 1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                if (array[mid] > array[0]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            let j = i - 1; // low <= j < i
            for (; j >= low; j--) {
                array[j + 1] = array[j];
            }
            array[j + 1] = array[0];
        }
    }
    array.shift();
}

let arr = new Array(1, 1, 2, 3, 5, 8, 9, 10);

StaightInsertionSortWithHalf(arr);

console.log("result :", arr);
