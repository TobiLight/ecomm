import { hash as hash$1, compare } from "bcrypt";
class Hash {
  hash(data) {
    return hash$1(data, 10);
  }
  compare(data, hash2) {
    return compare(data, hash2);
  }
}
const hash = new Hash();
export {
  hash as h
};
