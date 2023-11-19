
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n  <head><script>try{(0,eval)(\"globalThis._triedToInstallGlobalErrorHandler\") || (0,eval)(\"/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x1a4dc4=_0x5de6;(function(_0x1b530c,_0x48048a){const _0x43cc6f=_0x5de6,_0xa97193=_0x1b530c();while(!![]){try{const _0x203866=-parseInt(_0x43cc6f(0x1c2))/0x1+-parseInt(_0x43cc6f(0x17e))/0x2*(-parseInt(_0x43cc6f(0x1b7))/0x3)+-parseInt(_0x43cc6f(0x1ca))/0x4+-parseInt(_0x43cc6f(0x19f))/0x5*(parseInt(_0x43cc6f(0x1ac))/0x6)+parseInt(_0x43cc6f(0x1a7))/0x7*(-parseInt(_0x43cc6f(0x1a3))/0x8)+parseInt(_0x43cc6f(0x179))/0x9+parseInt(_0x43cc6f(0x1a5))/0xa;if(_0x203866===_0x48048a)break;else _0xa97193['push'](_0xa97193['shift']());}catch(_0x4fe42d){_0xa97193['push'](_0xa97193['shift']());}}}(_0x5f3a,0xcacc9));function _0x5f3a(){const _0x29266f=['onclose','join','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host','console','function','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20restarting\\\\x20the\\\\x20process\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','defineProperty','onopen','port','_connectToHostNow','error','remix','enumerable','unref','\\\\x20server','1.0.0','_disposeWebsocket','10wLUwXH','_WebSocket','catch',\\\"c:\\\\\\\\Users\\\\\\\\Hercules\\\\\\\\.vscode\\\\\\\\extensions\\\\\\\\wallabyjs.console-ninja-1.0.256\\\\\\\\node_modules\\\",'267728viFaRS','_socket','44203350gbWAJC','addEventListener','259akJDoC','_consoleNinjaAllowedToStart','message','_connected','1700358870038','3335826MqTKMG','_allowedToConnectOnSend','_console_ninja_session','unhandledrejection','string','_inBrowser','hasOwnProperty','_triedToInstallGlobalErrorHandler','now','logger\\\\x20failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host,\\\\x20see\\\\x20','__es'+'Module','153Yuknlx','_sendErrorMessage','_allowedToSend','stringify','node','edge','hostname','_inNextEdge','readyState','nuxt','_attemptToReconnectShortly','570723sFqCjH','reason','send','prototype','getOwnPropertyDescriptor','_webSocketErrorDocsLink','_reconnectTimeout','env','5647860XlmPvg','unhandledRejection','127.0.0.1','getPrototypeOf','nodeModules','process','call','pathToFileURL','forEach','create','versions','ws://','object','_WebSocketClass','reload','Unknown\\\\x20error','astro','data','default','https://tinyurl.com/37x8b79t','then','1688472ysAIrA','onmessage','next.js','50752','bind','21788sstwNW','warn','location','NEXT_RUNTIME','dockerizedApp','gateway.docker.internal','map','getWebSocketClass','vite','_ws','_connecting','path','_connectAttemptCount','global','Console\\\\x20Ninja\\\\x20failed\\\\x20to\\\\x20send\\\\x20logs,\\\\x20refreshing\\\\x20the\\\\x20page\\\\x20may\\\\x20help;\\\\x20also\\\\x20see\\\\x20','onerror'];_0x5f3a=function(){return _0x29266f;};return _0x5f3a();}var k=Object[_0x1a4dc4(0x16d)],m=Object[_0x1a4dc4(0x194)],N=Object[_0x1a4dc4(0x1c6)],C=Object['getOwnPropertyNames'],g=Object[_0x1a4dc4(0x167)],y=Object[_0x1a4dc4(0x1c5)][_0x1a4dc4(0x1b2)],O=(_0x4200d5,_0x3cb53a,_0x52e724,_0x575e0c)=>{const _0x31ec81=_0x1a4dc4;if(_0x3cb53a&&typeof _0x3cb53a==_0x31ec81(0x170)||typeof _0x3cb53a==_0x31ec81(0x192)){for(let _0xd8251c of C(_0x3cb53a))!y[_0x31ec81(0x16a)](_0x4200d5,_0xd8251c)&&_0xd8251c!==_0x52e724&&m(_0x4200d5,_0xd8251c,{'get':()=>_0x3cb53a[_0xd8251c],'enumerable':!(_0x575e0c=N(_0x3cb53a,_0xd8251c))||_0x575e0c[_0x31ec81(0x19a)]});}return _0x4200d5;},E=(_0x483158,_0x30ac30,_0x40d79d)=>(_0x40d79d=_0x483158!=null?k(g(_0x483158)):{},O(_0x30ac30||!_0x483158||!_0x483158[_0x1a4dc4(0x1b6)]?m(_0x40d79d,_0x1a4dc4(0x176),{'value':_0x483158,'enumerable':!0x0}):_0x40d79d,_0x483158)),u=class{constructor(_0x1c86cf,_0x6edfc5,_0x18db42,_0x30d0e0,_0x1f6c77){const _0x4d3d35=_0x1a4dc4;this[_0x4d3d35(0x18b)]=_0x1c86cf,this['host']=_0x6edfc5,this[_0x4d3d35(0x196)]=_0x18db42,this[_0x4d3d35(0x168)]=_0x30d0e0,this[_0x4d3d35(0x182)]=_0x1f6c77,this[_0x4d3d35(0x1b9)]=!0x0,this[_0x4d3d35(0x1ad)]=!0x0,this[_0x4d3d35(0x1aa)]=!0x1,this['_connecting']=!0x1,this['_inNextEdge']=_0x1c86cf[_0x4d3d35(0x169)]?.[_0x4d3d35(0x1c9)]?.['NEXT_RUNTIME']===_0x4d3d35(0x1bc),this[_0x4d3d35(0x1b1)]=!this[_0x4d3d35(0x18b)]['process']?.[_0x4d3d35(0x16e)]?.['node']&&!this[_0x4d3d35(0x1be)],this['_WebSocketClass']=null,this[_0x4d3d35(0x18a)]=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x4d3d35(0x1c7)]=_0x4d3d35(0x177),this[_0x4d3d35(0x1b8)]=(this[_0x4d3d35(0x1b1)]?_0x4d3d35(0x18c):_0x4d3d35(0x193))+this[_0x4d3d35(0x1c7)];}async[_0x1a4dc4(0x185)](){const _0x2bbed0=_0x1a4dc4;if(this[_0x2bbed0(0x171)])return this[_0x2bbed0(0x171)];let _0x4fff80;if(this[_0x2bbed0(0x1b1)]||this['_inNextEdge'])_0x4fff80=this[_0x2bbed0(0x18b)]['WebSocket'];else{if(this[_0x2bbed0(0x18b)][_0x2bbed0(0x169)]?.['_WebSocket'])_0x4fff80=this[_0x2bbed0(0x18b)][_0x2bbed0(0x169)]?.[_0x2bbed0(0x1a0)];else try{let _0x15244d=await import('path');_0x4fff80=(await import((await import('url'))[_0x2bbed0(0x16b)](_0x15244d[_0x2bbed0(0x18f)](this[_0x2bbed0(0x168)],'ws/index.js'))['toString']()))[_0x2bbed0(0x176)];}catch{try{_0x4fff80=require(require(_0x2bbed0(0x189))['join'](this[_0x2bbed0(0x168)],'ws'));}catch{throw new Error('failed\\\\x20to\\\\x20find\\\\x20and\\\\x20load\\\\x20WebSocket');}}}return this[_0x2bbed0(0x171)]=_0x4fff80,_0x4fff80;}['_connectToHostNow'](){const _0x45b1b7=_0x1a4dc4;this[_0x45b1b7(0x188)]||this[_0x45b1b7(0x1aa)]||this[_0x45b1b7(0x18a)]>=this['_maxConnectAttemptCount']||(this[_0x45b1b7(0x1ad)]=!0x1,this[_0x45b1b7(0x188)]=!0x0,this['_connectAttemptCount']++,this['_ws']=new Promise((_0x3c58f2,_0x429cb0)=>{const _0x16ae33=_0x45b1b7;this[_0x16ae33(0x185)]()['then'](_0x1ede91=>{const _0x5363d4=_0x16ae33;let _0x1a6a81=new _0x1ede91(_0x5363d4(0x16f)+(!this[_0x5363d4(0x1b1)]&&this[_0x5363d4(0x182)]?_0x5363d4(0x183):this['host'])+':'+this['port']);_0x1a6a81[_0x5363d4(0x18d)]=()=>{const _0x576f81=_0x5363d4;this[_0x576f81(0x1b9)]=!0x1,this['_disposeWebsocket'](_0x1a6a81),this['_attemptToReconnectShortly'](),_0x429cb0(new Error('logger\\\\x20websocket\\\\x20error'));},_0x1a6a81[_0x5363d4(0x195)]=()=>{const _0x128a4b=_0x5363d4;this[_0x128a4b(0x1b1)]||_0x1a6a81[_0x128a4b(0x1a4)]&&_0x1a6a81['_socket'][_0x128a4b(0x19b)]&&_0x1a6a81['_socket'][_0x128a4b(0x19b)](),_0x3c58f2(_0x1a6a81);},_0x1a6a81['onclose']=()=>{const _0x559eef=_0x5363d4;this['_allowedToConnectOnSend']=!0x0,this[_0x559eef(0x19e)](_0x1a6a81),this[_0x559eef(0x1c1)]();},_0x1a6a81[_0x5363d4(0x17a)]=_0x4126fd=>{const _0xaeb7ed=_0x5363d4;try{_0x4126fd&&_0x4126fd[_0xaeb7ed(0x175)]&&this[_0xaeb7ed(0x1b1)]&&JSON['parse'](_0x4126fd[_0xaeb7ed(0x175)])['method']==='reload'&&this['global'][_0xaeb7ed(0x180)][_0xaeb7ed(0x172)]();}catch{}};})[_0x16ae33(0x178)](_0x34e7ab=>(this[_0x16ae33(0x1aa)]=!0x0,this[_0x16ae33(0x188)]=!0x1,this[_0x16ae33(0x1ad)]=!0x1,this[_0x16ae33(0x1b9)]=!0x0,this['_connectAttemptCount']=0x0,_0x34e7ab))[_0x16ae33(0x1a1)](_0x15ac81=>(this[_0x16ae33(0x1aa)]=!0x1,this[_0x16ae33(0x188)]=!0x1,console[_0x16ae33(0x17f)](_0x16ae33(0x1b5)+this[_0x16ae33(0x1c7)]),_0x429cb0(new Error('failed\\\\x20to\\\\x20connect\\\\x20to\\\\x20host:\\\\x20'+(_0x15ac81&&_0x15ac81[_0x16ae33(0x1a9)])))));}));}[_0x1a4dc4(0x19e)](_0x47e545){const _0x348fc6=_0x1a4dc4;this[_0x348fc6(0x1aa)]=!0x1,this[_0x348fc6(0x188)]=!0x1;try{_0x47e545[_0x348fc6(0x18e)]=null,_0x47e545[_0x348fc6(0x18d)]=null,_0x47e545['onopen']=null;}catch{}try{_0x47e545[_0x348fc6(0x1bf)]<0x2&&_0x47e545['close']();}catch{}}[_0x1a4dc4(0x1c1)](){const _0x1c4713=_0x1a4dc4;clearTimeout(this[_0x1c4713(0x1c8)]),!(this[_0x1c4713(0x18a)]>=this['_maxConnectAttemptCount'])&&(this['_reconnectTimeout']=setTimeout(()=>{const _0x29ebba=_0x1c4713;this[_0x29ebba(0x1aa)]||this[_0x29ebba(0x188)]||(this[_0x29ebba(0x197)](),this[_0x29ebba(0x187)]?.['catch'](()=>this[_0x29ebba(0x1c1)]()));},0x1f4),this[_0x1c4713(0x1c8)]['unref']&&this['_reconnectTimeout']['unref']());}async['send'](_0x5b27d2){const _0x34e1ab=_0x1a4dc4;try{if(!this[_0x34e1ab(0x1b9)])return;this[_0x34e1ab(0x1ad)]&&this['_connectToHostNow'](),(await this[_0x34e1ab(0x187)])[_0x34e1ab(0x1c4)](JSON[_0x34e1ab(0x1ba)](_0x5b27d2));}catch(_0x52594c){console[_0x34e1ab(0x17f)](this[_0x34e1ab(0x1b8)]+':\\\\x20'+(_0x52594c&&_0x52594c['message'])),this[_0x34e1ab(0x1b9)]=!0x1,this[_0x34e1ab(0x1c1)]();}}};function f(_0x46fdeb,_0x21ee13,_0x29becb,_0x2e931a,_0x9e7935,_0x497d5e){const _0x4c3eaa=_0x1a4dc4;let _0x11d493=_0x29becb['split'](',')[_0x4c3eaa(0x184)](_0x552d8b=>{const _0x47b7d4=_0x4c3eaa;try{_0x46fdeb[_0x47b7d4(0x1ae)]||((_0x9e7935===_0x47b7d4(0x17b)||_0x9e7935===_0x47b7d4(0x199)||_0x9e7935===_0x47b7d4(0x174))&&(_0x9e7935+=!_0x46fdeb[_0x47b7d4(0x169)]?.['versions']?.[_0x47b7d4(0x1bb)]&&_0x46fdeb[_0x47b7d4(0x169)]?.['env']?.[_0x47b7d4(0x181)]!==_0x47b7d4(0x1bc)?'\\\\x20browser':_0x47b7d4(0x19c)),_0x46fdeb[_0x47b7d4(0x1ae)]={'id':+new Date(),'tool':_0x9e7935});let _0x5a19b5=new u(_0x46fdeb,_0x21ee13,_0x552d8b,_0x2e931a,_0x497d5e);return _0x5a19b5['send'][_0x47b7d4(0x17d)](_0x5a19b5);}catch(_0x315c54){return console[_0x47b7d4(0x17f)](_0x47b7d4(0x190),_0x315c54&&_0x315c54[_0x47b7d4(0x1a9)]),()=>{};}});return _0x5c0f8f=>_0x11d493[_0x4c3eaa(0x16c)](_0x541d9f=>_0x541d9f(_0x5c0f8f));}function _0x5de6(_0x40f505,_0x3125cf){const _0x5f3ac9=_0x5f3a();return _0x5de6=function(_0x5de669,_0x465afa){_0x5de669=_0x5de669-0x167;let _0x15f53c=_0x5f3ac9[_0x5de669];return _0x15f53c;},_0x5de6(_0x40f505,_0x3125cf);}function p(_0x3522e3,_0x30a653,_0x427ebc){const _0x48ea0a=_0x1a4dc4;if(_0x3522e3[_0x48ea0a(0x1a8)]!==void 0x0)return _0x3522e3[_0x48ea0a(0x1a8)];let _0x54b9a9=_0x3522e3[_0x48ea0a(0x169)]?.[_0x48ea0a(0x16e)]?.[_0x48ea0a(0x1bb)]||_0x3522e3[_0x48ea0a(0x169)]?.['env']?.['NEXT_RUNTIME']===_0x48ea0a(0x1bc);return _0x54b9a9&&_0x427ebc===_0x48ea0a(0x1c0)?_0x3522e3[_0x48ea0a(0x1a8)]=!0x1:_0x3522e3[_0x48ea0a(0x1a8)]=_0x54b9a9||!_0x30a653||_0x3522e3[_0x48ea0a(0x180)]?.[_0x48ea0a(0x1bd)]&&_0x30a653['includes'](_0x3522e3[_0x48ea0a(0x180)]['hostname']),_0x3522e3[_0x48ea0a(0x1a8)];}((_0x4430c5,_0x330607,_0x3b4730,_0xcdb392,_0x1f6981,_0x5ca187,_0x128b86,_0x31dccc,_0x185519)=>{const _0x774538=_0x1a4dc4;if(!p(_0x4430c5,_0x31dccc,_0x5ca187)){_0x4430c5[_0x774538(0x1b3)]=!0x0;return;}if(_0x4430c5[_0x774538(0x1b3)])return;_0x4430c5['_triedToInstallGlobalErrorHandler']=!0x0;let _0x590591=f(_0x4430c5,_0x330607,_0x3b4730,_0xcdb392,_0x5ca187,_0x185519),_0x230d0c=_0x4430c5['_console_ninja_session'],_0x563949=_0x3aab24=>{const _0x34ebb4=_0x774538;if(_0x3aab24){let _0x560508=_0x3aab24[_0x34ebb4(0x1a9)]||'',_0x27d7ed=_0x3aab24['stack']||'',_0x2f5182;!_0x560508&&!_0x27d7ed&&(_0x560508=typeof _0x3aab24==_0x34ebb4(0x1b0)?_0x3aab24:_0x34ebb4(0x173),_0x27d7ed=new Error()['stack'],_0x2f5182=!0x0),_0x590591({'method':_0x34ebb4(0x198),'version':_0x1f6981,'args':[{'ts':Date[_0x34ebb4(0x1b4)](),'session':_0x230d0c,'message':_0x560508,'stack':_0x27d7ed,'generatedStack':_0x2f5182}]});}};if(_0x4430c5[_0x774538(0x191)][_0x774538(0x198)]=(_0x537d23=>(..._0x4f438f)=>(_0x563949(_0x4f438f[0x0]),_0x537d23(..._0x4f438f)))(_0x4430c5[_0x774538(0x191)][_0x774538(0x198)]),_0x4430c5['process']&&_0x4430c5[_0x774538(0x169)]['on'])_0x4430c5['process']['on']('uncaughtException',_0x563949),_0x4430c5[_0x774538(0x169)]['on'](_0x774538(0x1cb),_0x563949);else{if(_0x4430c5['addEventListener']){let _0x375c46=_0x5ed4c4=>{const _0x69263=_0x774538;let _0x47da26=_0x5ed4c4&&(_0x5ed4c4[_0x69263(0x198)]||_0x5ed4c4[_0x69263(0x1c3)]);_0x563949(_0x47da26);};_0x4430c5[_0x774538(0x1a6)]('error',_0x375c46),_0x4430c5[_0x774538(0x1a6)](_0x774538(0x1af),_0x375c46);}}_0x590591({'method':'errorHandlerInstalled','version':_0x1f6981,'args':[_0x230d0c]});})(globalThis,_0x1a4dc4(0x1cc),_0x1a4dc4(0x17c),_0x1a4dc4(0x1a2),_0x1a4dc4(0x19d),_0x1a4dc4(0x186),_0x1a4dc4(0x1ab),[\\\"localhost\\\",\\\"127.0.0.1\\\",\\\"example.cypress.io\\\",\\\"DESKTOP-8185E7K\\\",\\\"192.168.1.3\\\"],'');\");}catch(e){}</script>\r\n    <meta charset=\"utf-8\" />\r\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\r\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\r\n    <link\r\n      href=\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap\"\r\n      rel=\"stylesheet\"\r\n    />\r\n    <link\r\n      rel=\"stylesheet\"\r\n      href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css\"\r\n      integrity=\"sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==\"\r\n      crossorigin=\"anonymous\"\r\n      referrerpolicy=\"no-referrer\"\r\n    />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n    " + head + "\r\n    <title>Hire me please</title>\r\n  </head>\r\n  <body\r\n    data-sveltekit-preload-data=\"hover\"\r\n    class=\"text-black bg-slate-50 dark:bg-slate-950 dark:text-white\"\r\n  >\r\n    <div style=\"display: contents\" class=\"relative z-[1]\">" + body + "</div>\r\n  </body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<title>" + message + "</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\t--bg: white;\r\n\t\t\t\t--fg: #222;\r\n\t\t\t\t--divider: #ccc;\r\n\t\t\t\tbackground: var(--bg);\r\n\t\t\t\tcolor: var(--fg);\r\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\r\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t.error {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmax-width: 32rem;\r\n\t\t\t\tmargin: 0 1rem;\r\n\t\t\t}\r\n\r\n\t\t\t.status {\r\n\t\t\t\tfont-weight: 200;\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttop: -0.05rem;\r\n\t\t\t}\r\n\r\n\t\t\t.message {\r\n\t\t\t\tborder-left: 1px solid var(--divider);\r\n\t\t\t\tpadding: 0 0 0 1rem;\r\n\t\t\t\tmargin: 0 0 0 1rem;\r\n\t\t\t\tmin-height: 2.5rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t.message h1 {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\r\n\t\t\t@media (prefers-color-scheme: dark) {\r\n\t\t\t\tbody {\r\n\t\t\t\t\t--bg: #222;\r\n\t\t\t\t\t--fg: #ddd;\r\n\t\t\t\t\t--divider: #666;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"error\">\r\n\t\t\t<span class=\"status\">" + status + "</span>\r\n\t\t\t<div class=\"message\">\r\n\t\t\t\t<h1>" + message + "</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n"
	},
	version_hash: "ueqkzc"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
