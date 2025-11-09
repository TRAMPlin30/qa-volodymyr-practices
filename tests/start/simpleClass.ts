class UserData {
  username: string;
  password: string;
  expectedMessage: string;

  constructor(username: string, password: string, expectedMessage: string) {
    this.username = username;
    this.password = password;
    this.expectedMessage = expectedMessage;
  }
}

// создаём объекты на основе класса
const user1 = new UserData('admin', '12345', 'Welcome, admin!');
const user2 = new UserData('guest', 'guest', 'Welcome, guest!');
const user3 = new UserData('invalid', 'wrong', 'Invalid credentials');