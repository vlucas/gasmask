export default class User {
  email: string = 'test@example.com';

  constructor(email: string) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }
}
