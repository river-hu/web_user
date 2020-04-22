/*
 * @Author: river
 * @since: 2020-04-20 17:37:53
 * @lastTime: 2020-04-20 17:39:59
 * @LastAuthor: river
 * @FilePath: /next_project/next.config.js
 * @message: 文件描述
 */
const withTypescript = require("@zeit/next-typescript")

module.exports = withTypescript({
    webpack(config,options){
        return config
    }
})
