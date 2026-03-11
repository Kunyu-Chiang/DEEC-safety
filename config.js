// config.js - 统一配置与客户端初始化
window.SUPABASE_CONFIG = {
    // 请在此处填入你的真实 Supabase 信息
    url: 'https://zmbxpsbxxjrsdzyvtiyi.supabase.co',
    anonKey: 'sb_publishable_7zW8CxAae1sFTxNLqaSjTA_nkCkzD8T'
};

// 自动初始化客户端，挂载到 window，确保全局唯一
(function() {
    // 检查是否已经加载了 supabase 库
    if (window.supabase && !window.supabaseClient) {
        window.supabaseClient = window.supabase.createClient(
            window.SUPABASE_CONFIG.url,
            window.SUPABASE_CONFIG.anonKey
        );
        console.log("Supabase Client initialized.");
    }
})();
