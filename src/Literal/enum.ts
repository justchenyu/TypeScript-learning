{
    // 1. 枚举enum 枚举是双向映射的，即你可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员
    // 但需要注意的是，仅有值为数字的枚举成员才能够进行这样的双向枚举，字符串枚举成员仍然只会进行单次映射：
    enum Items {
        Foo,
        Bar,
        Baz
    }

    const fooValue = Items.Foo; // 0
    const fooKey = Items[0]; // "Foo"

    // 2. 常量枚举
    // 它和普通枚举的差异主要在访问性与编译产物。
    // 对于常量枚举，你只能通过枚举成员访问枚举值（而不能通过值访问成员）。
    // 同时，在编译产物中并不会存在一个额外的辅助对象（如上面的 Items 对象），对枚举成员的访问会被直接内联替换为枚举的值。
    {
        const enum Items {
            Foo,
            Bar,
            Baz
        }
        const fooValue = Items.Foo; // 0
    }
}