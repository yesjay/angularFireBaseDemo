/**
 * 到期時間 1 天
 */
const expireTime = 1000 * 60 * 60 * 24;
 
module.exports = function (req, res, next) {
  res.header('Access-Control-Expose-Headers', 'access-token');
  const now = Date.now();
 
  let unauthorized = true; // 未授權
  const token = req.headers['access-token'];
  if (token) {
    const expired = now - token > expireTime;
    if (!expired) {
      unauthorized = false;
      res.header('access-token', now);
    }
  }
 
  if (unauthorized) {
    res.sendStatus(401);
  } else {
    next();
  }
};