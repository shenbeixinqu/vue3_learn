type Method = "GET"|"POST"

function request(urL:string,method:Method ){}

type Request = {
    url: string
    method: Method
} 

// 方法1  指定类型
const options:Request = {
    url:"www.baidu.com",
    method:"GET"
}

request(options.url, options.method)

// 方法2 断言成具体类型
request(options.url, options.method as Method)

export {}