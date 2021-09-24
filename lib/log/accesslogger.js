// <APP ROOT>/lib/logger/accessLogger.js
const log4js = require("log4js");
const logger = require("./logger").access;

module.exports = (options) => {
  // eslint-disable-next-line no-param-reassign
  options = options || {}; // オプションを指定する場合はそちらを使う
  // eslint-disable-next-line no-param-reassign
  options.level = options.level || "auto"; // ない場合、autoを設定
  return log4js.connectLogger(logger, options); // ログ設定 Expressのアクセスログと結びつける
};
