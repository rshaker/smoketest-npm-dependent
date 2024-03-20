const assert = require('assert').strict;
const { farewell } = require('../dist/bundle.js'); // Adjust path as needed

try {
  assert.strictEqual(farewell('Node'), 'Hello, Node! Adios, Node!', 'Farewell function failed');
  console.log('Node.js test passed successfully.');
} catch (error) {
  console.error('Node.js test failed:', error);
}
