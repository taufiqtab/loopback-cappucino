'use strict';

module.exports = function(Users) {

    Users.greet = function(msg, val1, val2, ids, cb) {
        Users.findById( ids, function (err, instance) {
            var val = "Nama Orang yang kamu cari " + instance.nama;
            cb(null, 'Greetings... ' + msg + " values = " + (val1 + val2) + " orangnya = " + val);
        });
    }

    Users.remoteMethod('greet', {
          http: {path: '/greet', verb: 'post'},
          accepts: [
              {arg: 'msg', type: 'string'},
              {arg: 'val1', type: 'number'},
              {arg: 'val2', type: 'number'},
              {arg: 'ids', type: 'number'}
          ],
          returns: {arg: 'greeting', type: 'string'}
    });
};
