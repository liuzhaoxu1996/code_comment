const Base = require('./base.js');

module.exports = class extends Base {
    // 根据 owner_id 查询评论
    async getCommentsByOwnerIdAction() {
        const model = this.model('comments_info');
        try {
            const params = this.get();
            let result;
            if (params.owner_id) {
                result = await model.getCommentsByOwnerId(params.owner_id);
            }
            return this.success(result);
        } catch (e) {
            return this.fail(e.message);
        }
    }

    // 根据 comment_id 查询评论
    async getReplyByCommentIdAction() {
        const model = this.model('comments_reply');
        try {
            const params = this.get();
            let result;
            if (params.comment_id) {
                result = await model.getReplyByCommentId(params.comment_id);
            }
            return this.success(result);
        } catch (e) {
            return this.fail(e.message);
        }
    }

    async saveComments() {
        const modelInstance = this.model('comments_info');
        try {
            const commentsData = this.post();
            let result;
            if (commentsData) {
                result = await modelInstance.saveComments(commentsData);
            }
            return this.success(result);
        } catch (e) {
            return this.fail(e.message);
        }
    }

    async saveReply() {
        const modelInstance = this.model('comments_reply');
        try {
            const replyData = this.post();
            let result;
            if (replyData) {
                result = await modelInstance.saveReply(replyData);
            }
            return this.success(result);
        } catch (e) {
            return this.fail(e.message);
        }
    }
};