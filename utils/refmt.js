var _ = require('lodash');
var data = require('./adapt');

var dat = _.map(data.nodes, function(node) {
   var found = _.find(data.links, {"target": parseInt(node.id)})
    //console.log(found);
  if (found) {
  node.attribute = [found.value];
  }
  return node;
});


console.log(JSON.stringify(dat));
