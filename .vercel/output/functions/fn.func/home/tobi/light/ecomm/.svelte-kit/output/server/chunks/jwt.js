import jwtwebtoken from "jsonwebtoken";
const JWT_SECRET = "2d95fdd5220230d463c5ddb46ef44b20";
class Jwt {
  secret;
  constructor() {
    this.secret = JWT_SECRET;
  }
  encode(data) {
    return jwtwebtoken.sign({ ...data }, this.secret);
  }
  verify(token) {
    try {
      jwtwebtoken.verify(token, this.secret);
      return true;
    } catch (error) {
      return false;
    }
  }
  decode(token) {
    return jwtwebtoken.decode(token);
  }
  verifyAndDecode(token) {
    const verified = this.verify(token);
    if (verified) {
      return this.decode(token);
    } else {
      return null;
    }
  }
}
const jwt = new Jwt();
export {
  jwt as j
};
