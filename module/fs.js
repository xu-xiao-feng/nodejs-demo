const fs = require('fs')
const filePath = __dirname + '/test.txt'
// 三种使用方式示例，promise，回调，同步
/**
 * fs.stat(path[, options], callback)
 * 查看文件状态
 * 不推荐打开、读写文件时使用 .stat 方法，而是在打开、读写文件时，抛出文件不可用的错误
 */
async function stat() {
  // promise 示例
  const stats1 = await fs.promises.stat(filePath)
  console.log('promise', stats1)

  // 回调示例
  fs.stat(filePath, (err, stats2) => {
    if (err) throw err
    console.log('callback', stats2)
  })

  // 同步示例
  const stats3 = fs.statSync(filePath)
  console.log('sync', stats3)
}

// /**
//  * fs.open(path[, flags[, mode]], callback)
//  * 打开文件，默认 r 模式
//  */
// /**
//  * fs.read(fd, buffer, offset, length, position, callback)
//  *    buffer <Buffer> | <TypedArray> | <DataView> 默认值: Buffer.alloc(16384)
//  *    offset <integer> 默认值: 0
//  *    length <integer> 默认值: buffer.byteLength
//  *    position <integer> | <bigint> 默认值: null
//  * 读取文件
//  */
// /**
//  * fs.readFile(path[, options], callback)
//  * 读取文件全部内容
//  */
// /**
//  * fs.close(fd, callback)
//  * 关闭文件
//  */
// const buf = new Buffer.alloc(1024)
// // fd的值为3，stdout、stdin 和 stderr 也被分配了一个文件描述符，分别问0、1、2
// // fd是一个文件描述符，用于访问回调中打开的文件，例如 fs.close(fd,callback)
// fs.open(filePath, 'r+', function (err, fd) {
//   if (err) throw err
//   console.log('文件打开成功')
//   // fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
//   //   if (err) throw err
//   //   if (bytes > 0) {
//   //     console.log(buf.slice(0, bytes).toString());
//   //     console.log('文件读取成功')
//   //   }
//   //   fs.close(fd, (err) => {
//   //     if (err) throw err
//   //     console.log('文件关闭成功')
//   //   })
//   // })
//   fs.readFile(fd, (err, data) => {
//     if (err) throw err
//     console.log(data.toString())
//   })
// })

/**
 * fs.writeFile(file, data[, options], callback)
 * fs.write(fd, buffer, offset, length[, position], callback)
 * fs.write(fd, data[, position[, encoding]], callback)
 * 写入文件，默认 w 模式，如果文件存在，旧内容会清空，写入新内容
 */
const buf = new Buffer.alloc(1024, 'xyz')
// fs.writeFile(filePath, 'this is new data', (err) => {
//   if (err) throw err
//   console.log('文件写入成功')
// })
fs.open(filePath, 'w+', (err, fd) => {
  if (err) throw err
  // fs.write(fd, buf, 0, buf.length, 6, (err) => {
  //   if (err) throw err
  // })
  fs.write(fd, '132465464', 6, (err) => {
    if (err) throw err
  })
})

// /**
//  * fs.ftruncate(fd, len, callback)
//  * 截取指定长度的文件，超出部分将被去除
//  */
// fs.open(filePath, 'r+', function (err, fd) {
//   if (err) throw err
//   // 截取文件
//   fs.ftruncate(fd, 10, function (err) {
//     if (err) throw err
//   });
// });

// /**
//  * fs.unlink(path, callback)
//  * 删除文件
//  */
// fs.unlink(filePath, (err) => {
//   if (err) throw err
// })

// /**
//  * fs.mkdir(path[, options], callback)
//  * options
//  *    recursive - 是否以递归的方式创建目录，默认为 false。
//  *    mode - 设置目录权限，默认为 0777。
//  * 创建目录
//  */
// fs.mkdir('dirName', (err) => {
//   if (err) throw err
// })

// /**
//  * fs.readdir(path, callback)
//  * 读取目录下的文件和文件夹，数组结构
//  */
// fs.readdir(__dirname, (err, files) => {
//   if (err) throw err
//   console.log(files)
// })

// /**
//  * fs.rmdir(path, callback)
//  * 删除目录
//  */
// fs.rmdir(__dirname + '/test', (err) => {
//   if (err) throw err
// })

