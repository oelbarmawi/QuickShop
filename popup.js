/* 
	Quick Shop
	Author @OmarElbarmawi
	All rights reserved.
*/

window.onload = function() {
	var search = document.getElementById("search");
	var item = document.getElementById("item");
	var amazon = document.getElementById("amazon");
	var nordstrom = document.getElementById("nordstrom");
	var ebay = document.getElementById("ebay");
	var macys = document.getElementById("macys");
	var newegg = document.getElementById("newegg");
	var overstock = document.getElementById("overstock");
	var adidas = document.getElementById("adidas");
	var craigslist = document.getElementById("craigslist");
	// var footlocker = document.getElementById("footlocker")
	// var finishline = document.getElementById("finishline");
	// var jet = document.getElementById("jet");
	// var nike = document.getElementById("nike");
	var domains = 	[[macys, "http://www1.macys.com/shop/featured/", "?ce=1435"],
					[amazon, "https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=", ""], 
					[nordstrom, "http://shop.nordstrom.com/sr?contextualcategoryid=2375500&origin=keywordsearch&keyword=", ""], 
					[ebay, "http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR11.TRC2.A0.H0.Xlaptop.TRS1&_nkw=", "&_sacat=0"], 
					[newegg, "https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=", "&ignorear=0&N=-1&isNodeId=1"],
					[overstock, "https://www.overstock.com/search?keywords=", "&taxonomy=sto43&ralt=sto39,sto6,sto5&TID=AR:TRUE&searchtype=Header"],
					[adidas, "http://www.adidas.com/us/search?q=", ""],
					[craigslist, "https://orangecounty.craigslist.org/search/sss?query=", "&sort=rel"] // <-- add comma when uncomment
					/*[nike, "http://store.nike.com/us/en_us/pw/n/1j7?sl=", ""]
					[jet, "https://jet.com/search?term=", ""]
					[footlocker, "http://www.footlocker.com/_-_/keyword-", ""]
					[finishline, "http://www.finishline.com/store/_/N-/Ntt-", ""]*/];

	/* When the "Search" button is clicked. */
	search.onclick = function() {
		/* Verify that the user entered an item. */
		if (item.value != "") {
			
			/* Functions to replace spaces in item.value with another character. */ 
			change_space = function(sign) {
				var item_name = "";
				for (var c=0; c < item.value.length; c++) {
					if (item.value[c] == " ") {
						item_name += sign;
					}
					else {
						item_name += item.value[c];
					}
				}
				return item_name;
			}

			/* Depending on the domain, the spaces need to be replaced with dashes or plus-signs. */
			var item_name_dash = change_space("-");
			var item_name_plus = change_space("+");

			/* Verify which domains were checked off by user. */
			for (var site=0; site < domains.length; site++) {
				if (domains[site][0].checked) {
					if (site == 0) {
						var product = item_name_dash;
					}
					else {
						var product = item_name_plus;
					}
					/* If site is checked, creates a new tab opening url. */
					chrome.tabs.create({url: domains[site][1] + product + domains[site][2]});
				}
			}	
		}
	};
}
	// For future reference:
	// 		Version 1.1
	// "options_page" : "options.html",
	// "options_ui": {
	// 	"page": "configuration.html",
	// 	"chrome_style": true
	// 	},




