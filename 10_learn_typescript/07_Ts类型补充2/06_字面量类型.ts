// Hello World 也是可以作为类型的 叫做字面量类型
const message:"Hello World" = "Hello World"


// 字面量类型的意义 通常与联合类型一起使用

type AlignComment = "left"|"right"|"center"

let align: AlignComment = "left"
align = "right"
align = "center"
// align = "haha"  这里是不允许复制AlignComment外其他值的