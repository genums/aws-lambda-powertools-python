(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{if7T:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));n("NO8f"),n("rGqo"),n("yt8O"),n("/8Fb"),n("DNiP"),n("bWfx"),n("91GP"),n("KKXr"),n("VRzm"),n("Btvt");var a=n("mrSG"),o=n("eLY0"),i=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(a){return n={"Content-Type":"application/x-amz-json-1.1","X-Amz-Target":"Kinesis_20131202.PutRecords"},o=JSON.stringify(f(e,t)),[2,P(t,n,"/",void 0,o)]}))}))},r=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o,i;return Object(a.__generator)(this,(function(r){switch(r.label){case 0:return e.statusCode>=400?[2,s(e,t)]:[4,I(e.body,t)];case 1:return n=r.sent(),{},o=K(n,t),i=Object(a.__assign)({$metadata:R(e),__type:"PutRecordsOutput"},o),[2,Promise.resolve(i)]}}))}))},s=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o,i,r,s,f,b,y,E,O,h,j,S,x,w,K,M;return Object(a.__generator)(this,(function($){switch($.label){case 0:return o=[Object(a.__assign)({},e)],i={},[4,I(e.body,t)];case 1:switch(n=a.__assign.apply(void 0,o.concat([(i.body=$.sent(),i)])),s="UnknownError",f=n.body.__type.split("#"),s=void 0===f[1]?f[0]:f[1],s){case"InvalidArgumentException":case"com.amazonaws.kinesis.v20131202#InvalidArgumentException":return[3,2];case"KMSAccessDeniedException":case"com.amazonaws.kinesis.v20131202#KMSAccessDeniedException":return[3,4];case"KMSDisabledException":case"com.amazonaws.kinesis.v20131202#KMSDisabledException":return[3,6];case"KMSInvalidStateException":case"com.amazonaws.kinesis.v20131202#KMSInvalidStateException":return[3,8];case"KMSNotFoundException":case"com.amazonaws.kinesis.v20131202#KMSNotFoundException":return[3,10];case"KMSOptInRequired":case"com.amazonaws.kinesis.v20131202#KMSOptInRequired":return[3,12];case"KMSThrottlingException":case"com.amazonaws.kinesis.v20131202#KMSThrottlingException":return[3,14];case"ProvisionedThroughputExceededException":case"com.amazonaws.kinesis.v20131202#ProvisionedThroughputExceededException":return[3,16];case"ResourceNotFoundException":case"com.amazonaws.kinesis.v20131202#ResourceNotFoundException":return[3,18]}return[3,20];case 2:return b=[{}],[4,c(n,t)];case 3:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,b.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 4:return y=[{}],[4,u(n,t)];case 5:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,y.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 6:return E=[{}],[4,d(n,t)];case 7:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,E.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 8:return O=[{}],[4,_(n,t)];case 9:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,O.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 10:return h=[{}],[4,v(n,t)];case 11:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,h.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 12:return j=[{}],[4,m(n,t)];case 13:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,j.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 14:return S=[{}],[4,p(n,t)];case 15:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,S.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 16:return x=[{}],[4,l(n,t)];case 17:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,x.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 18:return w=[{}],[4,g(n,t)];case 19:return r=a.__assign.apply(void 0,[a.__assign.apply(void 0,w.concat([$.sent()])),{name:s,$metadata:R(e)}]),[3,21];case 20:K=n.body,s=K.code||K.Code||s,r=Object(a.__assign)(Object(a.__assign)({},K),{name:""+s,message:K.message||K.Message||s,$fault:"client",$metadata:R(e)}),$.label=21;case 21:return M=r.message||r.Message||s,r.message=M,delete r.Message,[2,Promise.reject(Object.assign(new Error(M),r))]}}))}))},c=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=y(n,t),[2,Object(a.__assign)({name:"InvalidArgumentException",$fault:"client",$metadata:R(e)},o)]}))}))},u=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=E(n,t),[2,Object(a.__assign)({name:"KMSAccessDeniedException",$fault:"client",$metadata:R(e)},o)]}))}))},d=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=O(n,t),[2,Object(a.__assign)({name:"KMSDisabledException",$fault:"client",$metadata:R(e)},o)]}))}))},_=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=h(n,t),[2,Object(a.__assign)({name:"KMSInvalidStateException",$fault:"client",$metadata:R(e)},o)]}))}))},v=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=j(n,t),[2,Object(a.__assign)({name:"KMSNotFoundException",$fault:"client",$metadata:R(e)},o)]}))}))},m=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=S(n,t),[2,Object(a.__assign)({name:"KMSOptInRequired",$fault:"client",$metadata:R(e)},o)]}))}))},p=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=x(n,t),[2,Object(a.__assign)({name:"KMSThrottlingException",$fault:"client",$metadata:R(e)},o)]}))}))},l=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=w(n,t),[2,Object(a.__assign)({name:"ProvisionedThroughputExceededException",$fault:"client",$metadata:R(e)},o)]}))}))},g=function(e,t){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var n,o;return Object(a.__generator)(this,(function(i){return n=e.body,o=$(n,t),[2,Object(a.__assign)({name:"ResourceNotFoundException",$fault:"client",$metadata:R(e)},o)]}))}))},f=function(e,t){return Object(a.__assign)(Object(a.__assign)({},void 0!==e.Records&&{Records:b(e.Records,t)}),void 0!==e.StreamName&&{StreamName:e.StreamName})},b=function(e,t){return e.map((function(e){return function(e,t){return Object(a.__assign)(Object(a.__assign)(Object(a.__assign)({},void 0!==e.Data&&{Data:t.base64Encoder(e.Data)}),void 0!==e.ExplicitHashKey&&{ExplicitHashKey:e.ExplicitHashKey}),void 0!==e.PartitionKey&&{PartitionKey:e.PartitionKey})}(e,t)}))},y=function(e,t){return{__type:"InvalidArgumentException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},E=function(e,t){return{__type:"KMSAccessDeniedException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},O=function(e,t){return{__type:"KMSDisabledException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},h=function(e,t){return{__type:"KMSInvalidStateException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},j=function(e,t){return{__type:"KMSNotFoundException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},S=function(e,t){return{__type:"KMSOptInRequired",message:void 0!==e.message&&null!==e.message?e.message:void 0}},x=function(e,t){return{__type:"KMSThrottlingException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},w=function(e,t){return{__type:"ProvisionedThroughputExceededException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},K=function(e,t){return{__type:"PutRecordsOutput",EncryptionType:void 0!==e.EncryptionType&&null!==e.EncryptionType?e.EncryptionType:void 0,FailedRecordCount:void 0!==e.FailedRecordCount&&null!==e.FailedRecordCount?e.FailedRecordCount:void 0,Records:void 0!==e.Records&&null!==e.Records?M(e.Records,t):void 0}},M=function(e,t){return(e||[]).map((function(e){return function(e,t){return{__type:"PutRecordsResultEntry",ErrorCode:void 0!==e.ErrorCode&&null!==e.ErrorCode?e.ErrorCode:void 0,ErrorMessage:void 0!==e.ErrorMessage&&null!==e.ErrorMessage?e.ErrorMessage:void 0,SequenceNumber:void 0!==e.SequenceNumber&&null!==e.SequenceNumber?e.SequenceNumber:void 0,ShardId:void 0!==e.ShardId&&null!==e.ShardId?e.ShardId:void 0}}(e)}))},$=function(e,t){return{__type:"ResourceNotFoundException",message:void 0!==e.message&&null!==e.message?e.message:void 0}},R=function(e){return{httpStatusCode:e.statusCode,httpHeaders:e.headers,requestId:e.headers["x-amzn-requestid"]}},N=function(e,t){return void 0===e&&(e=new Uint8Array),e instanceof Uint8Array?Promise.resolve(e):t.streamCollector(e)||Promise.resolve(new Uint8Array)},P=function(e,t,n,i,r){return Object(a.__awaiter)(void 0,void 0,void 0,(function(){var s,c,u,d,_,v;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return[4,e.endpoint()];case 1:return s=a.sent(),c=s.hostname,u=s.protocol,d=void 0===u?"https":u,_=s.port,v={protocol:d,hostname:c,port:_,method:"POST",path:n,headers:t},void 0!==i&&(v.hostname=i),void 0!==r&&(v.body=r),[2,new o.HttpRequest(v)]}}))}))},I=function(e,t){return function(e,t){return N(e,t).then((function(e){return t.utf8Encoder(e)}))}(e,t).then((function(e){return e.length?JSON.parse(e):{}}))}}}]);
//# sourceMappingURL=21e52d84-6209b093b953f025eaea.js.map