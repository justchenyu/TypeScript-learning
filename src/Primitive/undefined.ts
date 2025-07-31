{
    // 在 JavaScript 中，null 与 undefined 分别表示“这里有值，但是个空值”和“这里没有值”。
    // 而在 TypeScript 中，null 与 undefined 类型都是有具体意义的类型。
    // 也就是说，它们作为类型时，表示的是一个有意义的具体类型值。
    // 这两者在没有开启 strictNullChecks 检查的情况下，会被视作其他类型的子类型，比如 string 类型会被认为包含了 null 与 undefined 类型：
    const var1: undefined = undefined;
    // 仅在关闭 strictNullChecks 时成立
    const var2: string = undefined;
}