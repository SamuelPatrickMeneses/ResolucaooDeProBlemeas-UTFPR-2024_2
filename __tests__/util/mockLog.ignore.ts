import  j from '@jest/globals';

let ob : {logMock ?: j.jest.Spied<typeof console.log>} = {} ;

j.beforeAll(() => {
    let log = console.log;
    ob.logMock = j.jest.spyOn(console, 'log');
    ob.logMock.mockImplementation(log);
})

j.afterAll(() => {
    ob.logMock?.mockRestore();
})

j.afterEach(() => {
    j.jest.clearAllMocks()
});

export default ob;
