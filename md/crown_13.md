# First One

![](https://i.imgur.com/0gJ8WtX.png)

**index.ejs**

```html
<h1><%= title %></h1>
<p>Welcome to <%= title %></p>
<h3>我的名字是<%= name %></h3>
<h3>我的ID是<%= id %></h3>
```

**index.js**

```js
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '賴俊達', id: '207410613' });
});
```

---
