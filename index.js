var wechat = require('wechat');
var config = {
  token: 'token',
  appid: 'wxaf1dc044bfd1fe49'
};

var app = express();

//app.use(connect.query()); // Or app.use(express.query());
app.use(express.query());
app.use('/wechat', wechat(config, function (req, res, next) {
  wechat.checkSignature(req, res);
	
	// message is located in req.weixin
  var message = req.weixin;
  if (message.FromUserName === 'Amy') {
    // reply with text
    res.reply('Hi Amy');
  } else if (message.FromUserName === 'leely') {
    // another way to reply with text
    res.reply({
      content: 'text object',
      type: 'Hi leely'
    });
  } else if (message.FromUserName === '陈华鑫（Victor)') {
    // reply with music
    res.reply({
      type: "music",
      content: {
        title: "Just some music",
        description: "I have nothing to lose",
        musicUrl: "http://mp3.com/xx.mp3",
        hqMusicUrl: "http://mp3.com/xx.mp3"
      }
    });
  } else {
    // reply with thumbnails posts
    res.reply([
      {
        title: 'Come to fetch me',
        description: 'or you want to play in another way ?',
        picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
        url: 'http://nodeapi.cloudfoundry.com/'
      }
    ]);
  }
}));