module.exports = class extends think.Model {
    get relation() {
        return {
            comments_reply: {
                type: think.Model.HAS_ONE,
                fKey: 'comment_id',
                key: 'id',
                name: 'reply'
            }
        };
    }
    getCommentsByOwnerId(owner_id) {
        return this.field('*').where({
            owner_id
        }).select();
    }
    saveCommits(data) {
        return this.add(data);
    }
};
