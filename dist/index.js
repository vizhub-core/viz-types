"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVizFileId = void 0;
// Generates a random 8-character file ID.
var generateVizFileId = function () {
  return Math.random().toString(16).slice(2, 10);
};
exports.generateVizFileId = generateVizFileId;
