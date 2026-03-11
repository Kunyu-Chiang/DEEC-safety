window.SUPABASE_CONFIG = {
    url: 'https://zmbxpsbxxjrsdzyvtiyi.supabase.co', // 请替换为你的URL
    anonKey: 'sb_publishable_7zW8CxAae1sFTxNLqaSjTA_nkCkzD8T' // 请替换为你的Anon Key
};
// 前端修改密码代码
const { error } = await supabase.auth.updateUser({
  password: '用户输入的新密码'
})
if(error) alert('修改失败：' + error.message);
else alert('密码修改成功！');
