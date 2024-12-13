const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require('../DATABASE/functions');
const {
  lyrics,
  lyricsv2
} = require('@bochilteam/scraper');
var tmsg = '';
if (config.LANG === 'SI') {
  tmsg = "*කරුණාකර මට ගීතයක නමක් දෙන්න. !*";
} else {
  tmsg = "*Please give me a song name. !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ලබා දී ඇති සංගීතයේ lyrics දෙයි.";
} else {
  descg = "It gives lyrics of given song name.";
}
var cantscg = '';
if (config.LANG === 'SI') {
  cantscg = "*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*";
} else {
  cantscg = "*I cant find lyrics of this song !*";
}
cmd({
  'pattern': "lyric",
  'alias': ["lyrics"],
  'react': "🎙️",
  'desc': descg,
  'category': 'search',
  'use': ".lyric <song name>",
  'filename': __filename
}, async (_0x310d99, _0x2e3f57, _0x427768, {
  from: _0x349ae9,
  l: _0x35dd92,
  quoted: _0x36421c,
  body: _0x17ab82,
  isCmd: _0x25d0c8,
  command: _0xaef963,
  args: _0x231645,
  q: _0x20c88e,
  isGroup: _0x395e11,
  sender: _0x5e8940,
  senderNumber: _0x43514d,
  botNumber2: _0xcd2d38,
  botNumber: _0x3c9356,
  pushname: _0x375bc2,
  isMe: _0x180535,
  isOwner: _0x42438a,
  groupMetadata: _0x5cef66,
  groupName: _0x1acc4f,
  participants: _0x229774,
  groupAdmins: _0x132740,
  isBotAdmins: _0x1f05f1,
  isAdmins: _0x2202d7,
  reply: _0x909525
}) => {
  try {
    if (!_0x20c88e) {
      return _0x909525(tmsg);
    }
    const _0x419739 = await fetchJson("https://some-random-api.com/lyrics?title=" + text);
    if (_0x419739.lyrics) {
      _0x909525("\n*BENTLEY*\n\n   *LYRICS SEARCH*\n   \n*" + _0x419739.title + "*\n_" + _0x419739.artist + "_\n\n\n" + _0x419739.lyrics + "\n\n> *™Marisel*");
    } else {
      _0x909525(cantscg);
    }
  } catch (_0x367975) {
    _0x909525(cantscg);
    _0x35dd92(_0x367975);
  }
});
