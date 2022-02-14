// // __filename, 当前文件的绝对路径
// console.log('__filename', __filename)

// // __dirname，当前所在文件夹的绝对路径
// console.log('__dirname', __dirname)

// // setTimeout(cb,ms)，指定毫秒后指定指定函数
// // clearTimeout(t),停止setTimeout创建的定时器
// function print() {
//   console.log(new Date())
// }
// const t1 = setTimeout(print, 1000);
// clearTimeout(t)

// // setInterval(cb, ms)，定时器，不停的调用
// // clearInterval(t)，取消定时器
// const t2 = setInterval(print, 1000);
// clearInterval(t)

// console 控制台标准输出
// console.log([data][, ...])     
// 向标准输出流打印字符并以换行符结束。该方法接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。
// console.info([data][, ...])    
// 该命令的作用是返回信息性消息，这个命令与console.log差别并不大
// console.error([data][, ...])   输出错误消息的。
// console.warn([data][, ...])    输出警告消息。
// console.dir(obj[, options])    用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
// 	console.time(label)           输出时间，表示计时开始。
// console.timeEnd(label)         结束时间，表示计时结束。
// console.trace(message[, ...])  当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助
// console.assert(value[, message][, ...])用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

// process
process.memoryUsage()
process.cpuUsage()
process.cwd()
process.version
process.env
process.platform
