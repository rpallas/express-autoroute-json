var autorouteJson = require('../../../');
var Chats = require('../../models/chat');

module.exports.autoroute = autorouteJson({
    model: Chats,
    find: {
        sort: function (req, sort) {
            if (req.query.sortdown) {
                return {
                    count: -1
                };
            } else if (req.query.sortup) {
                return {
                    count: 1
                };
            }
        }
    }
})