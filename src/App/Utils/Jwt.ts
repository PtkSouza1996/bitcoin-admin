import { decode } from 'jsonwebtoken';

function decodeToken(token: string) {
  const decryptToken = decode(token);

  return decryptToken;
}

export default { decodeToken };
