const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var text = 123;
        expect(isRealString(text)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var text = '    ';
        expect(isRealString(text)).toBe(false);
    });

    it('should allow string with non-space cahracters', () => {
        var text = 'test text';
        expect(isRealString(text)).toBe(true);
    });
});