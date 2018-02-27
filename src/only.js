var _ = require('lodash');

function only(arr, property) {
    var mapped = _.map(
        _.uniqBy(arr, property), function(obj) {
            return obj[property];
        }
    )
    return _.without(mapped,undefined);
}

_.mixin({'only': only});
