function queueTime(customers, n) {
  //TODO
  /**
   * 判断有几个柜台可用（为 0）
   * 从队列中取出小于等于柜台数的人
   * 计算所有柜台中最小的数并和结果相加
   * 所有柜台的数减去最小的数，并不断循环，直到队列为空
   */
  let totalTime = 0;

  //初始化长度为 n 的数组，并都用 0 填充
  //let tills = Array(n).fill(0);
  let tills = [];
  for (let i = 0; i < n; i++) {
    tills.push(0);
  }
  while (customers.length > 0) {
    tills = tills.map(v =>
      v === 0 && customers.length > 0 ? customers.shift() : v
    );
    let min = Math.min(...tills);
    totalTime += min;
    tills = tills.map(v => v - min);
  }
  return totalTime + Math.max(...tills);
}
/**
 * Best Practice
 */
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
console.log(queueTime([], 1));
console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
console.log(queueTime([1, 2, 3, 4, 5], 100));
[10, 2, 3, 3];
[2, 3, 10];
