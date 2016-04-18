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

<pre>
<loading/>
</pre>

For changing the message, use the <b>message</b> property:
<pre>
<loading message="New Loading Message..."/>
</pre>

For changing the icon, use the <b>icon</b> property. The value must be an font awesome icon name:
<pre>
<loading message="New Loading Message..." icon="fa-spinner"/>
</pre>

4. s


