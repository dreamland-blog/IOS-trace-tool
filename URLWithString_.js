

defineHandler({
  onEnter(log, args, state)
  {
      // 为什么是第3个参数？在oc方法中, args[0] 是表示 self, 就是自身
      // args[1] 表示 _cmd，即当前方法的选择器（selector）
      var urlString = new ObjC.Object(args[2]);

      // 过滤掉系统相关的URL，只关注应用的API接口
      var url = urlString.toString();
      if (url.indexOf('http') === 0 && 
          !url.includes('apple.com') && 
          !url.includes('icloud.com') &&
          !url.includes('cdninstagram.com') &&
          !url.includes('.png') &&
          !url.includes('.jpg') &&
          !url.includes('.jpeg')) {
          
          log(`\n[ URL创建] ${url}`);
          
          // 可选：打印调用堆栈（注释掉避免输出过多）
          // log('调用堆栈:\n' +
          //     Thread.backtrace(this.context, Backtracer.ACCURATE)
          //         .map(DebugSymbol.fromAddress).join('\n') + '\n');
      }
  },

  onLeave(log, retval, state)
  {
      // 可以在这里获取创建的URL对象
  }
});
