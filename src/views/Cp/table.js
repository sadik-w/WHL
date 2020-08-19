var columns=[
  {
    title: '序号',
    slot: 'id'
  },
  {
    title: '姓名',
    slot: 'name'
  },
  {
    title: '年龄',
    slot: 'age',
    sortable: true
  },
  {
    title: '出生日期',
    slot: 'birthday'
  },
  {
    title: '地址',
    slot: 'address'
  },
  {
    title: '操作',
    slot: 'action'
  }
]

var data=[
  {
    id:0,
    name: '王小明',
    age: 18,
    birthday: '1970-7-10',
    address: '北京市朝阳区芍药居'
  },
  {
    id:1,
    name: '张小刚',
    age: 25,
    birthday: '1998-8-19',
    address: '北京市海淀区西二旗'
  },
  {
    id:3,

    name: '李小红',
    age: 30,
    birthday: '1998-8-19',
    address: '上海市浦东新区世纪大道'
  },
  {
    id:4,
    name: '周小伟',
    age: 26,
    birthday: '1998-8-19',
    address: '深圳市南山区深南大道'
  },
  {
    id:5,
    name: '周小伟',
    age: 26,
    birthday: '1998-8-19',
    address: '深圳市南山区深南大道'
  },
  {
    id:6,
    name: '周小伟',
    age: 26,
    birthday: '1998-8-19',
    address: '深圳市南山区深南大道'
  },
  {
    id:7,
    name: '周小伟',
    age: 26,
    birthday: '1998-8-19',
    address: '深圳市南山区深南大道'
  },
  {
    id:8,
    name: '周小伟',
    age: 26,
    birthday: '1998-8-19',
    address: '深圳市南山区深南大道'
  },
  {
    id:9,
    name: '周小伟',
    age: 26,
    birthday: '1998-8-19',
    address: '深圳市南山区深南大道'
  }
]

var columns8=[
  {
      "title": "Name",
      "key": "name",
      "fixed": "left",
      "width": 200
  },
  {
      "title": "Show",
      "key": "show",
      "width": 150,
      "sortable": true,
      filters: [
          {
              label: 'Greater than 4000',
              value: 1
          },
          {
              label: 'Less than 4000',
              value: 2
          }
      ],
      filterMultiple: false,
      filterMethod (value, row) {
          if (value === 1) {
              return row.show > 4000;
          } else if (value === 2) {
              return row.show < 4000;
          }
      }
  },
  {
      "title": "Weak",
      "key": "weak",
      "width": 150,
      "sortable": true
  },
  {
      "title": "Signin",
      "key": "signin",
      "width": 150,
      "sortable": true
  },
  {
      "title": "Click",
      "key": "click",
      "width": 150,
      "sortable": true
  },
  {
      "title": "Active",
      "key": "active",
      "width": 150,
      "sortable": true
  },
  {
      "title": "7, retained",
      "key": "day7",
      "width": 150,
      "sortable": true
  },
  {
      "title": "30, retained",
      "key": "day30",
      "width": 150,
      "sortable": true
  },
  {
      "title": "The next day left",
      "key": "tomorrow",
      "width": 150,
      "sortable": true
  },
  {
      "title": "Day Active",
      "key": "day",
      "width": 150,
      "sortable": true
  },
  {
      "title": "Week Active",
      "key": "week",
      "width": 150,
      "sortable": true
  },
  {
      "title": "Month Active",
      "key": "month",
      "width": 150,
      "sortable": true
  }
]

