
jQuery(document).ready(function(){
	
	// this is for adding the X button to the UI message class
	jQuery(".ui-message").append('<span class="ui-close">X</span>');
	// handling the click event
	jQuery(".ui-close").click(function()
	{
		jQuery(this).parents(".ui-message").fadeOut();		
	});
	
	//Hide all anwers	
	jQuery(".answer").hide();
	
	//Handle questions click events
	jQuery(".faq h4").click(function()
	{
		jQuery(this).next(".answer").slideToggle();
	});
	
	jQuery(".faq h4").addClass("faq-question");
	//Dynamically load about content
	jQuery("#about").click(function()
	{
		jQuery(".about-placeholder").load("about.html .body-text");
		return false;
	});
	
});