// 插入排序

// 1.直接插入排序
function StraightInsertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];

        // 第一种
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;

        // 第二种
        // let j = i - 1;
        // for (; j >= 0 && array[j] > temp; j--) {
        //     array[j + 1] = array[j];
        // }
        // array[j + 1] = temp;

        // 第三种
        // for (let j = i - 1; j >= 0 && array[j] > temp; j--) {
        //     array[j + 1] = array[j];
        //     array[j] = temp;
        // }
    }
}

// 2.带哨兵的直接插入排序,优化数组越界
function StraightInsertionSortWithSentry(array) {
    array.unshift(0); // 初始化，把数组0位置的当作临时存储空间
    for (let i = 2; i < array.length; i++) {
        array[0] = array[i];

        let j = i - 1;

        // for (; array[j] > array[0]; j--) {
        //     array[j + 1] = array[j];
        // }

        while (array[j] > array[0]) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = array[0];
    }
    array.shift(); // 还原数组
}

// 3.折半插入排序
function StraightInsertionSortWithMiddle(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        let low = 0;
        let high = i - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            // 由小到大的顺序
            if (array[mid] > temp) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }

            // 由大到小的顺序
            // if (array[mid] > temp) {
            //     low = mid + 1;
            // } else {
            //     high = mid - 1;
            // }
        }

        let j = i - 1;
        while (j >= low) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
}

// 冒泡排序
function BubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // 由大到小

            // if (array[j] < array[j+1]) {
            //     let temp = array[j];
            //     array[j] = array[j+1];
            //     array[j+1] = temp;
            // }

            // 由小到大

            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

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

let arr = new Array(7, 3, 2, 8, 5, 10, 1, 9);

BubbleSortOptimization(arr);

console.log('result :', arr);
