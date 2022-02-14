const os = require('os')

// 系统主机名
console.log('os.hostname()', os.hostname())

// 系统名
console.log('os.type()', os.type())

// 编译时的操作系统名
console.log('os.platform()', os.platform())

// cpu架构
console.log('os.arch()', os.arch())

// 系统发型版本
console.log('os.release()', os.release())

// 系统运行事件，单位秒
console.log('os.uptime()', os.uptime())

// 系统总内存量
console.log('os.totalmem()', os.totalmem())

// 系统剩余内存量
console.log('os.freemem()', os.freemem())

// 系统每个cpu内核的信息
console.log('os.cpus()', os.cpus())

// 系统网络接口列表
console.log('os.networkInterfaces()', os.networkInterfaces())
