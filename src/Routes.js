import Home from './Home.svelte';
import Blog from './Blog.svelte';

export const routes = [
  {
    name: '/',
    component: Home
  },
  {
    name: '#/blog/:yearMonth/:title',
    component: Blog
  }
]
