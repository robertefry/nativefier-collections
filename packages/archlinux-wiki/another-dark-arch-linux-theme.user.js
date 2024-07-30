// ==UserScript==
// @name          Another dark Arch Linux theme
// @namespace     http://userstyles.org
// @description	  A quick and dirty dark theme for archlinux.org. Works for the front page, wiki, packages, aur & forums. <strike>Forum support coming soon (maybe).</strike> Kinda fixed, I guess.
// @author        kiwii
// @homepage      https://userstyles.org/styles/89090
// @include       http://archlinux.org/*
// @include       https://archlinux.org/*
// @include       http://*.archlinux.org/*
// @include       https://*.archlinux.org/*
// @run-at        document-start
// @version       0.20141221235435
// ==/UserScript==
(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"body, #content, table {",
	"        background-color: #201f1f !important;",
	"        color: #d4d2cf !important;",
	"    }",
	"    h1, h2, h3, h4, h5 {",
	"        color: #FFFFFF !important;",
	"    }",
	"    pre, code, .pBody, #p-cactions li a {",
	"        background-color: #2b2a2a !important;",
	"        border: none !important;",
	"        color: #d4d2cf !important;",
	"    }",
	"    div, #p-personal .portlet, #p-personal .pBody, #p-cactions .pBody {",
	"        background-color: #201f1f !important;",
	"        color: #d4d2cf !important;",
	"    }",
	"    input {",
	"        background-color: #2b2a2a !important;",
	"        color: #d4d2cf !important;",
	"    }",
	"    table.results th {",
	"        background-color: #2b2a2a !important;",
	"    }",
	"    table.results tr.odd {",
	"        background-color: #373636 !important;",
	"    }",
	"    table.results tr.even {",
	"        background-color: #2b2a2a !important;",
	"    }",
	"    .pun .punwrap, .pun .blockpost h2 {",
	"        border: none;",
	"        background: none;",
	"        border-bottom: 1px dotted #BBB;",
	"        border-top: 1px dotted #BBB;",
	"    }",
	"    #brdmain, .pun .blockpost .postbody, .pun .blockpost .postfoot, .pun .blockpost, .pun .quotebox, .pun .codebox, .pun .pagelink a, .pun .pagelink * {",
	"        border-style: none !important;",
	"    }",
	"    .pun .quotebox, pre, code, .pun .quotebox blockquote div {",
	"        background-color: #2B2A2A !important;",
	"    }",
	"    #brdmenu a, #brdmenu a:link, #brdmenu a:visited, .pun .blocktable * {",
	"        background-color: #201f1f !important;",
	"        border: none !important;",
	"    }",
	"    .pun .blocktable tr {",
	"        border-top: 1px dotted #BBB !important;",
	"    }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