var data7=[
  {
      "name": "Name1",
      "fav": 0,
      "show": 7302,
      "weak": 5627,
      "signin": 1563,
      "click": 4254,
      "active": 1438,
      "day7": 274,
      "day30": 285,
      "tomorrow": 1727,
      "day": 558,
      "week": 4440,
      "month": 5610
  },
  {
      "name": "Name2",
      "fav": 0,
      "show": 4720,
      "weak": 4086,
      "signin": 3792,
      "click": 8690,
      "active": 8470,
      "day7": 8172,
      "day30": 5197,
      "tomorrow": 1684,
      "day": 2593,
      "week": 2507,
      "month": 1537
  },
  {
      "name": "Name3",
      "fav": 0,
      "show": 7181,
      "weak": 8007,
      "signin": 8477,
      "click": 1879,
      "active": 16,
      "day7": 2249,
      "day30": 3450,
      "tomorrow": 377,
      "day": 1561,
      "week": 3219,
      "month": 1588
  },
  {
      "name": "Name4",
      "fav": 0,
      "show": 9911,
      "weak": 8976,
      "signin": 8807,
      "click": 8050,
      "active": 7668,
      "day7": 1547,
      "day30": 2357,
      "tomorrow": 7278,
      "day": 5309,
      "week": 1655,
      "month": 9043
  },
  {
      "name": "Name5",
      "fav": 0,
      "show": 934,
      "weak": 1394,
      "signin": 6463,
      "click": 5278,
      "active": 9256,
      "day7": 209,
      "day30": 3563,
      "tomorrow": 8285,
      "day": 1230,
      "week": 4840,
      "month": 9908
  },
  {
      "name": "Name6",
      "fav": 0,
      "show": 6856,
      "weak": 1608,
      "signin": 457,
      "click": 4949,
      "active": 2909,
      "day7": 4525,
      "day30": 6171,
      "tomorrow": 1920,
      "day": 1966,
      "week": 904,
      "month": 6851
  },
  {
      "name": "Name7",
      "fav": 0,
      "show": 5107,
      "weak": 6407,
      "signin": 4166,
      "click": 7970,
      "active": 1002,
      "day7": 8701,
      "day30": 9040,
      "tomorrow": 7632,
      "day": 4061,
      "week": 4359,
      "month": 3676
  },
  {
      "name": "Name8",
      "fav": 0,
      "show": 862,
      "weak": 6520,
      "signin": 6696,
      "click": 3209,
      "active": 6801,
      "day7": 6364,
      "day30": 6850,
      "tomorrow": 9408,
      "day": 2481,
      "week": 1479,
      "month": 2346
  },
  {
      "name": "Name9",
      "fav": 0,
      "show": 567,
      "weak": 5859,
      "signin": 128,
      "click": 6593,
      "active": 1971,
      "day7": 7596,
      "day30": 3546,
      "tomorrow": 6641,
      "day": 1611,
      "week": 5534,
      "month": 3190
  },
  {
      "name": "Name10",
      "fav": 0,
      "show": 3651,
      "weak": 1819,
      "signin": 4595,
      "click": 7499,
      "active": 7405,
      "day7": 8710,
      "day30": 5518,
      "tomorrow": 428,
      "day": 9768,
      "week": 2864,
      "month": 5811
  }
]

var columns11=[
  {
      title: 'ID',
      key: 'id'
  },
  {
      title: 'Name',
      key: 'name'
  },
  {
      title: 'Amount1',
      key: 'amount1'
  },
  {
      title: 'Amount2',
      key: 'amount2'
  },
  {
      title: 'Amount3',
      key: 'amount3'
  }
]
var data11=[
  {
      id: '100001',
      name: 'John Brown',
      amount1: '123',
      amount2: '1.2',
      amount3: 10
  }, {
      id: '100002',
      name: 'Jim Green',
      amount1: '234',
      amount2: '2.3',
      amount3: 11
  }, {
      id: '100003',
      name: 'Joe Black',
      amount1: '345',
      amount2: '3.4',
      amount3: 12
  }, {
      id: '100004',
      name: 'Jon Snow',
      amount1: '456',
      amount2: '4.5',
      amount3: 13
  }, {
      id: '100005',
      name: 'Jobs',
      amount1: '678',
      amount2: '5.6',
      amount3: 14
  }
]
export default
  {
    columns,data,columns8,data7,columns11,data11
 
  }　　