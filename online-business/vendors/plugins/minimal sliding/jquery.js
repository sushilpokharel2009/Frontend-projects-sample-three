$(document).ready(function(){

	google_ad_client = "ca-pub-2783044520727903";
	/* jQuery_demo */
	google_ad_slot = "2780937993";
	google_ad_width = 728;
	google_ad_height = 90;
	//-->





							
  $('.mobile-nav-button').on('click', function() {
  $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
  $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
  $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
  
  $('.mobile-menu').toggleClass('mobile-menu--open');
  return false;
}); 




  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();




});