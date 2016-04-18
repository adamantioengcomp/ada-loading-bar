# ada-loading-bar
Loading Bar for Angular JS Applications

## Instalation

<pre>
bower install ada-loading-bar
</pre>

## Usage

### Declare the "ada-loading-bar" module

<pre>
angular.module('app',['ada-loading-bar'])
</pre>

### In the html, add the directive

```html
<loading/>
```

For changing the message, use the <b>message</b> property:
```html
<loading message="New Loading Message..."/>
```

For changing the icon, use the <b>icon</b> property. The value must be an font awesome icon name:

```html
<loading message="New Loading Message..." icon="fa-spinner"/>
```

### On controller, import the service: "LoadingBar"

<pre>
app.controller('myController', function(LoadingBar){
...
})
</pre>

### To show loading bar:

<pre>
LoadingBar.show();
</pre>

### To hide loading bar:

<pre>
LoadingBar.hide().then(function(){
...
});
</pre>


