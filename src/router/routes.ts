import Home from '../views/Home';

export default [
   { path: '/home', component: Home },
   { path: '/', redirect: '/home' }
];
