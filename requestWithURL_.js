defineHandler({
  onEnter(log, args, state)
  {
      // args[2] 是NSURL对象
      var url = new ObjC.Object(args[2]);
      log(`\n[📝 请求创建] ${url.toString()}`);
  },

  onLeave(log, retval, state)
  {
      // retval是创建的NSURLRequest对象，可以获取更多信息
      if (retval.isNull()) return;
      
      var request = new ObjC.Object(retval);
      var httpMethod = request.HTTPMethod();
      var headers = request.allHTTPHeaderFields();
      
      if (httpMethod) {
          log(`[📋 请求方法] ${httpMethod.toString()}`);
      }
      
      if (headers && !headers.isNull()) {
          log(`[📋 请求头] ${headers.toString()}`);
      }
  }
});
