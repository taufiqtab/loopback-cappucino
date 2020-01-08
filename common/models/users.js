'use strict';

module.exports = function(Users) {
    Users.greet = async function(msg, val1, val2) {
        return 'Greetings... ' + msg + " values = " + (val1 + val2);
    }

    Users.remoteMethod('greet', {
          accepts: [
              {arg: 'msg', type: 'string'},
              {arg: 'val1', type: 'number'},
              {arg: 'val2', type: 'number'}
          ],
          returns: {arg: 'greeting', type: 'string'}
    });
};
