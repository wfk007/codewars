function mix(s1, s2) {
  //"Are they here"
  // your code
  const map1 = new Map(),
    map2 = new Map();

  [...s1].map(item => {
    if (/[a-z]/.test(item)) {
      if (!map1.has(item)) {
        map1.set(item, 1);
      } else {
        map1.set(item, map1.get(item) + 1);
      }
    }
  });
  [...s2].map(item => {
    if (/[a-z]/.test(item)) {
      if (!map2.has(item)) {
        map2.set(item, 1);
      } else {
        map2.set(item, map2.get(item) + 1);
      }
    }
  });
  const unionArray = [];
  const set = new Set();

  map1.forEach((value, key) => {
    if (value > 1) {
      if (!map2.has(key)) {
        unionArray.push({ key, value });
      } else {
        let value2 = map2.get(key);
        if (value < value2) {
          map1.delete(key);
        }
        if (value > value2) {
          map2.delete(key);
        }
        unionArray.push({
          key,
          value: Math.max(value, value2)
        });
      }
      set.add(key);
    } else {
      map1.delete(key);
    }
  });
  map2.forEach((value, key) => {
    if (value > 1) {
      if (!map1.has(key) && !set.has(key)) {
        unionArray.push({ key, value });
      }
    } else {
      map2.delete(key);
    }
  });
  const sortedUnionArray = unionArray.sort((a, b) => {
    if (a.value > b.value) {
      return -1;
    } else if (a.value < b.value) {
      return 1;
    } else {
      let keyAInMap1 = map1.get(a.key),
        keyAInMap2 = map2.get(a.key),
        keyBInMap1 = map1.get(b.key),
        keyBInMap2 = map2.get(b.key);

      if (keyAInMap1 && keyAInMap2 && keyBInMap1 && keyBInMap2) {
        //字符串排序
        return a.key > b.key ? 1 : -1;
      } else if (keyAInMap1 && keyAInMap2 && (!keyBInMap1 || !keyBInMap2)) {
        return 1;
      } else if ((!keyAInMap1 || !keyAInMap2) && keyBInMap1 && keyBInMap2) {
        return -1;
      } else if (keyAInMap2 && keyBInMap1) {
        return 1;
      } else if (keyAInMap1 && keyBInMap2) {
        return -1;
      } else {
        //同时存在于 map1 和 map2
        return a.key > b.key ? 1 : -1;
      }
    }
  });
  return sortedUnionArray.reduce((acc, cur, index) => {
    let str = "";
    if (map1.has(cur.key) && !map2.has(cur.key)) {
      str = "1:";
    } else if (!map1.has(cur.key) && map2.has(cur.key)) {
      str = "2:";
    } else {
      str = "=:";
    }

    return (
      acc +
      `${str}${cur.key.repeat(cur.value)}${
        index !== sortedUnionArray.length - 1 ? "/" : ""
      }`
    );
  }, "");
}
/**
 * 过滤掉 s1 和 s2中的非小写字母
 * 按照字母出现次数进行排序，过滤掉<=1次的字符，并且标记是否 s1 和 s2 中都有
 * 先按照次数进行排序，次数相同的根据字符串大小进行排序
 *
 * 每个字母在 s1 和 s2 中出现的次数
 * 字母出现的总次数
 *
 * obj = {
 *  a: {1:0,2:0}
 *  b: [9,0]
 * }
 */
console.log(mix("Are they here", "yes, they are here"));
console.log(mix("looping is fun but dangerous", "less dangerous than coding"));
console.log(mix(" In many languages", " there's a pair of functions"));
console.log(mix("Lords of the Fallen", "gamekult"));
console.log(mix("codewars", "codewars"));
console.log(mix("A generation must confront the looming ", "codewarrs"));


const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function mix(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split("").filter(x => x === char).length,
        s2Count = s2.split("").filter(x => x === char).length,
        maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? "2" : maxCount > s2Count ? "1" : "="
      };
    })
    .filter(c => c.count > 1)
    .sort(
      (objA, objB) =>
        objB.count - objA.count ||
        (objA.src + objA.char > objB.src + objB.char ? 1 : -1)
    )
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join("/");
}
