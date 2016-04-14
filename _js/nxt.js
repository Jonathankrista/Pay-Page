if (typeof jnxtac !== 'object') {
	var jnxtac = {};
}

(function() {
	function nxt_js_loader(script_array, position, is_sequential, final_process) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = script_array[position];

		if (is_sequential != true) {
			if (position+1 < script_array.length) {
				nxt_js_loader(script_array, position+1, false, null);
			}
		}
		else {
			if (position+1 < script_array.length) {
				if (typeof script.addEventListener === 'function') {
					script.addEventListener('load', function () {
						nxt_js_loader(script_array, position+1, is_sequential, final_process);
					}, false);
				}
				else {
					script.onreadystatechange = function() {
						if (script.readyState in {loaded: 1, complete: 1}) {
							script.onreadystatechange = null;
							nxt_js_loader(script_array, position+1, is_sequential, final_process);
						}
					}
				}
			}
			else if (typeof final_process === 'function') {
				if (typeof script.addEventListener === 'function') {
					script.addEventListener('load', function () {
						final_process();
					}, false);
				}
				else {
					script.onreadystatechange = function() {
						if (script.readyState in {loaded: 1, complete: 1}) {
							script.onreadystatechange = null;
							final_process();
						}
					}
				}
			}
		}
		document.getElementsByTagName('head')[0].appendChild(script);
	}
	nxt_js_loader(['//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'],0,true,function() {
		jnxtac = jQuery.noConflict(true);
		nxt_js_loader(['//d2brc35ftammet.cloudfront.net/autocomplete/nxt-ac-js-ui-3.2.1j-min.js'], 0, true, function() {
			var cssFiles = ['http://www.softmoc.com/_css/ac_softmoc_theme2.css'];
			for (i = 0; i < cssFiles.length; i++) {
				var icssFiles = document.createElement('link');
				icssFiles.type = 'text/css';
				icssFiles.rel = 'stylesheet';
				icssFiles.media = 'screen';
				icssFiles.href = cssFiles[i];
				document.getElementsByTagName('head')[0].appendChild(icssFiles);
			}
			jnxtac(document).ready(function() {
				jnxtac.ui.nxt_autocomplete.prototype._bindingToCaptureSearches = function() {
					var self = this;
					self.element.on('keydown.nxt_ac_capture', function(e) {
						if (e.which == 13) {
							//self._logACUsage(-1,'',function() {});
						}
					});
					self.element.next().on('click.nxt_ac_capture', function(e) {
						//self._logACUsage(-1,'',function() {});
					});
				};
				jnxtac("#textfield").nxt_autocomplete({cid:'43b6e2cfcc8896b29d69a6cdf1aee686',charset:'ISO-8859-1',captureSearches:true});
				jnxtac("#textfield").nxt_autocomplete("option", "footer", '');
				jnxtac.ui.nxt_autocomplete.prototype._setPosition = function () {
					this.ac_main_container.position({
						my: "left top",
						at: "left bottom",
						of: this.element,
						offset: "0 0",
						collision: "none"
					});
				};
			});
			
			
			jnxtac.ui.nxt_autocomplete.prototype._drawProduct = function (b){
			var image = b.Image, salePrice = b.Saleprice, price = b.Price;
			if("https:"==document.location.protocol&&b.Image.substr(0,6)!="https:"){
				image="https:"+b.Image.substr(5)
			}
			if (price) {
				price = "<strike>$" + price + "</strike>";
			}
			if (salePrice) {
				salePrice = "$" + salePrice;
			}
			image = '<img height="50" width="50" src="'+image+'"/>';
			console.log(b);
			return image + ' <span class="nxt-item-txt">'+this._encapsulateMatches(b.Name)+"</span>" + '<span class="nxt-item-price">' + salePrice + '</span>';
			};
		
			jnxtac.ui.nxt_autocomplete.prototype._handleSectionSelect = function (event, item) {
			    // Block functionality if user is clicking on a link within a section item
			    if (event.type == 'click') {
			        var closest_a = jnxtac(event.target).closest('a', item);
			        if (closest_a.length > 0) {
			            if (closest_a.attr('href') != undefined) {
			                return true;
			            }
			        }
			    }
			    var section = item.data('nxt-autocomplete.type');
			    var item_data = item.data('nxt-autocomplete.item');
			    if (this._determineSectionType(section, item_data) == 'simple') {
			        //this._submitForm(item_data);
			        GoQuickSearch('Y','ca','www.softmoc.com',item_data);
			    }
			    else if (item_data.url != undefined) {
			        window.location = item_data.url;
			    }
			    else {
			    	GoQuickSearch('Y','ca','www.softmoc.com',item_data.matched);
			        //this._submitForm(item_data.matched);
			    }
			}		
			/*
			jnxtac.ui.nxt_autocomplete.prototype._handleSectionSelect = function (d) {
				var e = this.selectedItem.data("nxt-autocomplete.type");
				var c = this.selectedItem.data("nxt-autocomplete.item");

				console.log(e);
				GoQuickSearch('Y','ca','www.softmoc.com',c);
			};
			*/
			

		});		
	});
})();// JavaScript Document