#jQuery Sticky Header [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

jQuery Sticky Header creates a sticky header on-demand. Just create your HTML header and let the magic happen!
It will show automatically when the user scroll up, and obiviously only if the main header is not visible already. It closes automatically as soon as the user scroll down again or reach the top of the page.

##Usage

**jQuery Sticky Header** needs jQuery to work, so first of all you have to include it in your web page

    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>

Then you have to include the plugin file

    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="./jquery.sticky-header.min.js"></script>

Now you need to create the HTML for the sticky header.

    <html>
    <head>
		<title>jQuery Sticky Header</title>
		<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    	<script src="./jquery.sticky-header.min.js"></script>	
	</head>
	<body>
	
		<!-- STICKY HEADER BEGIN -->
		<header id="sticky-header">
			Your stuff in here
		</header>
		<!-- STICKY HEADER END -->

		<!-- Other website stuff can go here -->
	</body>
    </html>

Create a new JS file or add a `<script>` tag in your website head section:

    <script>
	jQuery(document).ready(function() {
		jQuery('#sticky-header').stickyHeader();
	});
	</script>

**That's all!**

##Options & Callbacks

There are a few options and callbacks you can use with **jQuery Sticky Header**.

###Options

    {
		//It specifies the effect to use to show/hide the sticky header.
		//The available values are 'fade', 'slide' and 'move' (default)
		effect	: 'move',
	
		//It specifies the easeing to use to show/hide the sticky header.
		//Only works if the `effect` is setted to `move`. You can use all the easing available at http://matthewlein.com/ceaser/
		//and also submit a custom `cubic-bezier` value
		easing	: 'ease',

		//The time in milliseconds needed to show/hide the sticky header.
		speed	: 350,

		afterInit	: function () {}, //Fired just after the init.
		onOpen		: function () {}, //Fired just after the opening animation ends.
		onClose		: function () {}, //Fired just after the closing animation ends.
	}

##Example

Basic example:

    <html>
    <head>
		<title>jQuery Sticky Header</title>
		<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    	<script src="./jquery.sticky-header.min.js"></script>
		<script>
		jQuery(document).ready(function () {
			jQuery('#sticky-header').stickyHeader({
				effect	: 'move',
				easing	: 'easeInBack',
				speed	: 500
			});
		});
		</script>
	</head>
	<body>
	
		<!-- STICKY HEADER BEGIN -->
		<header id="sticky-header">
			Your stuff in here
		</header>
		<!-- STICKY HEADER END -->

		<!-- Other website stuff can go here -->
	</body>
    </html>

Callbacks example:

	<html>
    <head>
		<title>jQuery Sticky Header</title>
		<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    	<script src="./jquery.sticky-header.min.js"></script>
		<script>
		jQuery(document).ready(function () {
			jQuery('#sticky-header').stickyHeader({
				effect	: 'move',
				easing	: 'easeInBack',
				speed	: 500,

				afterInit	: function () {
					console.log('sticky-header started');
				},
				onOpen		: function () {
					console.log('scrolling up. The sticky header is now visible.');
				}
			});
		});
		</script>
	</head>
	<body>
	
		<!-- STICKY HEADER BEGIN -->
		<header id="sticky-header">
			Your stuff in here
		</header>
		<!-- STICKY HEADER END -->

		<!-- Other website stuff can go here -->
	</body>
    </html>

##Styling

There's no need of extra CSS to get the plugin working properly.
All the needed CSS is automatically added, including positioning, and it's also added an extra 50px of padding-top because some easing, like `easeInBack` move the header outside their standard position, so if you need to add pagging to your sticky header, consider adding the JS handler on a wrapper.

##Demo
Open the file **index.html** inside the download folder or online at [http://codepen.io/anon/pen/bfrsH](http://codepen.io/anon/pen/bfrsH).

##Browser support

IE9+ and modern browsers.

##License
jQuery Sticky Header is licensed under the GPLv3 license.