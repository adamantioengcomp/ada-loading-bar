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

3. On controller, import the service: "LoadingBar"
<pre>
app.controller('myController', function(LoadingBar){
...
})
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


