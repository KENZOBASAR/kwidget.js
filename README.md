# kwidget.js
kwidget.js is a free widget software that insert a widget button into your web app.
- Cookbook
How to use kwidget.js
`<widget>` tag is used in html
---------------------------------------------
- Widget
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget>
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```
- Widget colours -
Widget colors is to change the color of the modal/Widget
You can replace the color to a hex color as well.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget color="blue">
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```
- Widget positions -
Set the widget position to right and left
## For right-
Note: Right is the default position and you can directly add <widget> and it will be set to right. However the position can be still changed-
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget position="right">
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```
## For left-
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget position="left">
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```

- Widget button icon -
Set the widget button's icon default is ⚙ (Cog)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget icon="🛠">
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```
You can replace the emoji with anything you want.

- Double widgets -
Also, It also has double widgets with their own buttons
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget color="blue" position="right">
   <p>Widget Content</p>
</widget>
<widget color="red" position="left">
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```
- Change the colour of the button -
You can also change the color of the button that opens the widget
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget color="blue" buttoncolor="blue" icon="🌊">
   <p>Widget Content</p>
</widget>
<widget color="red" buttoncolor="red" icon="🔥">
    <script src="kwidget.js"></script>
</body>
</html>
```
You can also replace the colors with hex codes of colors.
- Widget gradients -
The widget's background color can also be changed to gradients like-
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget gradient="blue; red">
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```
You can Also use hex codes as well
- Widget button gradient -
Change the color of the button which opens the widget/PopUp
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<widget buttongradient="blue; green">
   <p>Widget Content</p>
</widget>
    <script src="kwidget.js"></script>
</body>
</html>
```
*Note: Attributes can be mixed, Not 1 attribute can be used at a time, You can use as many attributes that you want*
-------------------------------------------------------------------------------------------------------------------
