const path = require('path')

// 返回路径中最后的文件名
console.log(path.basename(__filename))

// 返回路径最后的文件夹绝对路径
console.log(path.dirname(__filename))

// 返回路径的扩展名
console.log(path.extname(__filename))

// 判断是否绝对路径
console.log(path.isAbsolute('/abc'))

// 拼接路径
console.log(path.join('a/b', 'c', 'index.html'))

// 解析为绝对路径，给定的路径的序列是从右往左被处理的
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')))

// 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径
// 返回: '../../impl/bbb'
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'))

// 解析路径
/**
* root: /
* dir: /a/b/c
* base: index.html
* ext: .html
* name: index
*/
console.log(path.parse('/a/b/c/index.html'))

// 格式化路径
// /a/b/c/index.html
console.log(path.format({
  root: '/',
  dir: '/a/b/c',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}))
