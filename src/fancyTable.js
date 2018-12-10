/*!
 * jQuery fancyTable plugin
 * https://github.com/myspace-nu
 *
 * Copyright 2018 Johan Johansson
 * Released under the MIT license
 */
(function($) {
	$.fn.fancyTable = function(options) {
		var settings = $.extend({
			inputStyle: "",
			inputPlaceholder: "Search...",
			pagination: false,
			paginationClass: "btn btn-light",
			paginationClassActive: "active",
			pagClosest: 3,
			perPage: 10,
			sortable: true,
			searchable: true,
		  	onInit: function(){ },
		  	testing: false
		}, options);
		var instance = this;
		this.tableUpdate = function (elm) {
			elm.fancyTable.matches = 0;
			$(elm).find("tbody tr").each(function() {
				var n=0;
				var match = true;
				var globalMatch = false;
				$(this).find("td").each(function() {
					if(!settings.globalSearch && elm.fancyTable.searchArr[n] && !(new RegExp(elm.fancyTable.searchArr[n],"i").test($(this).html()))){
						match = false;
					} else if(settings.globalSearch && (!elm.fancyTable.search || (new RegExp(elm.fancyTable.search,"i").test($(this).html())))){
						globalMatch = true;
					}
					n++;
				});
				if((settings.globalSearch && globalMatch) || (!settings.globalSearch && match)){
					elm.fancyTable.matches++
					if(!settings.pagination || (elm.fancyTable.matches>(elm.fancyTable.perPage*(elm.fancyTable.page-1)) && elm.fancyTable.matches<=(elm.fancyTable.perPage*elm.fancyTable.page))){
						$(this).show();
					} else {
						$(this).hide();
					}
				} else {
					$(this).hide();
				}
			});
			elm.fancyTable.pages = Math.ceil(elm.fancyTable.matches/elm.fancyTable.perPage);
			if(settings.pagination){
				$(elm).find(".pag").empty();
				for(var n=1; n<=elm.fancyTable.pages; n++){
					if(n==1 || (n>(elm.fancyTable.page-(settings.pagClosest+1)) && n<(elm.fancyTable.page+(settings.pagClosest+1))) || n==elm.fancyTable.pages){
						var a = $("<a>",{
							html:n,
							"data-n": n,
							style:"margin:0.2em",
							class:settings.paginationClass+" "+((n==elm.fancyTable.page)?settings.paginationClassActive:"")
						}).css("cursor","pointer").bind("click",function(){
							elm.fancyTable.page = $(this).data("n");
							instance.tableUpdate(elm);
						});
						if(n==elm.fancyTable.pages && elm.fancyTable.page<(elm.fancyTable.pages-settings.pagClosest-1)){
							$(elm).find(".pag").append($("<span>...</span>"));
						}
						$(elm).find(".pag").append(a);
						if(n==1 && elm.fancyTable.page>settings.pagClosest+2){
							$(elm).find(".pag").append($("<span>...</span>"));
						}
					}
				}
			}
		};
		this.tableSort = function (elm) {
			if(typeof elm.fancyTable.sortColumn !== "undefined" && elm.fancyTable.sortColumn < elm.fancyTable.nColumns){
				var rows = $(elm).find("tbody tr").toArray().sort(
					function(a, b) {
						var stra = $(a).find("td").eq(elm.fancyTable.sortColumn).html();
						var strb = $(b).find("td").eq(elm.fancyTable.sortColumn).html();
						return((stra<strb)?-elm.fancyTable.sortOrder:(stra>strb)?elm.fancyTable.sortOrder:0);
					}
				);
				$(elm).find("tbody").empty().append(rows);
			}
		};
		this.each(function() {
			if($(this).prop("tagName")!=="TABLE"){
				console.warn("fancyTable: Element is not a table.");
				return true;
			}
			var elm = $(this);
			elm.fancyTable = {
				nColumns: $(elm).find("td").first().parent().find("td").length,
				nRows : $(this).find("tbody tr").length,
				perPage : settings.perPage,
				page : 1,
				pages : 0,
				matches : 0,
				searchArr : [],
				search : "",
				sortColumn : settings.sortColumn,
				sortOrder : 1
			};
			
			if($(elm).find("tbody").length==0){
				var content = $(elm).html();
				$(elm).empty();
				$(elm).append("<tbody>").append($(content));
			}
			if($(elm).find("thead").length==0){
				$(elm).prepend($("<thead>"));
				// Maybe add generated headers at some point
				//var c=$(elm).find("tr").first().find("td").length;
				//for(var n=0; n<c; n++){
				//	$(elm).find("thead").append($("<th></th>"));
				//}
			}
			if(settings.sortable){
				var n=0;
				$(elm).find("thead th").each(function() {
					var content = $(this).html();
					var a = $("<a>",{
						html:content,
						"data-n": n,
						class:""
					}).css("cursor","pointer").bind("click",function(){
						if(elm.fancyTable.sortColumn == $(this).data("n")){
							elm.fancyTable.sortOrder=-elm.fancyTable.sortOrder;
						} else {
							elm.fancyTable.sortOrder=1;
						}
						elm.fancyTable.sortColumn = $(this).data("n");
						instance.tableSort(elm);
						instance.tableUpdate(elm);
					});
					$(this).empty();
					$(this).append(a);
					n++;
				});
			}
			if(settings.searchable){
				var searchHeader = $("<tr>");
				if(settings.globalSearch){
					var searchField = $("<input>",{
						"placeholder": settings.inputPlaceholder,
						style:"width:100%;"+settings.inputStyle
					}).bind("change paste keyup",function(){
						elm.fancyTable.search = $(this).val();
						instance.tableUpdate(elm);
					});
					var th = $("<th>",{ style:"padding:2px;" }).attr("colspan",elm.fancyTable.nColumns);
					$(searchField).appendTo($(th));
					$(th).appendTo($(searchHeader));
				} else {
					var n=0;
					$(elm).find("td").first().parent().find("td").each(function() {
						elm.fancyTable.searchArr.push("");
						var searchField = $("<input>",{
							"data-n": n,
							"placeholder": settings.inputPlaceholder,
							style:"width:100%;"+settings.inputStyle
						}).bind("change paste keyup",function(){
							elm.fancyTable.searchArr[$(this).data("n")] = $(this).val();
							instance.tableUpdate(elm);
						});
						var th = $("<th>",{ style:"padding:2px;" });
						$(searchField).appendTo($(th));
						$(th).appendTo($(searchHeader));
						n++;
					});
				}
				searchHeader.appendTo($(elm).find("thead"));
			}
			// Sort
			instance.tableSort(elm);
			if(settings.pagination){
				$(elm).find("tfoot").remove();
				$(elm).append($("<tfoot><tr></tr></tfoot>"));
				$(elm).find("tfoot tr").append($("<td class='pag'></td>",{ }).attr("colspan",elm.fancyTable.nColumns));
			}
			instance.tableUpdate(elm);
		});
		return this;
	};
}(jQuery));