import { User } from './models/User';

const user = new User({name: 'anmeme', age: 32});

user.on('click', () => {
  console.log('click 01')
});

user.on('change', () => {
  console.log('here and there')
})

user.trigger('click');