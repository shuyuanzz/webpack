const assert = require('assert');
describe('webpack base test' , () => {
    const baseConf  = require('../../lib/webpack.base');
    it('entry',() => {
            assert.equal(baseConf.entry.index,'/Users/nshu/Desktop/workSpace/webpack/builder-webpack/test/smoke/template/src/index/main.tsx');
    })
})