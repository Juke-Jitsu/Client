
var messageTyes = {
    Connect: "connect",
    ConnectError: "connect_error",
    ConnectTimeout: "connect_timeout",
    Reconnect: "reconnect",
    ReconnectAttempt: "reconnect_attempt",
    ReconnectError: "reconnect_error",
    Reconnecting: "reconnecting",
    ReconnectFailed: "reconnect_failed"
};

var frozen = Object.freeze(messageTyes);

module.exports = frozen;
