{
    // 在 TypeScript 中，typeof 操作符有两种不同的用法，分别用于 值空间（Value Space） 和 类型空间（Type Space）。

    // 1. 运行时 typeof（值空间）
    // 与 JavaScript 的行为完全相同，返回值的类型字符串（如 "string"、"object" 等）。在编译后会被保留在生成的 JavaScript 代码中。
    const str = "hello";
    console.log(typeof str); // 输出 "string"（运行时检查）

    // 2. 类型查询 typeof（类型空间）
    // TypeScript 独有的功能，用于在类型上下文中获取变量或属性的静态类型（编译时类型检查）。不会生成实际的 JavaScript 代码。
    const person = {name: "Alice", age: 30};

    // 用 typeof 提取 person 的类型
    type PersonType = typeof person;
    // 等价于 { name: string; age: number; }

    const anotherPerson: PersonType = {
        name: "Bob",
        age: 25
    }; // ✅ 类型匹配

    // 💡 常见使用场景
    // 1. 提取对象结构
    const config = { width: 100, height: 200 };
    type Config = typeof config; // { width: number; height: number }

    // 2. 提取函数签名
    function greet(name: string) {
        return `Hello, ${name}!`;
    }

    type GreetFn = typeof greet; // (name: string) => string

    // 3. 结合 keyof 获取键名联合类型
    const colors = { red: "#FF0000", green: "#00FF00" };
    type ColorKey = keyof typeof colors; // "red" | "green"

    // 4. 与 ReturnType 等工具类型配合
    type GreetReturn = ReturnType<typeof greet>; // string

    // ⚠️ 注意事项
    // ⚠️ ⚠️ ⚠️ 类型空间 typeof 只能用于标识符：⚠️ ⚠️ ⚠️
    // type A = typeof Math.random; // ✅ 正确
    // type B = typeof Math.random(); // ❌ 错误！不能用于表达式
}