'use strict';


//REVISAR LUEGO
module.exports = function (Article) {
    Article.findArticleByAuthorID = function (authorId, cb) {
        console.log('no me lo puedo creer: ',authorId)
        Article.find({
            where: {
                authorId: {
                    gte: authorId
                }
            }
        }, cb);
    };
    

    Article.remoteMethod("findArticleByAuthorID", {
        accepts: {
            arg: "authorId",
            type: "string",
            required: true
        },
        returns: {
            arg: "articles",
            type: "array"
        },
        http: {
            path: "/get-article-by-equals-authorId",
            verb: "get"
        }
    })
};
