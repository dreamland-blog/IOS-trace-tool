defineHandler({
  onEnter(log, args, state)
  {
      // args[2] 是NSURLRequest对象，args[3]是completion handler
      var request = new ObjC.Object(args[2]);
      var url = request.URL();
      var httpMethod = request.HTTPMethod();
      var headers = request.allHTTPHeaderFields();
      var body = request.HTTPBody();
      
      log(`\n[🚀 数据任务开始]`);
      log(`[🌐 URL] ${url.toString()}`);
      
      if (httpMethod) {
          log(`[📋 方法] ${httpMethod.toString()}`);
      }
      
      if (headers && !headers.isNull()) {
          log(`[📋 请求头] ${headers.toString()}`);
      }
      
      if (body && !body.isNull()) {
          var bodyStr = Memory.readUtf8String(body.bytes(), body.length());
          log(`[📦 请求体] ${bodyStr}`);
      }
      
      // 保存请求信息到state，用于在onLeave中使用
      state.requestUrl = url.toString();
  },

  onLeave(log, retval, state)
  {
      if (retval.isNull()) return;
      log(`[✅ 数据任务创建完成] ${state.requestUrl}`);
  }
});
