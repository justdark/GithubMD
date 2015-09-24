// chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
//   //console.log(JSON.stringify(details));
//     var headers = details.requestHeaders,
//       blockingResponse = {};

//     // Each header parameter is stored in an array. Since Chrome
//     // makes no guarantee about the contents/order of this array,
//     // you'll have to iterate through it to find for the
//     // 'User-Agent' element
//     for( var i = 0, l = headers.length; i < l; ++i ) {
//       if( headers[i].name == 'User-Agent' ) {
//         headers[i].value = '>>> Your new user agent string here <<<';
//         console.log(headers[i].value);
//         break;
//       }
//       // If you want to modify other headers, this is the place to
//       // do it. Either remove the 'break;' statement and add in more
//       // conditionals or use a 'switch' statement on 'headers[i].name'
//     }

//     blockingResponse.requestHeaders = headers;
//     return blockingResponse;
// },
// {urls: [ "<all_urls>" ]},['requestHeaders','blocking']);
chrome.webRequest.onHeadersReceived.addListener(function(details) {
details.responseHeaders.push({name:'Access-Control-Allow-Origin',value:"*"});
    for( var i = 0, l = details.responseHeaders.length; i < l; ++i ) {
      if( details.responseHeaders[i].name == 'Content-Security-Policy' ) {
        details.responseHeaders[i].value = "";
        break;
      }}
      
// console.log(details.responseHeaders)
  return {responseHeaders:details.responseHeaders};
  },{urls: ["<all_urls>"]}, ["responseHeaders","blocking"]);

chrome.webRequest.onCompleted.addListener(function(details) {
	  console.log('asd');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      	if (tabs.length>0)
      	{
      		for ( var j = 0, l = tabs.length; j < l; ++j ) {
      		console.log(tabs[j].id);
			chrome.tabs.sendMessage(tabs[j].id, {greeting: "hello"});
			}
		}
        });
// console.log(details.responseHeaders)
  return {responseHeaders:details.responseHeaders};
  },{urls: ["<all_urls>"]});