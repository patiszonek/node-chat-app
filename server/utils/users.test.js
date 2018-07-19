const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'Node Course'
        },
        {
            id: 2,
            name: 'Jain',
            room: 'React Course'
        },
        {
            id: 3,
            name: 'Caleb',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Patryk',
            room: 'Test'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var removedUser = users.removeUser(1);
        
        expect(removedUser).toMatchObject({
            id: 1,
            name: 'Mike',
            room: 'Node Course'
        });
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var removedUser = users.removeUser(66);
        
        expect(removedUser).toBe(undefined);
        expect(users.users.length).toBe(3);
    });

    it('should return a user', () => {
        var user = users.getUser(1);

        expect(user).toMatchObject({
            id: 1,
            name: 'Mike',
            room: 'Node Course'
        });
    });

    it('should not return a user', () => {
        var user = users.getUser(66);

        expect(user).toBe(undefined);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Caleb']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jain']);
    });
});