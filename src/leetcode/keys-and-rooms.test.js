const canVisitAllRooms = require('./keys-and-rooms')

test.each([
    [[[1],[2],[3],[]], true],
    [[[1,3],[3,0,1],[2],[0]], false]
])('%j -> %s', (rooms, expected) => {
    expect(canVisitAllRooms(rooms)).toBe(expected)
})