import { User } from './models/User';

const user = new User({ name: 'yoo', age: 55 });

user.save();