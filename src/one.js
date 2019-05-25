class One {}

// lodash
// import _ from 'lodash'; // 这种方式不支持树摇
// _.groupBy(['lin', 'bin', 'devin'], 'length');
// // => { '3': ['lin', 'bin'], '5': ['devin'] }
// // import { groupBy } from 'lodash'; // 这种方式不支持树摇
// import groupBy from 'lodash/groupBy'; // 这种方式支持树摇
// groupBy(['lin', 'bin', 'devin'], 'length');
// // => { '3': ['lin', 'bin'], '5': ['devin'] }

import { cube } from './math.js';
console.log('tree shaking', 'math.cube', cube(3));
