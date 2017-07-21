"use strict";

var _ = require('lodash');

module.exports = (params) => {
    let toNull = value => /^null$/i.test(value) ? null : value;
    let toNumber = value => /^\d*$/.test(value) && +value < Number.MAX_SAFE_INTEGER ? +value : value;
    let convert = _.flow(toNull, toNumber);

    return _.reduce(
        params,
        (param, value, name) =>
            _.set(param, name, _.isArray(value) ?
                    value.map(convert) :
                    convert(value)
            )
        , {}
    );
};
