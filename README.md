# ada-loading-bar
Loading Bar for Angular JS Applications

## Instalation

<pre>
bower install ada-loading-bar
</pre>

## Usage

1. Declare the "ada-loading-bar" module
<pre>
angular.module('app',['ada-loading-bar'])
</pre>
2. In the html, add the directive

```html
<loading/>
```

2.1. For changing the message, use the <b>message</b> property:

```html
<loading message="New Loading Message..."/>
```

2.2. For changing the icon, use the <b>icon</b> property. The value must be an font awesome icon name:

```html
<loading message="New Loading Message..." icon="fa-spinner"/>
```

3. On controller, import the service: "LoadingBar"

<pre>
app.controller('myController', function(LoadingBar){
...
})
</pre>

4. To show loading bar:
<pre>
LoadingBar.show();
</pre>

5. To hide loading bar:
<pre>
LoadingBar.hide().then(function(){
...
});
</pre>


