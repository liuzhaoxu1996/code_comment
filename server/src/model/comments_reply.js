module.exports = class extends think.Model {
    getReplyByCommentId(comment_id) {
        return this.field('*').where({
            comment_id
        }).select();
    }
    saveReply(data) {
        return this.add(data);
    }
};
