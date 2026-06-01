const works = [
  {
    title: "Echo Server：Drogon 内存版用户系统",
    tags: ["WSL2", "C++ 后端", "Drogon"],
    desc: "从 0 搭建 Drogon HTTP 服务，完成 /ping、注册、登录和线程安全内存存储。",
    link: "./echo-server-memory.html"
  },
  {
    title: "Echo Server：MySQL 持久化用户系统",
    tags: ["MySQL", "数据库", "后端"],
    desc: "把内存版账号系统升级为 MySQL 持久化，完成 echo_app、users 表和数据库登录验证。",
    link: "./echo-server-mysql.html"
  },
  {
    title: "Echo Server：帖子系统从 0 到 1",
    tags: ["社区项目", "CRUD", "鉴权"],
    desc: "补齐发帖、查最新、用户主页、帖子详情和删除自己的帖子。",
    link: "./echo-server-posts.html"
  },
  {
    title: "Echo Server：评论、点赞与统计聚合",
    tags: ["互动系统", "SQL 聚合", "社区项目"],
    desc: "实现评论、点赞、取消点赞，并让帖子列表直接返回 like_count 与 comment_count。",
    link: "./echo-server-comments-likes.html"
  },
  {
    title: "Echo Server：分页与列表接口优化",
    tags: ["分页", "API 设计", "列表优化"],
    desc: "把固定 LIMIT 改造为 page/page_size 参数，为压测和高并发优化做准备。",
    link: "./echo-server-pagination.html"
  },
  {
    title: "Echo Server：压测、索引、Redis 与限流",
    tags: ["性能优化", "Redis", "wrk"],
    desc: "用 wrk 压测定位瓶颈，完成索引优化、N+1 改造、Redis 缓存和基础限流。",
    link: "./echo-server-performance.html"
  },
  {
    title: "Echo Server：本地 AI 聊天助手集成",
    tags: ["AI", "llama.cpp", "SSE"],
    desc: "本地部署 Qwen 模型，后端接入 llama.cpp，并实现多轮会话和流式输出。",
    link: "./echo-server-ai-chat.html"
  }
];