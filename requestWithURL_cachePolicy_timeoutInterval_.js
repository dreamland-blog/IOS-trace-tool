defineHandler({
  onEnter(log, args, state)
  {
      // args[2] 是NSURL对象，args[3]是cachePolicy，args[4]是timeout
      var url = new ObjC.Object(args[2]);
      var cachePolicy = args[3];
      var timeout = args[4];
      
      log(`\n[📝 请求创建-详细] ${url.toString()}`);
      log(`[⚙️ 缓存策略] ${cachePolicy}`);
      log(`[⏱️ 超时时间] ${timeout} 秒`);
  },

  onLeave(log, retval, state)
  {
      if (retval.isNull()) return;
      
      var request = new ObjC.Object(retval);
      var httpMethod = request.HTTPMethod();
      
      if (httpMethod) {
          log(`[📋 请求方法] ${httpMethod.toString()}`);
      }
  }
});
