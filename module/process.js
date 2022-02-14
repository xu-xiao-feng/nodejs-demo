// 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。

// agrv 属性，返回一个数组
process.argv

// 执行脚本的二进制文件的绝对路径
process.execPath

// 当前shell的环境变量，返回一个对象
process.env

// node版本
process.version

// 包括node版本和依赖
process.versions

// 当前进程号
process.pid

// 进程名
process.title

// 当前cpu架构
process.arch

// 当前平台的系统
process.platform

// 当前进程的工作目录
process.cwd()

// 结束进程
process.kill(pid[, signal])

// 内存使用情况
process.memoryUsage()

// cpu使用情况
process.cpuUsage()

// 事件循环
process.nextTick(callback)

// 进程的掩码
process.umask([mask])

// node运行事件
process.uptime()
