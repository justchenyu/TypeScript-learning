{
    // 使用元组确实能帮助我们进一步提升数组结构的严谨性
    const arr6: [string, number?, boolean?] = ['linbudu'];
    // 下面这么写也可以
    // const arr6: [string, number?, boolean?] = ['linbudu', , ,];
    type TupleLength = typeof arr6.length; // 1 | 2 | 3
    // 具名元组
    const arr7: [name: string, age: number, male?: boolean] = ['linbudu', 599, true];
}