// /**
//  * fs.access(path[, mode], callback)
//  * 测试用户对指定文件或目录的权限
//  */
// // 检查文件是否存在
// // 还有其他状态，如 fs.constants.R_OK，fs.constants.W_OK
// fs.access(filePath, fs.constants.F_OK, (err) => {
//   console.log(`${filePath}: ${err ? 'not exist' : 'exist'}`)
// })

// /**
//  * fs.appendFile(path, data[, options], callback)
//  * 异步追加数据到文件，如果文件不存在，则创建文件。
//  */
// fs.appendFile(filePath, 'this is added file', (err) => {
//   if (err) throw err
// })

// /**
//  * fs.chmod(path, mode, callback)
//  * 异步更改文件权限
//  */
// fs.chmod(filePath, '0o755', (err) => {
//   if (err) throw err
// })

// /**
//  * fs.chown(path, uid, gid, callback)
//  * 更改文件所有者和群组
//  */
// fs.chown(filepath, 1541, 999, (err) => {
//   if (err) throw err
// })


// 文件权限mode，第一位表示文件所有者权限，第二位表示指定群组权限，第三位表示其他人权限
// mode的值及其描述
// 7	可读、可写和可执行
// 6	可读和可写
// 5	可读和可执行
// 4	只读
// 3	可写和可执行
// 2	只写
// 1	只可执行
// 0	无权限

// 文件打开的行为
// flags的值及其描述
// r	  以读取模式打开文件。如果文件不存在抛出异常。
// r+   以读写模式打开文件。如果文件不存在抛出异常。
// rs	  以同步的方式读取文件。
// rs+  以同步的方式读取和写入文件。
// w	  以写入模式打开文件，如果文件不存在则创建。
// wx	  类似 'w'，但是如果文件路径存在，则文件写入失败。
// w+   以读写模式打开文件，如果文件不存在则创建。
// wx+  类似 'w+'， 但是如果文件路径存在，则文件读写失败。
// a	  以追加模式打开文件，如果文件不存在则创建。
// ax	  类似 'a'， 但是如果文件路径存在，则文件追加失败。
// a+   以读取追加模式打开文件，如果文件不存在则创建。
// ax+  类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。


// fs.access(path[, mode], callback)
// fs.appendFile(path, data[, options], callback)
// fs.chmod(path, mode, callback)
// fs.chown(path, uid, gid, callback)
// fs.close(fd[, callback])
// fs.copyFile(src, dest[, mode], callback)
// fs.cp(src, dest[, options], callback)
// fs.createReadStream(path[, options])
// fs.createWriteStream(path[, options])
// fs.exists(path, callback)
// fs.fchmod(fd, mode, callback)
// fs.fchown(fd, uid, gid, callback)
// fs.fdatasync(fd, callback)
// fs.fstat(fd[, options], callback)
// fs.fsync(fd, callback)
// fs.ftruncate(fd[, len], callback)
// fs.futimes(fd, atime, mtime, callback)
// fs.lchmod(path, mode, callback)
// fs.lchown(path, uid, gid, callback)
// fs.lutimes(path, atime, mtime, callback)
// fs.link(existingPath, newPath, callback)
// fs.lstat(path[, options], callback)
// fs.mkdir(path[, options], callback)
// fs.mkdtemp(prefix[, options], callback)
// fs.open(path[, flags[, mode]], callback)
// fs.opendir(path[, options], callback)
// fs.read(fd, buffer, offset, length, position, callback)
// fs.read(fd, [options,] callback)
// fs.readdir(path[, options], callback)
// fs.readFile(path[, options], callback)
// fs.readlink(path[, options], callback)
// fs.readv(fd, buffers[, position], callback)
// fs.realpath(path[, options], callback)
// fs.realpath.native(path[, options], callback)
// fs.rename(oldPath, newPath, callback)
// fs.rmdir(path[, options], callback)
// fs.rm(path[, options], callback)
// fs.stat(path[, options], callback)
// fs.symlink(target, path[, type], callback)
// fs.truncate(path[, len], callback)
// fs.unlink(path, callback)
// fs.unwatchFile(filename[, listener])
// fs.utimes(path, atime, mtime, callback)
// fs.watch(filename[, options][, listener])
// fs.watchFile(filename[, options], listener)
// fs.write(fd, buffer[, offset[, length[, position]]], callback)
// fs.write(fd, string[, position[, encoding]], callback)
// fs.writeFile(file, data[, options], callback)
// fs.writev(fd, buffers[, position], callback)
