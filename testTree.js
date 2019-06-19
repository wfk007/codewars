const treeData = {
  title: "p",
  value: 0,
  children: [
    {
      title: "p_c1",
      value: 0,
      children: [
        {
          title: "p_c1_c1",
          value: 0
        },
        {
          title: "p_c1_c2",
          value: 0
        }
      ]
    },
    {
      title: "p_c2",
      value: 0,
      children: [
        {
          title: "p_c2_c1",
          value: 0
        },
        {
          title: "p_c2_c2",
          value: 0
        }
      ]
    }
  ]
};
const recurrence = function(treeData, name) {
  let flag = false;
  if (treeData.title === name) {
    ++treeData.value;
    flag = true;
  } else {
    if (treeData.children && treeData.children.length !== 0) {
      treeData.children.forEach(v => {
        if (recurrence(v, name)) {
          treeData.value++;
          flag = true;
        }
      });
    }
  }
  return flag;
};

(function solution() {
  const name = {
    zhangsan: "p_c1_c1",
    lisi: "p_c1_c1",
    wangwu: "p_c2_c1",
    zhaoliu: "p_c2_c2",
    jx: "p_c1_c2",
    wfk: "p_c2_c2"
  };
  for (let i in name) {
    recurrence(treeData, name[i]);
  }
  console.log(treeData);
})();
