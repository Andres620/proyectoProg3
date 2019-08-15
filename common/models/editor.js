'use strict';

module.exports = function (Editor) {
    Editor.sendEmail = (bodyMessage, subject, emailAddresses, cb) => {
        Editor.app.models.Email.send({
            to: emailAddresses,
            from: "Editor Admin",
            subject: subject,
            text: bodyMessage,
            html: bodyMessage
        }, function (err, mail) {
            console.log("email sended!!!");
            if (err) return err;
        });
        cb(null, 'message sent: ' + bodyMessage);
    };


    Editor.remoteMethod('sendEmail',
        {
            http: {
                path: '/sendEmail', verb: 'get'
            },
            description: [
                "Api to send email messages."
            ],
            accepts: [
                {
                    arg: 'bodyMessage',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'subject',
                    type: 'string',
                    required: true
                },
                {
                    arg: 'emailAddresses',
                    type: 'string',
                    required: true
                }
            ],
            returns: { arg: 'reponse', type: 'string' }
        });



    //geteditors
    Editor.findEvaluators = function (rol,cb) {
        console.log('print desde editor.js',rol)
        Editor.find({
            where: {
                rol: {
                    gte: rol
                }
            }
        }, cb);
    };


    Editor.remoteMethod("findEvaluators", {
        accepts: {
            arg: "rol",
            type: "string"
        },
        returns: {
            arg: "users",
            type: "array"
        },
        http: {
            path: "/get-evaluators",
            verb: "get"
        }
    })

};
