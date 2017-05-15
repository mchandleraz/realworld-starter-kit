import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Settings from '@/components/Settings';
import Editor from '@/components/Editor';
import Article from '@/components/Article';
import Profile from '@/components/Profile';
import Favorites from '@/components/Favorites';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/settings', name: 'settings', component: Settings },
    { path: '/editor', name: 'create-article', component: Editor },
    { path: '/editor/:id', name: 'edit-article', component: Editor },
    { path: '/article/:id', name: 'article', component: Article },
    { path: '/profile/:username', name: 'user', component: Profile },
    { path: '/article/:username/favorites', name: 'favorites', component: Favorites },
    { path: '*', redirect: { name: 'home' } },
  ],
});
