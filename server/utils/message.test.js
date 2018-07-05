const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'patryk';
        var text = 'message';
        var message = generateMessage(from, text);

        // expect(message.createdAt).toBeInstanceOf(Number);
        expect(message).toMatchObject({
            from,
            text
        });
    });
});

describe('generateLcoationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'patryk';
        var url = 'https://www.google.com/maps?q=1,1'
        var message = generateLocationMessage(from, 1, 1);

        expect(message).toMatchObject({
            from,
            url
        });
    });
});