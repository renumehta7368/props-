function rotateToLeft(arr, n, k) {
//     if (n === 0) return;
//     k = k % n;
//     if (k > n) return;
//     const temp = new Array(k);
//     for (let i = 0; i < k; i++) {
//         temp[i] = arr[i];
//     }
//     for (let i = 0; i < n - k; i++) {
//         arr[i] = arr[i + k];
//     }
//     for (let i = n - k; i < n; i++) {
//         arr[i] = temp[i - n + k];
//     }
// }


//     const n = 7;
//     const arr = [1, 2, 3, 4, 5, 6, 7];
//     const k = 2;
//     rotateToLeft(arr, n, k);
//     console.log("After Rotating the elements to left ");
//     console.log(arr.join(" "));

