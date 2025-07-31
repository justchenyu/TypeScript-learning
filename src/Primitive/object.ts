{
    // 1.修饰接口属性
    interface IDescription {
        // 防止对象的属性被再次赋值
        readonly name: string;
        age: number;
        // 可选属性
        like?: string;
    }

    // 2.type 与 interface
    // interface 用来描述对象、类的结构
    // 而type类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型

    // 3. object、Object 以及 { }
    // Object: 原型链的顶端是 Object 以及 Function
    // 这也就意味着所有的原始类型与对象类型最终都指向 Object，在 TypeScript 中就表现为 Object 包含了所有的类型：

    // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
    const tmp1: Object = undefined;
    const tmp2: Object = null;
    const tmp3: Object = void 0;

    const tmp4: Object = 'linbudu';
    const tmp5: Object = 599;
    const tmp6: Object = {name: 'linbudu'};
    const tmp7: Object = () => {
    };
    const tmp8: Object = [];

    // object: 代表所有非原始类型的类型，即数组、对象与函数类型这些：
    const tmp17: object = undefined;
    const tmp18: object = null;
    const tmp19: object = void 0;

    const tmp20: object = 'linbudu';  // X 不成立，值为原始类型
    const tmp21: object = 599; // X 不成立，值为原始类型

    const tmp22: object = {name: 'linbudu'};
    const tmp23: object = () => {
    };
    const tmp24: object = [];

    // {}: 最后是{}，一个奇奇怪怪的空对象，如果你了解过字面量类型，可以认为{}就是一个对象字面量类型（对应到字符串字面量类型这样）
    // 否则，你可以认为使用{}作为类型签名就是一个合法的，但内部无属性定义的空对象，这类似于 Object（想想 new Object()）
    // 它意味着任何非 null / undefined 的值

    const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
    const tmp26: {} = null;
    const tmp27: {} = void 0; // void 0 等价于 undefined

    const tmp28: {} = 'linbudu';
    const tmp29: {} = 599;
    const tmp30: {} = { name: 'linbudu' };
    const tmp31: {} = () => {};
    const tmp32: {} = [];
    // 这是因为它就是纯洁的像一张白纸一样的空对象，上面没有任何的属性（除了 toString 这种与生俱来的）
    tmp30.age = 18; // X 类型“{}”上不存在属性“age”。

    // ⚠️ 注意事项
    // 在任何时候都不要，不要，不要使用 Object 以及类似的装箱类型。
    // 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。但我更推荐进一步区分，也就是使用 Record<string, unknown> 或 Record<string, any> 表示对象，unknown[] 或 any[] 表示数组，(...args: any[]) => any表示函数这样。
    // 我们同样要避免使用{}。{}意味着任何非 null / undefined 的值，从这个层面上看，使用它和使用 any 一样恶劣。
}