usingNamespace("Biz.SearchPanel2016")["Navigation"] = {showMoreLessValues: function (e, txtMore, txtLess) {var $self = jQuery(e);if ($self.parent().siblings('.filter-box-list.more')[0]) {$self.parent().siblings('.filter-box-list.more').stop().slideToggle();$self.parents('.filter-box').toggleClass('show-more');if ($self.parents('.filter-box.show-more')[0]) {$self.children('.filter-box-more-text').text(txtLess);} else {$self.children('.filter-box-more-text').text(txtMore);}}},bindOnLoadEvent: function () {try {jQuery(".more-options-wrap").children(".filter-box.has-menu").show();} catch (e) { }},bindMainClickEvent: function () {jQuery('.filter-box.has-menu .filter-box-title').unbind('click').click(function () {jQuery(this).siblings('.filter-box-body').slideToggle();jQuery(this).parent().toggleClass('is-active');});},bindRangeClickEvent: function () {jQuery('.left-nav').find("div[name='filter-box-label-parent']").click(function (e) {var obj = e.target.toString();if (obj != "[object HTMLDivElement]") {return;}jQuery(this).siblings('.filter-box-list').stop().slideToggle();jQuery(this).parent().toggleClass('is-active');jQuery(this).next(".filter-box-list").toggleClass("is-active");});jQuery('.left-nav').find('.filter-box-list > li.has-submenu ul.filter-box-list').each(function (i, e) {var hasChecked, hasUnchecked;jQuery(e).find('input').each(function (j, ipt) {if (jQuery(ipt).is(':checked')) {hasChecked = true;} else {hasUnchecked = true;}});if (hasChecked && hasUnchecked) {jQuery(e).prev().find('input')[0].indeterminate = true;}});},bindSeachPanelEvents: function () {Biz.SearchPanel2016.Navigation.bindOnLoadEvent();Biz.SearchPanel2016.Navigation.bindMainClickEvent();Biz.SearchPanel2016.Navigation.bindRangeClickEvent();},iniPopups: function (popupid, facetId, facetName, loading, _all, _top, _filterBy) {if (popupid == null || popupid.length == 0)return;jQuery("#" + popupid).on("shown.ng.popup", function () {Biz.SearchPanel2016.NavigationListLimit.loadPopupData(facetId, popupid, facetName, loading, _all, _top, _filterBy);});jQuery("#" + popupid).on("hidden.ng.popup", function () {Biz.SearchPanel2016.NavigationListLimit.closePopUp();});}};usingNamespace("Biz.SearchPanel2016")["NavigationListLimit"] = {Config: {},opObject: null,CurrentControls: [],_isCrossDomain: false,_loadedFacets: {},_countrolBuiledPopups: {},_facetId: null,_isAjaxRequest: false,_facetName: null,_isShowItemCount: true,_popUpIDs: {},AutoSuggestionTerms: "",SearchResultType: "",loadPopupData: function (facetId, popupid, facetName, loading, _all, _top, _filterBy) {this._popUpID = jQuery("#" + popupid).data("target-id");this.opObject = jQuery("#" + popupid + " .filter-box-more-text")[0];this._facetId = facetId;this._facetName = facetName;var control = jQuery("#" + popupid);if (this.CurrentControls.indexOf(control) >= 0) {return;}else {this.CurrentControls.push(control);}var isExistsFacet = false;if (!!facetId) {if (this._loadedFacets != null) {for (var obj in this._loadedFacets) {if (obj == facetId) {isExistsFacet = true;break;}}}} else {return;}this._facetId = facetId;this.opObject = control;var me = this;Biz.SearchPanel2016.NavigationListLimit.showLoading(me._popUpID, loading, true);if (!isExistsFacet) {this._isAjaxRequest = true;var requestObj = {beforeSend: function () {},Success: function (msg) {var jsonResult = Object.fromJSON(msg);if (jsonResult) {Biz.SearchPanel2016.NavigationListLimit._loadedFacets[facetId] = JSON.stringify(jsonResult);jQuery("#" + popupid).show();Biz.SearchPanel2016.NavigationListLimit.iniPopUpContent(popupid, facetId, facetName, loading, _all, _top, _filterBy);}},complete: function () {Biz.SearchPanel2016.NavigationListLimit.showLoading(me._popUpID, loading, false);},error: function () {Biz.SearchPanel2016.NavigationListLimit.showLoading(me._popUpID, loading, false);}};var isEventSaleStore = jQuery("#facet_IsEventSaleStore").val();var popupData = jQuery("#facet_" + popupid).val();if (isEventSaleStore === "1" && popupData) {requestObj.Success(popupData);} else {this.ajaxRequest(requestObj, facetId);}} else {Biz.SearchPanel2016.NavigationListLimit.iniPopUpContent(me._popUpID, facetId, facetName, loading, _all, _top, _filterBy);}if (typeof this.CurrentControls != "undefined" && this.CurrentControls != null) {for (var i = 0; i < this.CurrentControls.length; i++) {if (this.CurrentControls[i] == control) {this.CurrentControls.splice(i, 1);break;}}}},iniPopUpContent: function (popUpID, facetId, facetName, loading, _all, _top, _filterBy) {this.changeHead(facetName, _all, _top, _filterBy);var _oringinalNValue = this.GetNValueByURL();if (typeof _oringinalNValue != "undefined" && _oringinalNValue != null && _oringinalNValue != null)jQuery("#" + this._popUpID + " #hidSelectedNList").val(_oringinalNValue);else {jQuery("#" + this._popUpID + " #hidSelectedNList").val();}Biz.SearchPanel2016.NavigationListLimit.buildControl(null, this._popUpID);},drop_Down: function (control, facetId, facetName, txtMore, txtLess, loading) {if (this.CurrentControls.indexOf(control) >= 0) {} else {this.CurrentControls.push(control);}var isExistsFacet = false;if (!!facetId) {if (this._loadedFacets != null) {for (var obj in this._loadedFacets) {if (obj == facetId) {isExistsFacet = true;break;}}}} else {return;}this.opObject = control;this._facetId = facetId;this._facetName = facetName;this._isShowItemCount = Biz.SearchPanel2016.NavigationListLimit.Config.RequestContent.IsShowItemCount;var _oringinalNValue = this.GetNValueByURL();if (typeof _oringinalNValue != "undefined" && _oringinalNValue != null && _oringinalNValue != null)jQuery("#departmentHidSelectedNList").val(_oringinalNValue);else {jQuery("#departmentHidSelectedNList").val();}var showMoreSpan = jQuery(this.opObject);if (!isExistsFacet) {this.ajaxRequestDropDownEvent();} else {var $self = showMoreSpan;if ($self.parent().siblings('.filter-box-list.more')[0]) {$self.parent().siblings('.filter-box-list.more').stop().slideToggle();$self.parents('.filter-box').toggleClass('show-more');if ($self.parents('.filter-box.show-more')[0]) {$self.children('.filter-box-more-text').text(txtLess);} else {$self.children('.filter-box-more-text').text(txtMore);}}}if (typeof this.CurrentControls != "undefined" && this.CurrentControls != null) {for (var i = 0; i < this.CurrentControls.length; i++) {if (this.CurrentControls[i] == control) {this.CurrentControls.splice(i, 1);break;}}}},ajaxRequestDropDownEvent: function () {jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).siblings(".loader").show();jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).hide();var requestObj = {beforeSend: function () { },Success: function (msg) {var jsonResult = Object.fromJSON(msg);if (jsonResult) {Biz.SearchPanel2016.NavigationListLimit.buildDropDownContent(jsonResult);}jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).siblings(".loader").hide();jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).show();Biz.SearchPanel2016.Navigation.showMoreLessValues(jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject), 'Show More', 'Show Less');},complete: function () {jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).siblings(".loader").hide();jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).show();},error: function () {jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).siblings(".loader").hide();jQuery(Biz.SearchPanel2016.NavigationListLimit.opObject).show();}};Biz.SearchPanel2016.NavigationListLimit.ajaxRequest(requestObj);},getRequestUrl: function () {var requestUrl;requestUrl = Web.UI.ResourceManager.Url.www("Common/Ajax/GetNavigationList2016.aspx");return requestUrl;},ajaxRequest: function (requestObj, facetId) {if (!facetId) {facetId = Biz.SearchPanel2016.NavigationListLimit._facetId;}jQuery.ajax({type: "GET",url: Biz.SearchPanel2016.NavigationListLimit.getRequestUrl(),cache: false,beforeSend: function (XMLHttpRequest) {requestObj.beforeSend();},data: Biz.SearchPanel2016.NavigationListLimit.buildParms(facetId, false),success: function (msg) {requestObj.Success(msg);},complete: function (XMLHttpRequest, textStatus) {requestObj.complete();},error: function (xmlHttpRequest, error) {requestObj.error();}});},changeHead: function (facetName, _all, _top, _filterBy) {var _fName = this.convertComplex(facetName);jQuery('#' + this._popUpID + ' .centerPopup-title').html("<h2>" + _filterBy + ": \"" + _fName + "\"" + "</h2>");jQuery('#' + this._popUpID + ' .complete-section-filter-alphabet li:eq(0)').children('a').html(_top + "&nbsp;" + _fName);jQuery('#' + this._popUpID + ' .complete-section-filter-alphabet li:eq(1)').children('a').html(_all);},convertComplex: function (word) {if (typeof word == "undefined" || word == null || word == "")return "";else word = word.trim();var _result = word, _oneLeter = "", _twoLeter = "", _subfix = "s";var _wordLen = word.length;switch (_wordLen) {case 1:_oneLeter = word;break;case 2:_oneLeter = word.substring(1);_twoLeter = word;break;default:_oneLeter = word.substring(_wordLen - 2);_twoLeter = word.substring(_wordLen - 1);break;}switch (_twoLeter) {case "sh":case "ch":_subfix = "es";break;}switch (_oneLeter) {case "s":case "x":_subfix = "es";break;case "y":if (_wordLen > 1)_result = _result.substring(_wordLen - 1);_subfix = "ies";break;}return _result + _subfix;},buildControl: function (jsonResult, popUpID) {if (jsonResult === "undefined" || jsonResult == null || jsonResult == "") {jsonResult = Object.fromJSON(Biz.SearchPanel2016.NavigationListLimit._loadedFacets[Biz.SearchPanel2016.NavigationListLimit._facetId]);}if (popUpID === "undefined" || popUpID == null || popUpID == "") {popUpID = this._popUpID;}var _popUpShowType = "a";var _itemSumLength = 0;for (var p in jsonResult) {if (p) {var popUpShowType = jsonResult[p].ShowType;if (typeof popUpShowType != "undefined" && popUpShowType != null)_popUpShowType = popUpShowType;var itemList = jsonResult[p].Items;if (typeof itemList != "undefined" && itemList != null)_itemSumLength = itemList.length;}break;}if (_itemSumLength == 0) {jQuery("#" + this._popUpID).data("ng.popup").hide();return;}jQuery('#' + popUpID + ' .complete-section-filter-alphabet li').removeClass('is-active');jQuery('#' + popUpID + ' .complete-section-filter-alphabet li:gt(1)').show();if (_popUpShowType == "b") {jQuery('#' + popUpID + ' .complete-section-filter').show();if (_itemSumLength <= 80)jQuery('#' + popUpID + ' .complete-section-filter').hide();else {var firstLetterOfHaveResult = this.buildAlpha(_popUpShowType);jQuery('#' + popUpID + ' .complete-section-filter-alphabet  li:eq(0)').hide();jQuery('#' + popUpID + ' .complete-section-filter-alphabet  li:eq(1)').hide();jQuery('#' + popUpID + ' .complete-section-filter-alphabet  li:eq(2)').addClass('filter-alpha-head');if (typeof firstLetterOfHaveResult != "undefined" && firstLetterOfHaveResult != null && firstLetterOfHaveResult != "") {jsonResult = this.SelectDataByAlpha(firstLetterOfHaveResult);if (!jQuery("#" + popUpID + " .complete-section-filter-alphabet  li:gt(1):contains('" + firstLetterOfHaveResult + "')").hasClass('is-active'))jQuery("#" + popUpID + " .complete-section-filter-alphabet  li:gt(1):contains('" + firstLetterOfHaveResult + "')").addClass('is-active');}}} else {jQuery('#' + popUpID + ' .complete-section-filter-alphabet  li:eq(0)').show();if (!jQuery('#' + popUpID + ' .complete-section-filter-alphabet  li:eq(0)').hasClass('filter-alpha-head is-active'))jQuery('#' + popUpID + ' .complete-section-filter-alphabet  li:eq(0)').addClass('filter-alpha-head is-active');jQuery('#' + popUpID + ' .complete-section-filter-alphabet  li:eq(1)').hide();if (_itemSumLength > 80) {this.buildAlpha(_popUpShowType);jQuery('#' + popUpID + ' .complete-section-filter').show();} else {jQuery('#' + popUpID + ' .complete-section-filter').hide();}}this.buildContent(jsonResult, popUpID);jQuery("#" + popUpID).siblings(".loader").hide();jQuery("#" + popUpID).siblings("#" + popUpID).show();this._isAjaxRequest = false;},buildAlpha: function (popUpShowType) {var jsonResult = this._loadedFacets[this._facetId];var firstLetterOfHaveResult;jQuery("#" + this._popUpID + " .complete-section-filter-alphabet  li").each(function (i) {var obA = jQuery(this).children('a');var strLetter = obA.text().toUpperCase().trim();if (typeof jsonResult != "undefined" && jsonResult != null && jsonResult != "") {if (jsonResult.indexOf("\"letter\":\"" + strLetter + "\"") > 0) {jQuery(this).removeClass('is-disabled');if (i > 1 && (typeof firstLetterOfHaveResult == "undefined" || firstLetterOfHaveResult == null || firstLetterOfHaveResult == ""))firstLetterOfHaveResult = strLetter;}}obA.bind("click", function () {var dataSourse;if (jQuery(this).parent().hasClass('is-disabled'))return;jQuery(this).parent().siblings('li').removeClass('is-active');if (!jQuery(this).parent().hasClass('is-active'))jQuery(this).parent().addClass('is-active');switch (i) {case 0:if (popUpShowType == "b")dataSourse = Biz.SearchPanel2016.NavigationListLimit.SelectDataByAlpha("yes");else {dataSourse = Object.fromJSON(Biz.SearchPanel2016.NavigationListLimit._loadedFacets[Biz.SearchPanel2016.NavigationListLimit._facetId]);}break;case 1:dataSourse = Object.fromJSON(Biz.SearchPanel2016.NavigationListLimit._loadedFacets[Biz.SearchPanel2016.NavigationListLimit._facetId]);break;default:dataSourse = Biz.SearchPanel2016.NavigationListLimit.SelectDataByAlpha(strLetter);break;}Biz.SearchPanel2016.NavigationListLimit.buildContent(dataSourse);});});return firstLetterOfHaveResult;},SelectDataByAlpha: function (selectLetter) {var jsonResult = Object.fromJSON(this._loadedFacets[this._facetId]);if (jsonResult != undefined && jsonResult != null) {var content = new Array();var elementCon = new Array();for (var p in jsonResult) {if (p) {content.push("{\"" + p + "\":{\"Items\":[");var itemList = jsonResult[p].Items;if (typeof itemList != "undefined" && itemList != null) {for (var i = 0; i < itemList.length; i++) {var letter;if (selectLetter != "yes") {letter = itemList[i].letter.trim();} else {letter = itemList[i].istop.trim();}if (letter == selectLetter) {elementCon.push(JSON.stringify(itemList[i]));}}}content.push(elementCon.join(','));content.push("]}}");}break;}return Object.fromJSON(content.join(''));}return null;},buildContent: function (jsonResult, popUpID) {if (typeof jsonResult == "undefined" || jsonResult == null || !jsonResult)return 0;if (typeof popUpID == "undefined" || popUpID == null || !popUpID)popUpID = this._popUpID;var content = new Array();for (var p in jsonResult) {if (p) {var itemList = jsonResult[p].Items;if (typeof itemList == "undefined" || itemList == null)continue; var itemLength = jsonResult[p].Items.length;for (var i = 0; i < itemLength; i++) {var title = itemList[i].title;var N = itemList[i].N;var objID = title + "ID";content.push(" <li>");content.push(" <div class=\"filter-box-label\"> ");content.push(" <label class=\"form-checkbox\"> ");content.push(" <input type=\"checkbox\" onclick=\"Biz.SearchPanel2016.NavigationListLimit.checkEvent(this)\"");content.push(" id=\"ck" + N + "\" name=\"" + title + "\" />");content.push("<span class=\"form-checkbox-title\">" + itemList[i].title + "</span>");content.push("</label>");content.push("</div>");if (this._isShowItemCount)content.push("<span class=\"filter-box-num\">(" + itemList[i].count + ")</span>");}jQuery("#" + popUpID + " .complete-section-list").html(content.join(''));this.initCheckBox();Biz.SearchPanel2016.NavigationListLimit.showLoading(this._popUpID, "", false);return itemLength;}break;}},buildDropDownContent: function (jsonResult) {Biz.SearchPanel2016.NavigationListLimit._loadedFacets[Biz.SearchPanel2016.NavigationListLimit._facetId] = JSON.stringify(jsonResult);var existsTitleItemArray = new Array();var opObj = jQuery(this.opObject);if (typeof jsonResult == "undefined" || jsonResult == null || !jsonResult)return 0;var content = new Array();var _hidNSValue = opObj.closest("dl").next("[name='hidNSValue']").val();if (typeof _hidNSValue != "undefined" && _hidNSValue != null && _hidNSValue != "")existsTitleItemArray = _hidNSValue.split(',');for (var p in jsonResult) {if (p) {var itemList = jsonResult[p].Items;if (typeof itemList == "undefined" || itemList == null)continue; var _showType = jsonResult[p].ShowType;if (typeof _showType == "undefined" || _showType == null)_showType = "";_showType = _showType.trim();var itemLength = jsonResult[p].Items.length;for (var i = 0; i < itemLength; i++) {if (existsTitleItemArray.indexOf(itemList[i].N.trim()) >= 0)continue; if (_showType == "c") {content.push("<li>");content.push("<a class=\"filter-box-label\" href=\"" + itemList[i].href + "\" title=\"" + itemList[i].title + "\">");content.push(itemList[i].title);content.push("<span style=\"display:none;\">" + itemList[i].Ns.trim() + "</span>");content.push("</a>");content.push("<span class=\"filter-box-num\">(" + itemList[i].count + ")</span>");content.push("</li>");}}opObj.parents(".filter-box-body").children(".filter-box-list.more").html(content.join(''));}break;}},checkEvent: function (domObj) {var obj;var isExist = false;var currentN = "";if (domObj.id.length > 2)currentN = domObj.id.substring(2);if (domObj.checked == true) {obj = {callback: function (i, obj, objArray) {if (currentN == obj)return true;if ((objArray.length > 0 && i == objArray.length - 1) || objArray.length == 0) {objArray.push(currentN);jQuery(".is-current div #hidSelectedNList").val(objArray.join(' '));}}};} else {obj = {callback: function (i, obj, objArray) {if (currentN == obj) {objArray.splice(i, 1);jQuery(".is-current div #hidSelectedNList").val(objArray.join(' '));return true;}}};}this.opNList(obj);},initCheckBox: function () {var obj = {callback: function (i, obj, objArray) {if (typeof obj != "undefined" && obj != null && obj != "") {if (jQuery(".is-current div .filter-box-list #ck" + obj.trim()).length > 0)jQuery(".is-current div .filter-box-list #ck" + obj.trim()).attr("checked", true);}return false;}};this.opNList(obj);},opNList: function (obj) {var nArray = [];var NList = jQuery(".is-current div #hidSelectedNList").val();if (typeof NList == "undefined" || NList == null)NList = "";nArray = NList.split(' ');if (typeof nArray != "undefined" && nArray != null && nArray.length > 0) {for (var i = 0; i < nArray.length; i++) {var result = obj.callback(i, nArray[i], nArray);if (result)break;}} else {obj.callback(0, null, nArray);}},applyFiltersEvent: function () {var noParmUrl = Web.UI.ResourceManager.Url.www("Product/ProductList.aspx");var parms = this.buildParms(this._facetId, true);NEG.run(function (require) {var loading = require("Biz.Common.Loading2016");loading.show();});var isEventSaleStore = jQuery("#facet_IsEventSaleStore").val();if (isEventSaleStore === "1") {parms = jQuery("#" + this._popUpID + " #hidSelectedNList").val();var nValue = Biz.ProductList.Config.baseQueryString.get("N").split(' ')[0];cfg.baseQueryString.set("N", nValue.trim() + " " + parms);Biz.ProductList.Common.redirect();} else {window.location.href = noParmUrl + "?" + parms;}},buildParms: function (refinements, isSubmit) {var result, selectedNList;if (isSubmit) {var selectedNListStr = jQuery("#" + this._popUpID + " #hidSelectedNList").val();if (typeof selectedNListStr != "undefined" && selectedNListStr != null && selectedNListStr != "")selectedNList = selectedNListStr.split(' ');}result = this.buildParmsByURl(selectedNList, refinements);if (!isSubmit) {if (typeof result != "undefined" && result != null) {if (typeof refinements != "undefined" && refinements != null && refinements != "")result.push("refinements=" + refinements);}var ast = Biz.SearchPanel2016.NavigationListLimit.AutoSuggestionTerms;var srt = Biz.SearchPanel2016.NavigationListLimit.SearchResultType;if (typeof ast != "undefined" && ast != null && ast != '') {result.push('QksAutoSuggestion=' + ast);}if (typeof srt != "undefined" && srt != null && srt != '') {result.push('SearchResultType=' + srt);var n = [];if (jQuery("#haQuickSearchStore") && jQuery("#haQuickSearchStore") != null) {var dropDown_N = jQuery("#haQuickSearchStore option").map(function () { return jQuery(this).val(); }).toArray();var selected_N = [""];if (Biz.SearchPanel2016.NavigationListLimit.Config != null &&Biz.SearchPanel2016.NavigationListLimit.Config.RequestContent != null &&Biz.SearchPanel2016.NavigationListLimit.Config.RequestContent.N != null) {selected_N = Biz.SearchPanel2016.NavigationListLimit.Config.RequestContent.N.split(" ");}jQuery(selected_N).each(function (index, value) {if (dropDown_N.contains(value)) {n.push(value);}});}if (n.length > 0) {result.push('StoreID=' + n.join(" "));}}}if (typeof result != "undefined" && result != null)return result.join('&');return "";},buildParmsByURl: function (selectedNList, facetid) {var newUrlParms = [];var isExistN = false;var currentUrlParmsStr;if (typeof jQuery(this.opObject).parent().siblings("[name='hidTempletUrlParms']").val() == "undefined") {currentUrlParmsStr = jQuery("#facet" + facetid + " [name='hidTempletUrlParms']").val();} else {currentUrlParmsStr = jQuery(this.opObject).parent().siblings("[name='hidTempletUrlParms']").val()}if (typeof currentUrlParmsStr != "undefined" && currentUrlParmsStr != null) {var parmArray = currentUrlParmsStr.split('&');for (var i = 0; i < parmArray.length; i++) {var parmObj = parmArray[i];if (typeof parmObj != "undefined" && parmObj != null && parmObj != '') {if (parmObj.indexOf('=') > 0) {var eleArray = parmObj.split('=');if (typeof eleArray[0] != "undefined" && eleArray[0] != null && eleArray[0] != '') {if (eleArray[0].toLowerCase() == 'n') {isExistN = true;if (typeof selectedNList != "undefined" && selectedNList != null) {parmObj = "N=" + selectedNList.join(' ');} else if (!!Biz.SearchPanel2016.NavigationListLimit.Config.RequestContent) {parmObj = "N=" + Biz.SearchPanel2016.NavigationListLimit.Config.RequestContent.N;}}}}newUrlParms.push(parmObj);}}}if (!isExistN) {var nValue;if (typeof selectedNList != "undefined" && selectedNList != null)nValue = "N=" + selectedNList.join(' ');if (typeof nValue != "undefined" && nValue != null && nValue != "")newUrlParms.push(nValue);}return newUrlParms;},GetNValueByURL: function () {var result;var currentUrlParmsStr = jQuery(this.opObject).parent().siblings("[name='hidTempletUrlParms']").val();if (typeof currentUrlParmsStr != "undefined" && currentUrlParmsStr != null) {var parmArray = currentUrlParmsStr.split('&');for (var i = 0; i < parmArray.length; i++) {var parmObj = parmArray[i];if (typeof parmObj != "undefined" && parmObj != null && parmObj != '') {if (parmObj.indexOf('=') > 0) {var eleArray = parmObj.split('=');if (typeof eleArray[0] != "undefined" && eleArray[0] != null && eleArray[0] != '') {if (eleArray[0].toLowerCase() == 'n') {result = eleArray[1];break;}}}}}}return result;},closePopUp: function () {jQuery("#" + this._popUpID + " ul[class='filter-box-list complete-section-list']").html('');jQuery("#" + this._popUpID + " #hidSelectedNList").val('');this.opObject = null;this._facetId = null;this._popUpID = null;},showLoading: function (popupid, loading, shown) {var displayString = "none";var popupWindow = jQuery("#" + popupid + " .complete-sections-wrap");if (shown) {displayString = "block";}if (popupWindow) {if (jQuery("#" + popupid + " .loader")) {jQuery("#" + popupid + " .loader").remove();}if (jQuery("#" + popupid + " .overlay")) {jQuery("#" + popupid + " .overlay").remove();}var loadingArea = '<div class="loader" style="display:' + displayString + '"><i class="fa fa-spinner fa-pulse"></i>' + loading + '</div>';jQuery("#" + popupid + " .complete-sections-wrap").append(loadingArea);}if (jQuery("#" + popupid).data("ng.popup")) {jQuery("#" + popupid).data("ng.popup").update();}},_Reset: function () {this._loadedFacets = {};this.CurrentControls = [];}};jQuery(document).ready(function () {Biz.SearchPanel2016.Navigation.bindSeachPanelEvents();});