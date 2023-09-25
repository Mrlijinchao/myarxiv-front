// error-handler.js
export default function (err, vm, info) {
    // 显示错误信息
    alert(err.message)
    // 记录错误日志
    console.error(err)
    // 获取发生错误的Vue实例
    console.log(vm)
    // 获取Vue特定的错误信息
    console.log(info)
  }