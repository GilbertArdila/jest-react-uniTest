import getData from '../../utils/getData';

describe('fetch api test', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('call api and return data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1,2,3,4,5' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('1,2,3,4,5');
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
