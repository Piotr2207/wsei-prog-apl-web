import { MainPage } from '../src/MainPage/MainPage';

describe('Func - add Note', () => {

    const main_page = new MainPage;
    test('Add note', () => {
        expect(main_page.NoteBox().toBe())
    });
})
