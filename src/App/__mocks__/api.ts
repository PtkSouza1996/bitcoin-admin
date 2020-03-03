import MockAdapter from 'axios-mock-adapter';
import api from 'App/Services/api';

const apiMock = new MockAdapter(api);

export default apiMock;
