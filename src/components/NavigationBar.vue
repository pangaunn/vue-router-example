<template>
  <ul>
    <li><router-link to="/getting-started">Getting Started</router-link></li>
    <li><router-link :to="{ name: 'DynamicRoute', params: { id: 1, name: 'jane' } }">Dynamic Route 1</router-link></li>
    <li><router-link to="/dynamic-route/334455/john">Dynamic Route 2</router-link></li>
    <li><a href="#">Nested Routes</a></li>
    <li><a href="#">Programmatic Navigation</a></li>
  </ul>
</template>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
