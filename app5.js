const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

let win = 0;
let total = 0;

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー'; 

  // ここに勝敗の判定を入れる
    let judgement = '';
    if (cpu == 'グー' && hand == 'パー') judgement = '勝ち';
    else if (cpu == 'グー' && hand == 'グー') judgement = 'あいこ';
    else if (cpu == 'グー' && hand == 'チョキ') judgement = '負け';

    else if (cpu == 'チョキ' && hand == 'グー') judgement = '勝ち';
    else if (cpu == 'チョキ' && hand == 'チョキ') judgement = 'あいこ';
    else if (cpu == 'チョキ' && hand == 'パー') judgement = '負け';
  
    else if (cpu == 'パー' && hand == 'チョキ') judgement = '勝ち';
    else if (cpu == 'パー' && hand == 'パー') judgement = 'あいこ';
    else if (cpu == 'パー' && hand == 'グー') judgement = '負け';

    if ( judgement == '勝ち' ) win += 1;

    total += 1;

    const display = {
      your: hand,
      cpu: cpu,
      judgement: judgement,
      win: win,
      total: total
    }
    res.render( 'janken', display );
  
});

app.get("/unsei", (req, res) => {
  let month = req.query.month;
  console.log( {month});
  const num = Math.floor( Math.random() * 12 + 1 );
 

  // ここに勝敗の判定を入れる
    let kiti = '';
    let unsei = Math.abs(month - num);

    if (unsei == 0) kiti = '今日の運勢１位！！';
    else if (unsei == 1) kiti = '今日の運勢２位！';
    else if (unsei == 2) kiti = '今日の運勢３位！';
    else if (unsei == 3) kiti = '今日の運勢４位！';
    else if (unsei == 4) kiti = '今日の運勢５位';
    else if (unsei == 5) kiti = '今日の運勢６位';
    else if (unsei == 6) kiti = '今日の運勢７位';
    else if (unsei == 7) kiti = '今日の運勢８位';
    else if (unsei == 8) kiti = '今日の運勢９位';
    else if (unsei == 9) kiti = '今日の運勢１０位';
    else if (unsei == 10) kiti = '今日の運勢１１位…';
    else if (unsei == 11) kiti = '今日の運勢最下位…';

    const display = {
      your: month,
      kiti: kiti,
    }


    res.render( 'unsei', display );
  
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
