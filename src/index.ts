import { User } from './models/User';

const user = new User({ name: 'yoo', age: 55 });

user.events.on('change', () => {
  console.log('change, uere')
});

user.events.trigger('change');