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

For changing the message, use the <b>message</b> property:

```html
<loading message="New Loading Message..."/>
```


For changing the icon, use the <b>icon</b> property. The value must be an font awesome icon name:

```html
<loading message="New Loading Message..." icon="fa-spinner"/>
```

4. On controller, import the service: "LoadingBar"

<pre>
app.controller('myController', function(LoadingBar){

...

})
</pre>

5. s
6. s


