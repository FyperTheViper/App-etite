
const express = require('express');
const orm = require('../config/orm');

let burger = {
  all: function(cb) {
    orm.all("eatthis", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("eatthis", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("eatthis", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;