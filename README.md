# webpro_06
2024/10/29

## このプログラムについて

## ファイル名 

ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面

```javascript
console.log( 'Hello' );
```

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

```mermaid
flowchart TD;
開始　--> 終了;
```

## 運勢を表示するプログラム 

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/unsei.ejs | 今日の運勢の開始画面

誕生月を入力すると今日の運勢を出力するものである
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

