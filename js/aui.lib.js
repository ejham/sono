/*
 * AUI Front-End Javascript Library
 * @Date : 2013-12-04
 * @Author : Jaeho Sim(bvlgaricl@aintlab.com)
 *
 **/

// AUI Global Object Definition
var AUI = {}, _HTML = $('html');

// Console for IE
if (typeof console === "undefined" || typeof console.log === "undefined") {	console = {}; console.log = function(msg) {	alert(msg);};}

(function(window, AUI) {

	var _IsLTE8 = $('html').hasClass('lte8')

	// ieCheck
	AUI.browser = function(browserName) {
		var _HtmlClass = _HTML.attr('class');

		if ( _HtmlClass.indexOf(browserName) != -1 ) {
			return true;
		} else {
			return false;
		}
	}

	// cookies
	AUI.cookie = {
		create : function(name,value,days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		}
		, createInstant : function(cookieName, cookieValue) {
			document.cookie = cookieName + "=" + escape(cookieValue) + "; path=/;";
		}
		, read : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}
		, erase : function(name) {
			createCookie(name,"",-1);
		}
	}

	// mobile Check
	AUI.isMobile = function() {
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera)._SubWrapperstr(0,4)))
	}

	// indexHeader
	AUI.indexHeader = function() {

		var _IndexHeader = $('#indexHeader')
			, _InnerWrap = _IndexHeader.children('.innerWrap');

		init();

		$(window).resize(function() {
			init();
		});

		function init() {
			var _WinWidth = $(window).width()

			if ( _WinWidth < 1080 ) {
				_InnerWrap.removeClass().addClass('innerWrap narrow');
			} else {
				_InnerWrap.removeClass().addClass('innerWrap');
			}
		}

	}

	// gnb
	AUI.gnb = function(_Depth1Element, _Depth2Element) {

		var _GnbWrapper = $('#gnb')
			, _Sect = _GnbWrapper.children('ul').children('li')
			, _SectTrigger = _Sect.children('a')
			, _FirstTrigger = _GnbWrapper.find('a').first()
			, _LastTrigger = _GnbWrapper.find('a').last()
			, _SubWrapper = _SectTrigger.next('ul')
			, _Args = arguments
			, _CurrentIndex = null
			, _Timer = null;

		TweenMax.set(_SubWrapper, { autoAlpha : 0, height : 0});

		if ( _Args.length > 1 ) {
			_MenuPositionFix();
		} else {
			_Binding();
		}

		// _Binding
		function _Binding() {

			// trigger binding
			_SectTrigger.each(function(i) {
				var this_SubWrapper = $(this).next('ul');
				$(this).off().on({
					'focus mouseenter' : function() {
						_CurrentIndex = i;
						clearTimeout(_Timer);
						_Timer = null;
						TweenMax.set(_SubWrapper, { autoAlpha : 0, height : 0});
						TweenMax.to(this_SubWrapper, 0, { autoAlpha : 1, height : 38});
						_SectTrigger.removeClass('active');
						$(this).addClass('active');
					}
				});
			});

			// mouseleave binding
			_GnbWrapper.on({
				mouseleave : function() {
					_MenuHide();
				}
			});

			// _FirstTrigger focus
			_FirstTrigger.on({
				keydown : function(e) {
					if( e.shiftKey && e.keyCode === 9) {
						_MenuHide();
					}
				}
			});

			// _LastTrigger focus
			_LastTrigger.on({
				focusout : function(e) {
					var e = e || window.event
						, _Target = $(e.relatedTarget);

					if ( !_Target.parents('#gnb').length ) {
						_MenuHide();
					}
				}
			});
		}

		// _MenuHide
		function _MenuHide() {
			clearTimeout(_Timer);
			_Timer = null;
			_Timer = setTimeout(function() {
				if ( _Args.length ) {
					if ( _CurrentIndex != _Args[0]-1 ) {
						_SectTrigger.removeClass('active');
						TweenMax.to(_SubWrapper, 0, { autoAlpha : 0, height : 0, onComplete : function() {
							AUI.gnb(_Args[0], _Args[1]);
						}});
					}
				} else {
					_SectTrigger.removeClass('active');
					TweenMax.to(_SubWrapper, 0, { autoAlpha : 0, height : 0});
				}
			}, 0);
		}

		// _MenuPositionFix
		function _MenuPositionFix(open) {
			if ( _Args.length > 1 ) {
				var _Depth1Element = _Sect.eq(_Args[0]-1)
					, _Depth2Element = _Sect.eq(_Args[0]-1).children('.sub').find('li').eq(_Args[1] - 1);

				_CurrentIndex = _Args[0]-1;

				_Depth1Element.children('a').addClass('active');
				_Depth1Element.children('.sub').show();
				_Depth2Element.find('a').addClass('active');

				TweenMax.to(_Depth1Element.children('.sub'), 0, { autoAlpha : 1, height : 38, onComplete : function() {
					_Binding();
				}});
			}
		}

	}

	// index
	AUI.index = function() {

		var _Win = $(window)
			, _Object = _IsLTE8 ? $('body') : _Win
			, _WinScrollTop = _Win.scrollTop()
			, _Header = $('#indexHeader')
			, _HeaderHeight = _Header.outerHeight(true)
			, _IndexWrapper = $('.indexContent')
			, _Section = _IndexWrapper.children('.indexSection')
			, _Footer = $('#footer')
			, _CurrentSectionIndex = 0
			, _SectionOffsetTop = []
			, _IsAnimating = false;

		_AddScrollTopValue();
		_DetectSection(_WinScrollTop, null, function() {});
		_Binding();
		_Rolling();

		// Add ScrollTop to Array
		function _AddScrollTopValue() {
			for ( var i = 0; i < _Section.length; i++ ) {
				_SectionOffsetTop[i] = _Section.eq(i).offset().top - _HeaderHeight;
			}
			_SectionOffsetTop.push(_SectionOffsetTop[_Section.length-1] + _Section.eq(_Section.length-1).outerHeight(true) + _Footer.outerHeight(true) - _HeaderHeight);
		}

		// Detect Section when Window Scrolling
		function _DetectSection(scrollTop, e, callback) {
			for ( var j = 0; j < _Section.length; j++ ) {
				if ( scrollTop > _SectionOffsetTop[j] && scrollTop < _SectionOffsetTop[j+1] ) {
					_CurrentSectionIndex = j;
				}
			}
			callback(e);
		}

		// Binding
		function _Binding() {
			_Object.on({
				mousewheel : function(event) {

					_WinScrollTop = _IsLTE8 ? scrollTop() : _Win.scrollTop();
					_DetectSection(_WinScrollTop, event, function(evt) {

						var _ThisTargetTop = null;

						if ( evt.deltaY == 1 ) {
							if ( _CurrentSectionIndex > 1 ) {
								_ThisTargetTop = _SectionOffsetTop[_CurrentSectionIndex-1] - 1;
							} else {
								_ThisTargetTop = 0;
							}
						} else {
							_ThisTargetTop = _SectionOffsetTop[_CurrentSectionIndex+1] + 1;
						}

						TweenMax.to(_Win, 0.4, { scrollTo : { y : _ThisTargetTop } });
					});

					event.preventDefault();
				}
			});
		};

		// Rolling
		function _Rolling() {
			var  _RollArea = _Section.filter('.section3')
				, _RollInnerFrame = _RollArea.children('.rollingBg')
				, _RollText = _RollArea.find('.rollingBox > li')
				, _RollTrigger = _RollArea.find('.rollingBtn').find('a')
				, _MovingWidth = _RollArea.width();

			_RollTrigger.each(function(i) {
				$(this).on({
					click : function() {
						_RollTrigger.removeClass('active');
						$(this).addClass('active');
						_RollText.removeClass('active');
						_RollText.eq(i).addClass('active');
						_Motion(i);
						return false;
					}
				});
			});

			function _Motion(index) {
				var _ThisLeft = - ( index * _MovingWidth);
				if ( _IsLTE8 ) {
					TweenMax.to(_RollInnerFrame, 0.3, { left : _ThisLeft });
				} else {
					TweenMax.to(_RollInnerFrame, 0.3, { x : _ThisLeft });
				}
			}
		}

		// filterResults
		function filterResults(n_win, n_docel, n_body) {
			var n_result = n_win ? n_win : 0;
			if (n_docel && (!n_result || (n_result > n_docel)))
				n_result = n_docel;
			return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
		}

		// scrollTop
		function scrollTop() {
			return filterResults (
				window.pageYOffset ? window.pageYOffset : 0,
				document.documentElement ? document.documentElement.scrollTop : 0,
				document.body ? document.body.scrollTop : 0
			);
		}
	};

	// fakeSelect
	AUI.fakeSelect = {

		init : function(_ObjectName) {

			var _Object = $('select').filter(_ObjectName);

			_Object.each(function(oi) {

				// check
				var _OriginElement = $(this);

				// check exist
				if ( _OriginElement.prev('.fakeSelect').length ) {
					_OriginElement.prev('.fakeSelect').remove();
				}

				var _OriginElementOption = _OriginElement.find('option')
					, _OriginElementWidth = _OriginElement.width()
					, _NewSelectElement = $('<div class="fakeSelect"></div>').insertBefore(_OriginElement)
					, _NewSelectElementHTML = '<p class="selected"><a href="#"><span class="text"></span><span class="ico"></span></a></p>'
									+ '<ul class="optionList"></ul>'
					, _OptionHTML = ''
					, _SelectedOptionElement, _SelectedOptionElementTrigger, _SelectedOptionElementIco, _SelectedOptionElementText, _OptionListElement, _OptionTriggerElement, _OptionSelectedElement
					, _BodyHeight, _NewSelectElementTop, _NewSelectElementHeight, _OptionListElementHeight, _NewSelectElementLimit, _NewSelectElementWidth
					, _MotionSpeed = 100
					, _OptionElement
					, _IsUpside = false;

				// set HTML to _NewSelectElement
				_NewSelectElement.html(_NewSelectElementHTML).addClass('fakeSelect'+(oi+1));

				// set Variables
				_SelectedOptionElement = _NewSelectElement.find('p.selected');
				_SelectedOptionElementTrigger = _SelectedOptionElement.children('a');
				_SelectedOptionElementIco = _SelectedOptionElementTrigger.find('.ico');
				_SelectedOptionElementText = _SelectedOptionElement.find('span.text')
				_OptionListElement = _NewSelectElement.find('ul.optionList');

				// create listItem
				_OriginElementOption.each(function() {
					var _ThisText = $(this).text();
					if ( $(this).is(':selected') ) {
						_OptionHTML += '<li class="selected"><a href="#">' + _ThisText + '</a></li>';
					} else {
						_OptionHTML += '<li><a href="#">' + _ThisText +'</a></li>';
					}
				});

				_OptionListElement.html(_OptionHTML);
				_OptionElement = _OptionListElement.find('li');
				_OptionElement.first().addClass('first');
				_OptionElement.last().addClass('last');
				_OptionTriggerElement = _OptionElement.find('a');
				_OptionSelectedElement = _OptionElement.filter('.selected').find('a')
				_SelectedOptionElementText.text(_OptionSelectedElement.text());

				// _CalcurateWidth
				_Calcurate();

				// _Binding
				_Binding();
				_DocumentBinding();

				// _CalcurateWidth
				function _Calcurate() {

					_OptionListElement.show();

					_BodyHeight = $('body').height()
					_NewSelectElementTop = parseInt(_NewSelectElement.offset().top, 10)
					_NewSelectElementHeight = parseInt(_NewSelectElement.height(), 10)
					_OptionListElementHeight = parseInt(_OptionListElement.height(), 10)
					_NewSelectElementLimit = _NewSelectElementTop + _NewSelectElementHeight + _OptionListElementHeight;
					_NewSelectElementWidth = _OriginElementWidth + _SelectedOptionElementIco.width();

					if ( AUI.browser('safari') ) _NewSelectElementWidth += _SelectedOptionElementIco.width();

					if ( _BodyHeight < _NewSelectElementLimit ) {
						_NewSelectElement.addClass('upSide');
						_IsUpside = true;
					}

					_NewSelectElement.width(_NewSelectElementWidth);

					_OptionListElement.hide();
					_OriginElement.hide();
				}

				// _Binding
				function _Binding() {

					// open _OptionListElement
					_SelectedOptionElementTrigger.on({
						click : function() {
							if ( _OptionListElement.is(':hidden') ) {
								_ShowOptionListElement();
							} else {
								_HideOptionListElement();
							}
							return false;
						}
					});

					// option click
					_OptionTriggerElement.each(function(i) {
						var _ThisValue = $(this).text();
						$(this).on({
							click : function() {
								_OptionElement.removeClass('selected');
								$(this).parent().addClass('selected');
								_SelectedOptionElementText.text(_ThisValue);
								_ReturnValueToOriginElement(i);
								_HideOptionListElement();
								return false;
							}
						});
					});
				}

				// show _OptionListElement
				function _ShowOptionListElement() {

					var _AllSelectELement = $('.fakeSelect');

					_AllSelectELement.find('p.selected').find('>a').removeClass('open');
					_SelectedOptionElementTrigger.addClass('open');

					_AllSelectELement.not(_NewSelectElement).each(function() {
						var _ThisOptionListElement = $(this).find('.optionList');
						if ( _ThisOptionListElement.is(':visible') ) {
							_ThisOptionListElement.hide();
						}
					});
					_OptionListElement.show();
				}


				// hide _OptionListElement
				function _HideOptionListElement() {
					_SelectedOptionElementTrigger.removeClass('open');
					_OptionListElement.hide();
				}

				// return value to _OriginElement
				function _ReturnValueToOriginElement(order) {
					_OriginElementOption.removeAttr('selected');
					_OriginElementOption.eq(order).attr('selected','selected');
					_OriginElement.change();
				}

				// document _Binding
				function _DocumentBinding() {
					$(document).on({
						click : function(e) {
							var e = e || window.event
								, _Target = $(e.relatedTarget);

							if ( !_Target.parents('.fakeSelect').length ) {
								_HideOptionListElement();
							}
						}
					});
				}

			});
		}
	}

	// slider.type1
	AUI.slider = {
		type1 : function() {

			var _Slider = $('.slider1');

			_Slider.each(function() {

				var _This = $(this)
					, _OuterFrame = _This.find('.outerFrame')
					, _InnerFrame = _OuterFrame.find('.innerFrame')
					, _Item = _InnerFrame.find('.item')
					, _IndicatorWrap = $('<div class="indicator"></div>')
					, _Indicator
					, _IndicatorWrapHTML = ""
					, _IndicatorFunc = {}
					, _ItemLength = _Item.length
					, _MovingRange = _Item.first().width()
					, _CurrentIndex = 0
					, _CurrentLeftPos = 0
					, _MotionSpeed = 0.4
					, _DelayTime = 5000 + (_MotionSpeed*1000)
					, _Args = arguments
					, _AfterClickFunc = {}
					, _AfterClickStart
					, _RollTimerFunc = {}
					, _RollTimer;

				// rolling
				function _RollingFunc() {
					_CurrentIndex += 1;
					if ( _CurrentIndex >= _ItemLength ) _CurrentIndex = 0;
					_MotionFunc();
					_IndicatorFunc.settingButton();
				}

				// _MotionFunc
				function _MotionFunc(noAnimation) {

					var _NewMotionSpeed = 0;
					_CurrentLeftPos = - ( _MovingRange * _CurrentIndex );

					if ( !noAnimation ) _NewMotionSpeed = _MotionSpeed;

					if ( _IsLTE8 ) {
						TweenMax.to(_InnerFrame, _NewMotionSpeed, {	left : _CurrentLeftPos, ease : Power2.easeIn});
					} else {
						TweenMax.to(_InnerFrame, _NewMotionSpeed, {	x : _CurrentLeftPos, ease : Power2.easeIn});
					}

				}

				// _RollTimer
				_RollTimerFunc = {
					start : function() {
						if ( _RollTimer ) _RollTimer;
						_RollTimer = setInterval(_RollingFunc, _DelayTime);
					}
					, stop : function() {
						clearInterval(_RollTimer);
						_RollTimer = null;
					}
				}

				// _AfterClickStart
				_AfterClickFunc = {
					start : function() {
						if ( _AfterClickStart ) _AfterClickStart;
						_AfterClickStart = setTimeout(function() {
							_RollTimerFunc.stop();
							_RollTimerFunc.start();
						}, 2000);
					}
					, stop : function() {
						clearTimeout(_AfterClickStart);
						_AfterClickStart = null;
					}
				}

				// _IndicatorFunc
				_IndicatorFunc = {
					create : function() {

						_Item.each(function(i) {
							_IndicatorWrapHTML += '<button type="button">'+i+'</button>';
						});

						_IndicatorWrap.html(_IndicatorWrapHTML).appendTo(_This);
						_Indicator = _IndicatorWrap.find('button');
					}
					, bindingAction : function() {
						_Indicator.each(function(oi) {
							$(this).on({
								click : function() {
									if ( _CurrentIndex != oi ) {
										_AfterClickFunc.stop();
										_RollTimerFunc.stop();
										_CurrentIndex = oi;
										_MotionFunc();
										_IndicatorFunc.settingButton();
										_AfterClickFunc.start();
									}
								}
							});
						});

						_Indicator.last().on({
							focusout : function(e) {
								var e = e || window.event
									, target = $(e.relatedTarget);

								if ( !target.parents('.slider.type1').length ) {
									_RollTimerFunc.start();
								}
							}
						});
					}
					, settingButton : function() {
						_Indicator.removeClass('active');
						_Indicator.eq(_CurrentIndex).addClass('active');
					}
				}

				// _OuterFrameBinding
				function _OuterFrameBinding() {
					_OuterFrame.on({
						mouseenter : function() {
							_AfterClickFunc.stop();
							_RollTimerFunc.stop();
						}
						, mouseleave : function() {
							_RollTimerFunc.start();
						}
					});
				}

				// _ItemBinding
				function _ItemBinding() {
					// _Item Binding
					_Item.each(function(i) {
						$(this).find('a').on({
							focusin : function() {
								_AfterClickFunc.stop();
								_RollTimerFunc.stop();
								_CurrentIndex = i;
								_MotionFunc(true);
								_IndicatorFunc.settingButton();
							}
						});
					});

					_Item.first().find('a').on({
						keydown : function(e) {
							if( e.shiftKey && e.keyCode === 9) {
								_AfterClickFunc.stop();
								_RollTimerFunc.stop();
								_RollTimerFunc.start();
							}
						}
					});
				}

				// _Initialize
				function _Initialize() {
					if ( _ItemLength > 0 ) {
						_IndicatorFunc.create();
						_RollTimerFunc.start();
						_IndicatorFunc.bindingAction();
						_IndicatorFunc.settingButton();
						_OuterFrameBinding();
						_ItemBinding();
					}
				}

				// _Initialize();
				_Initialize();


			});
		} // end of type1

		// type2
		, type2 : function() {

			var _Slider = $('.slider2');

			_Slider.each(function() {

				// constant variables
				var _This = $(this)
					, _OuterFrame = _This.find('.outerFrame')
					, _InnerFrame = _OuterFrame.find('.innerFrame')
					, _Item = _InnerFrame.find('.item')
					, _ItemTrigger = _Item.children('a')
					, _MaxIdx = _Item.length - 1
					, _BtnPrev = _This.find('button.buttonPrev')
					, _BtnNext = _This.find('button.buttonNext')
					, _MovingWidth = _Item.first().width()
					, _CurrentIdx = 0
					, _MotionSpeed = 0.15
					, _IsAnimating = false;

				TweenMax.set(_InnerFrame, { x : 0 });

				// DoFunc
				if ( _Item.length > 5 ) _Init();

				// _Motion Animation
				function _MotionToLeft() {
					if ( _IsAnimating ) {
						_IsAnimating = false;
						if ( _IsLTE8 ) {
							TweenMax.to(_InnerFrame, _MotionSpeed, {
								left : -_MovingWidth
								, onComplete : function() {
									_InnerFrame.find('.item').first().appendTo(_InnerFrame);
									TweenMax.set(_InnerFrame, { x : 0 });
									_IsAnimating = false;
								}
							});
						} else {
							TweenMax.to(_InnerFrame, _MotionSpeed, {
								x : -_MovingWidth
								, onComplete : function() {
									_InnerFrame.find('.item').first().appendTo(_InnerFrame);
									TweenMax.set(_InnerFrame, { x : 0 });
									_IsAnimating = false;
								}
							});
						}
					}
				}

				function _MotionToRight() {
					TweenMax.set(_InnerFrame, { x : -_MovingWidth });
					_InnerFrame.find('.item').last().prependTo(_InnerFrame);
					if ( _IsLTE8 ) {
						TweenMax.to(_InnerFrame, _MotionSpeed, {
							left : 0
							, onComplete : function() {
								_IsAnimating = false;
							}
						});
					} else {
						TweenMax.to(_InnerFrame, _MotionSpeed, {
							x : 0
							, onComplete : function() {
								_IsAnimating = false;
							}
						});
					}
				}


				// initialize
				function _Init() {

					// binding
					_BtnPrev.on({
						click : function() {
							if ( !_IsAnimating ) {
								_IsAnimating = true;
								_CurrentIdx -= 1;
								if ( _CurrentIdx < 0 ) _CurrentIdx = _MaxIdx;

								_MotionToRight();
							}
						}
					});

					_BtnNext.on({
						click : function() {
							if ( !_IsAnimating ) {
								_IsAnimating = true;
								_CurrentIdx += 1;
								if ( _CurrentIdx > _MaxIdx ) _CurrentIdx = 0;

								_MotionToLeft();
							}
						}
					});

					_Item.each(function() {
						var _ThisItem = $(this)
							, _ThisTrigger = _ThisItem.children('a');

						_ThisTrigger.on({
							click : function() {
								_ItemTrigger.removeClass('active');
								_ThisTrigger.addClass('active');
							}
						});

					});

				}


			});

		} // end of type2

		// type3
		, type3 : function(obj) {

			var _Slider = $(obj);

			_Slider.each(function() {

				var _This = $(this)
					, _OuterFrame = _This.find('.outerFrame')
					, _InnerFrame = _This.find('.innerFrame')
					, _Item = _InnerFrame.find('.item')
					, _ItemLength = _Item.length
					, _MaxIdx = _ItemLength - 1
					, _MovingWidth = _OuterFrame.width()
					, _CurrentIdx = 0
					, _CurrentLeft = 0
					, _MotionSpeed = 0.25
					, _IndicatorWrap = $('<div class="indicator"></div>')
					, _IndicatorWrapHTML = ''
					, _Indicator;

				// init
				if ( _ItemLength > 1 ) {
					_IndicatorCreate();
				}

				// _Motion
				function _Motion() {
					_CurrentLeft = - ( _MovingWidth * _CurrentIdx );
					if ( _IsLTE8 ) {
						TweenMax.to(_InnerFrame, _MotionSpeed, { left : _CurrentLeft });
					} else {
						TweenMax.to(_InnerFrame, _MotionSpeed, { x : _CurrentLeft });
					}
					_IndicatorSet();
				}

				// _IndicatorCreate
				function _IndicatorCreate() {
					_IndicatorWrap.insertAfter(_OuterFrame);
					for ( var i=0; i<_ItemLength; i++ ) {
						_IndicatorWrapHTML += '<button type="button">' + i + '</button>';
					}
					_IndicatorWrap.html(_IndicatorWrapHTML);
					_Indicator = _IndicatorWrap.find('button');
					_Indicator.first().addClass('active');

					_IndicatorBinding();
					_IndicatorSet();
				}

				// _IndicatorSet
				function _IndicatorSet() {
					_Indicator.removeClass('active');
					_Indicator.eq(_CurrentIdx).addClass('active');
				}

				// _IndicatorBinding
				function _IndicatorBinding() {
					_Indicator.each(function(i) {
						$(this).on({
							click : function() {
								_CurrentIdx = i;
								_Motion();
							}
						});
					});
				}
			});

		} // end of type3

		, type4 : function() {

			var _Slider = $('#gallery4')
				, _Frame = _Slider.find('.frame')
				, _Item = _Frame.find('.item')
				, _ItemLength = _Item.length
				, _MovingWidth = _Slider.width()
				, _PrevTrigger = _Slider.find('#gallery4Prev')
				, _NextTrigger = _Slider.find('#gallery4Next')
				, _IsAnimating = false;

			TweenMax.set(_Frame, { x : 0});

			//_CreateCopyItem();

			_NextTrigger.on({
				click : function() {
					if ( !_IsAnimating ) {
						_IsAnimating = true;
						if ( _IsLTE8 ) {
							TweenMax.to(_Frame, 0.3, { marginLeft : -_MovingWidth, ease : Power2.easeOut, onComplete : function() {
								_Frame.find('.item').first().appendTo(_Frame);
								TweenMax.set(_Frame, { marginLeft : 0});
								_IsAnimating = false;
							}});
						} else {
							TweenMax.to(_Frame, 0.3, { x : -_MovingWidth, ease : Power2.easeOut, onComplete : function() {
								_Frame.find('.item').first().appendTo(_Frame);
								TweenMax.set(_Frame, { x : 0});
								_IsAnimating = false;
							}});
						}
					}
					return false;
				}
			});

			_PrevTrigger.on({
				click : function() {
					if ( !_IsAnimating ) {
						_IsAnimating = true;
						_Frame.find('.item').last().prependTo(_Frame);
						if ( _IsLTE8 ) {
							TweenMax.set(_Frame, { marginLeft : -_MovingWidth });
							TweenMax.to(_Frame, 0.3, { marginLeft : 0, ease : Power2.easeOut, onComplete : function() {
								_IsAnimating = false;
							}});
						} else {
							TweenMax.set(_Frame, { x : -_MovingWidth });
							TweenMax.to(_Frame, 0.3, { x : 0, ease : Power2.easeOut, onComplete : function() {
								_IsAnimating = false;
							}});
						}
					}
					return false;
				}
			});

		} // end of type4
	}

	// sideBanner
	AUI.sideBanner = function() {

		var _SideBanner = $('.sideBanner')
			, _SideBannerOffsetTop = _SideBanner.offset().top;

		$(window).scroll(function() {

			var _ScrollTop = $(window).scrollTop()
				, _ThisTop = _ScrollTop - _SideBannerOffsetTop;

			if ( _ScrollTop > _SideBannerOffsetTop ) {
				TweenMax.to(_SideBanner, 0, {
					top : _ThisTop
				});
			} else if ( _ScrollTop <= _SideBannerOffsetTop ) {
				TweenMax.to(_SideBanner, 0, {
					top : 0
				});
			}

		});

	}

	// rowOpener
	AUI.rowOpener = function() {

		var _RowOpenerWrapper = $('#horseList')
			, _Row = _RowOpenerWrapper.find('.line')
			, _ListItem = _Row.find('.listItem')
			, _Trigger = _Row.find('.thumbnail')
			, _Details = _Row.find('.details')
			, _MotionSpeed = 0.25
			, _RowMinHeight = 190
			, _RowMaxHeight = 462
			, _RowOpen = []
			, _RowClose = [];

		// set All _Row status closed
		_Row.attr('data-open','closed');

		// binding
		_Binding();

		// binding
		function _Binding() {
			_Row.each(function(oi) {
				var _ThisLine = $(this)
					, _ThisItems = _ThisLine.find('.listItem')
					, _ThisTriggers = _ThisLine.find('.thumbnail')
					, _ThisDetails = _ThisLine.find('.details');

				_ThisItems.each(function() {
					var _ThisItem = $(this)
						, _ThisTrigger = _ThisItem.find('.thumbnail')
						, _ThisDetail = _ThisItem.find('.details');

					_ThisTrigger.on({
						click : function() {

							var _TempOpenIdx = _IndexOpenLine();

							if ( _TempOpenIdx != -1 && _TempOpenIdx != oi ) {
								TweenMax.to(_Row.eq(_TempOpenIdx), _MotionSpeed, {
									height : _RowMinHeight
								});
								_RemoveLineProperty(_TempOpenIdx);
							}

							if ( _ThisLine.attr('data-open') === 'closed' ) {
								TweenMax.to(_ThisLine, _MotionSpeed, {
									height : _RowMaxHeight
								});
								_ThisLine.attr('data-open','open');
							}

							_ThisTriggers.removeClass('thumbnailActive');
							_ThisTrigger.addClass('thumbnailActive');
							_ThisDetails.hide();
							_ThisDetail.show();

							return false;

						}
					});
				});
			});
		}

		// check OpenLine's Index
		function _IndexOpenLine() {
			var _OpenIdx = -1;
			_Row.each(function(i) {
				if ( $(this).attr('data-open') === 'open' ) _OpenIdx = i;
			});
			return _OpenIdx;
		}

		function _RemoveLineProperty(idx) {
			_Row.eq(idx).attr('data-open','closed');
			_Row.eq(idx).find('.thumbnail').removeClass('thumbnailActive');
			_Row.eq(idx).find('.detail').hide();
		}

	}

	// faq
	AUI.faqList = function() {

		var _FaqList = $('.faqList')
			, _AnimationSpeed = 150;

		_FaqList.each(function() {

			var _This = $(this)
				, _Question = _This.find('.question')
				, _Triggers = _Question.children('a')
				, _Answer = _This.find('.answer');

			_Question.each(function() {
				var _Trigger = $(this).children('a')
					, _ThisAnswer = $(this).next('.answer');

				_Trigger.on({
					click : function() {
						if ( !_Trigger.hasClass('active') ) {
							_Triggers.removeClass('active');
							_Trigger.addClass('active');
							_Answer.filter(function() {
									if ( $(this).is(':visible') ) return $(this);
								}).stop(true, true).slideUp(_AnimationSpeed);
							_ThisAnswer.slideDown(_AnimationSpeed);
						} else {
							_Trigger.removeClass('active');
							_ThisAnswer.stop(true, true).slideUp(_AnimationSpeed);
						}
						return false;
					}
				});
			});

		});
	};

	// doubleTab
	AUI.doubleTab = function() {
		var _Wrapper = $('.galleryArea')
			, _OuterTab = _Wrapper.children('.tabType3')
			, _OuterTabTrigger = _OuterTab.find('a')
			, _OuterTabWrapper = _Wrapper.children('.galleryType')

		_OuterTabTrigger.each(function(i) {
			$(this).on({
				click : function() {
					_OuterTabTrigger.removeClass('active');
					$(this).addClass('active');
					_OuterTabWrapper.removeClass('active');
					_OuterTabWrapper.eq(i).addClass('active');
					return false;
				}
			});
		});

		_OuterTabWrapper.each(function() {
			var _InnerTriggerWrapper = $(this).children('.listItem')
				, _InnerTrigger = _InnerTriggerWrapper.children('a')
				, _InnerTargetWrapper = $(this).children('.bigImage')
				, _InnerTarget = _InnerTargetWrapper.children('.big')
				, _InnerBtnPrev = _InnerTargetWrapper.find('button.Prev')
				, _InnerBtnNext = _InnerTargetWrapper.find('button.Next')
				, _CurrentIdx = 0

			_InnerBtnPrev.on({
				click : function() {
					_CurrentIdx -= 1;
					if ( _CurrentIdx < 0 ) _CurrentIdx = _InnerTrigger.length - 1;

					_SetImage();

				}
			});

			_InnerBtnNext.on({
				click : function() {
					_CurrentIdx += 1;
					if ( _CurrentIdx == _InnerTrigger.length ) _CurrentIdx = 0;

					_SetImage();

				}
			});

			_InnerTrigger.each(function(i) {
				$(this).on({
					click : function() {
						_CurrentIdx = i;

						_SetImage();
						return false;
					}
				});
			});

			function _SetImage() {
				_InnerTrigger.removeClass('active');
				_InnerTrigger.eq(_CurrentIdx).addClass('active');
				_InnerTarget.removeClass('active');
				_InnerTarget.eq(_CurrentIdx).addClass('active');
			}

		});

	};

	// Temp Rolling
	AUI.tempRolling = function() {

		var _Wrapper = $('.TempPrepare > .VisualArea')
			, _OuterFrame = _Wrapper.children('.OuterFrame')
			, _InnerFrame = _OuterFrame.children('.InnerFrame')
			, _Item = _InnerFrame.find('img')
			, _MovingWidth = _OuterFrame.width()
			, _Indicator = _Wrapper.find('.Indicator > a')
			, _MaxIdx = _Item.length - 1
			, _CurrentIdx = 0
			, _CurrentLeft = 0
			, _RollTimer = null
			, _RollDelay = 5000
			, _TempPause = null
			, _IsAnimating
			, _IsRolling = false;

		if ( _RollTimer ) _RollTimer = null;
		_RollTimer = setInterval(_Rolling, _RollDelay);

		TweenMax.set(_InnerFrame, { left : 0 });

		_Indicator.each(function(i) {
			$(this).on({
				click : function() {
					if ( !_IsAnimating ) {
						_IsAnimating = true;
						clearTimeout(_TempPause);
						clearInterval(_RollTimer);
						_TempPause = null;
						_RollTimer = null;

						_CurrentIdx = i;

						_Tween();

						_TempPause = setTimeout(function() {
							_RollTimer = setInterval(_Rolling, _RollDelay);
						}, 1000);
					}
					return false;
				}
			});
		});

		function _Rolling() {

			_IsAnimating = true;

			if ( _CurrentIdx < _MaxIdx ) {
				_CurrentIdx += 1;
			} else if ( _CurrentIdx == _MaxIdx ) {
				_CurrentIdx = 0;
			}

			_Tween();

		}

		function _Tween() {
			_CurrentLeft = - ( _CurrentIdx * _MovingWidth );

			if ( _IsLTE8 ) {
				TweenMax.to(_InnerFrame, 0.5, { left : _CurrentLeft, ease : Power2.easeIn, onComplete : function() {
					_IsAnimating = false;
				}});
			} else {
				TweenMax.to(_InnerFrame, 0.5, { x : _CurrentLeft, ease : Power2.easeIn, onComplete : function() {
					_IsAnimating = false;
				}});
			}

			_SetIndicator();
		}

		function _SetIndicator() {
			_Indicator.removeClass('active');
			_Indicator.eq(_CurrentIdx).addClass('active');
		}
	};

})(window, AUI);

function familySite(obj) {
	var _This = $(obj)
		, _Option = _This.find('option:selected')
		, _OptionValue = _Option.val()
		, _Go = _This.next('a');

	_Go.attr('href', _OptionValue);
}

// famePop
function FamePop() {

	var _Trigger = $('.PopTrigger')
		, _PopWrapper = $('.PopLayer')
		, _PopImage = _PopWrapper.find('.ZipcodePopup')
		, _Closer = _PopWrapper.find('.Closer');

	_Trigger.each(function() {
		var _ThisPop = $($(this).attr('href'));

		$(this).on({
			click : function() {
				_PopWrapper.show();
				_ThisPop.show();
				return false;
			}
		});
	});

	_Closer.each(function() {
		$(this).on({
			click : function() {
				_PopWrapper.css('display','none');
				_PopImage.css('display','none');
				return false;
			}
		});
	});

}
