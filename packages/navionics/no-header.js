
var header = document.getElementById('site-header1');
header.parentNode.removeChild(header);

var content = document.getElementById('site-content');
var contentWrapper = content.parentNode;

contentWrapper.parentNode.insertBefore(content, contentWrapper);
contentWrapper.parentNode.removeChild(contentWrapper);
