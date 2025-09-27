最右App接口追踪工具使用说明

1. 基础frida-trace命令（推荐）：
   frida-trace -U -f com.app.zuiyou -I "NSURLSession*" -I "NSURLRequest*" -I "NSURL*"

2. 使用自定义脚本：
   frida -U -f com.app.zuiyou -l trace-zuiyou.js --no-pause

3. 追踪特定方法（高级用法）：
   frida-trace -U -f com.app.zuiyou -m "*[* *URL*]" -m "*[* *Request*]"

4. 文件说明：
   - __handlers__/: 自动生成的方法处理器
   - trace-zuiyou.js: 主要追踪脚本
   - 各个handler文件会捕获不同的网络方法调用

5. 过滤和输出：
   - 自动过滤掉图片请求和系统请求
   - 显示URL、请求方法、请求头、请求体等详细信息
   - 时间戳帮助分析请求时序

