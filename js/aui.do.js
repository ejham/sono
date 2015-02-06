/*
 * AUI Front-End Javascript Execution
 * @Date : 2013-12-04
 * @Author : Jaeho Sim(bvlgaricl@aintlab.com)
 *
 **/

// Protecting jQuery against Crashing Other Javascript Libraries
(function($){

	// Document Ready
	$(function(){

		// fakeSelect
		if ( $('select.uiSelect').length ) AUI.fakeSelect.init('.uiSelect');

		// slider1
		if ( $('.slider1').length ) AUI.slider.type1();

		// sideBanner
		if ( $('.sideBanner').length ) AUI.sideBanner();

		// faqList
		if ( $('.faqList').length ) AUI.faqList();

		// slider4
		if ( $('#gallery4').length ) {
			AUI.slider.type4();
		}

		// doubleTab
		if ( $('.tabType3').length ) AUI.doubleTab();

		// jScrollPane
		if ( $('.jScrollPane').length ) {
			$('.jScrollPane').jScrollPane({
				showArrows: true
			});
		}

		// indexHeader
		if ( $('#indexHeader').length ) AUI.indexHeader();

	});

	// Window Load
	$(window).load(function() {

		// slider2
		if ( $('.slider2').length ) AUI.slider.type2();

		// rowOpener
		if ( $('#horseList').length ) {
			AUI.rowOpener();
			AUI.slider.type3('.slider3');
		}

		// index
		if ( $('.indexContent').length ) AUI.index();

		// Temp Prepare
		if ( $('.TempPrepare > .VisualArea').length ) AUI.tempRolling();

	});

})(jQuery);


