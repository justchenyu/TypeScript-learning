{
    // 1. 字面量类型 主要包括字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型，它们可以直接作为类型标注
    const str: "linbudu" = "linbudu";
    const num: 599 = 599;
    const bool: true = true;

    // 2. 联合类型 代表了一组类型的可用集合
    interface Tmp {
        mixed: true | string | 599 | {} | (() => {}) | (1 | 2)
    }

    // 联合类型的常用场景之一是通过多个对象类型的联合，来实现手动的互斥属性，即这一属性如果有字段1，那就没有字段2：
    interface Tmp {
        user:
            | {
            vip: true;
            expires: string;
        }
            | {
            vip: false;
            promotion: string;
        };
    }

    declare var tmp: Tmp;

    if (tmp.user.vip) {
        console.log(tmp.user.expires);
    }

    // 对象字面量类型
    {
        interface Tmp {
            obj: {
                name: "linbudu",
                age: 18
            }
        }

        const tmp: Tmp = {
            obj: {
                name: "linbudu",
                age: 18
            }
        }
    }
}