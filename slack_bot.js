var slackbot = require('node-slackbot');

var slackAccessToken = process.env.SLACK_TOKEN;

var bot = new slackbot(slackAccessToken);

bot.use(function(message, cb) {
  cYoutubeDetectionText = "youtube.com/watch?v=";
  cYoutubeIdLength = 11;

  if ('message' == message.type) {
    if (message.text && message.text.indexOf(cYoutubeDetectionText) != -1) {
      console.log('\n----------\nRECEIVED:\n' + message);

      youtubeId = message.text.substr(message.text.indexOf(cYoutubeDetectionText) + cYoutubeDetectionText.length, cYoutubeIdLength);
      console.log(message);

      responseMessage = 'Hey, buddy, this video seems long.\nWhy don\'t you save your friends\' time by sharing only the best parts? :speak_no_evil:\nClick here to do it on Vibby: https://www.vibby.com/create/2?yt=' + youtubeId;
      bot.sendMessage(message.channel, responseMessage);
      console.log('\n----------\nREPLIED:\n' + responseMessage);
    }

    if (message.text && message.text.indexOf("vibby.com/watch?vib=") != -1) {
      console.log('\n----------\nRECEIVED:\n' + message);

      responseMessage = 'Awesome! Thanks for saving your friends\' time with Vibby! :sunglasses:';
      bot.sendMessage(message.channel, responseMessage);
      console.log('\n----------\nREPLIED:\n' + responseMessage);
    }

  }
  cb();
});

bot.connect();
