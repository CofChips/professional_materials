$(document).ready(function () {

var aboutLink = $("#aboutLink");
var portfolioLink = $("#portfolioLink");
var contactLink = $("#contactLink");

var aboutDisplayEl = $("#aboutDisplayEl");
var portfolioDisplayEl = $("#portfolioDisplayEl");
var contactDisplayEl = $("#contactDisplayEl");

aboutLink.on("click",function(){
    aboutDisplayEl.attr("style","display:block;")
    portfolioDisplayEl.attr("style","display:none;")
    contactDisplayEl.attr("style","display:none;");
})

portfolioLink.on("click",function(){
    aboutDisplayEl.attr("style","display:none;");
    portfolioDisplayEl.attr("style","display:block;");
    contactDisplayEl.attr("style","display:none;");
})

contactLink.on("click",function(){
    aboutDisplayEl.attr("style","display:none;")
    portfolioDisplayEl.attr("style","display:none;")
    contactDisplayEl.attr("style","display:block;");
})

})