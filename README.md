# webpro_06
2024/11/18

## 挨拶を表示するプログラム 

ファイル名 | 説明
-|-
app5.js | プログラム本体
view/show.ejs | 表示画面

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/view/show.ejsにアクセスする

挨拶を定義してURLを開くとHello,WorldとBon Jourと出力されるものである.

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
do["挨拶を表示"]

start --> do
do --> end1
```

## 挨拶を表示するプログラム その２

ファイル名 | 説明
-|-
app5.js | プログラム本体
view/show.ejs | 表示画面

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/view/show.ejsにアクセスする

URLを開くとHello,WorldとBon Jourと出力されるものである.
一つ前の挨拶を表示するプログラムと違うのは,挨拶を定義せずに直接代入しているところである.


```mermaid
flowchart TD;

start["開始"];
end1["終了"]
do["挨拶を表示"]

start --> do
do --> end1
```

## アイコンを表示するプログラム

ファイル名 | 説明
-|-
app5.js | プログラム本体
view/icon.ejs | 表示画面

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/view/icon.ejsにアクセスする

URLを開くとAppleのロゴが出力されるものである.

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
do["アイコンを表示"]

start --> do
do --> end1
```

## 運勢を表示するプログラム

ファイル名 | 説明
-|-
app5.js | プログラム本体
view/luck.ejs | 表示画面

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/view/luck.ejsにアクセスする

URLを開くとランダムに運勢が出力されるものである.

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if["ランダム関数の数値が"]
un1["大吉"]
un2["中吉"]



start --> if
if --> |1| un1
un1 --> end1
if --> |2| un2
un2 --> end1
```

## じゃんけんをするプログラム

ファイル名 | 説明
-|-
app5.js | プログラム本体
view/janken.ejs | じゃんけんの開始画面

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/view/janken.ejsにアクセスする
1.自分の手を入力する

URLを開いて自分の手を入力するとコンピュータとのじゃんけん結果が出力されるものである.

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"条件に合うか"}
win["勝ち"]
loose["負け"]

start --> if
if -->|yes| win
win --> end1
if -->|no| loose
loose --> end1
```

## 運勢を表示するプログラム 

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/unsei.ejs | 今日の運勢の開始画面

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/view/unsei.ejsにアクセスする
1.誕生月を半角数字で入力する

誕生月を入力すると今日の運勢を出力するものである.
前に制作したものと違い,誕生月を入力することで個人に特化しているように見える.

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"誕生月とランダム関数の数値の差の絶対値が"}
un1["１位"]
un2["２位"]
un3["３位"]
un4["４位"]
un5["５位"]
un6["６位"]
un7["７位"]
un8["８位"]
un9["９位"]
un10["１０位"]
un11["１１位"]
un12["最下位"]


start --> if
if -->|0| un1
un1 --> end1
if -->|1| un2
un2 --> end1
if -->|2| un3
un3 --> end1
if -->|3| un4
un4 --> end1
if -->|4| un5
un5 --> end1
if -->|5| un6
un6 --> end1
if -->|6| un7
un7 --> end1
if -->|7| un8
un8 --> end1
if -->|8| un9
un9 --> end1
if -->|9| un10
un10 --> end1
if -->|10| un11
un11 --> end1
if -->|11| un12
un12 --> end1
```

## あっち向いホイをするプログラム

ファイル名 | 説明
-|-
app5.js | プログラム本体
view/attimuitehoi.ejs | あっち向いてホイの開始画面

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/view/attimuitehoi.ejsにアクセスする
1.向く向きを入力する

コンピュータが上下左右どの向きを向くのか当てるゲーム。
上下左右を入力するとコンピュータの向きと同じか判断して同じなら「勝ち」違うのなら「負け」を出力する。

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"コンピュータの向きを当てられたか"}
win["勝ち"]
loose["負け"]

start --> if
if -->|同じ向きを指した| win
win --> end1
if -->|他の向きを指した| loose
loose --> end1
```

