const expect = require('expect');

var {generateMessage} = require('./message');

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