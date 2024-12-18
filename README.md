# kwidget.js
kwidget.js is a free widget software that insert a widget button into your web app.
- Cookbook
How to use kwidget.js
`<widget>` tag is used in html
---------------------------------------------
- Widget
```
<script src="kwidget.js">
<widget>
   <p>Widget content.</p>
</widget>
```
- Widget colours -
Widget colors is to change the color of the modal/Widget
You can replace the color to a hex color as well.
```
<script src="kwidget.js">
<widget color="blue">
   <p>Widget content.</p>
</widget>
```
- Widget positions -
Set the widget position to right and left
## For right-
Note: Right is the default position and you can directly add <widget> and it will be set to right. However the position can be still changed-
```
<script src="kwidget.js">
<widget position="right">
   <p>Widget content.</p>
</widget>
```
## For left-
```
<script src="kwidget.js">
<widget position="left">
   <p>Widget content.</p>
</widget>
```

- Widget button icon -
Set the widget button's icon default is ⚙ (Cog)
```
<script src="kwidget.js">
<widget icon="🎄">
   <p>Widget content.</p>
</widget>
```
You can replace the emoji with anything you want.

- Double widgets -
Also, It also has double widgets with their own buttons
```
<script src="kwidget.js">
<widget icon="🎄" position="left">
   <p>Widget content.</p>
</widget>
<script src="kwidget.js">
<widget icon="🔥" position="right">
   <p>Widget content.</p>
</widget>
```
- Change the colour of the button -
You can also change the color of the button that opens the widget
```
<script src="kwidget.js">
<widget icon="🔥" buttoncolor="red">
   <p>Widget content.</p>
</widget>
<widget icon="🌊" buttoncolor="blue">
   <p>Widget content.</p>
</widget>
```
You can also replace the colors with hex codes of colors.
