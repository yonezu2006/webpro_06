"use strict";

const memoList = document.querySelector("#memo-list");

// メモを追加
document.querySelector("#add-memo").addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;

  const params = {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("/notes/add", params)
    .then(response => response.json())
    .then(data => {
      console.log("メモ追加成功:", data);
      document.querySelector("#title").value = "";
      document.querySelector("#content").value = "";
      loadMemos();
    })
    .catch(err => console.error("エラー:", err));
});

// メモ一覧を読み込む
function loadMemos() {
  fetch("/notes")
    .then(response => response.json())
    .then(data => {
      memoList.innerHTML = ""; // メモリストをリセット
      data.notes.forEach(note => {
        const memoItem = document.createElement("div");
        memoItem.className = "memo-item";

        const title = document.createElement("h3");
        title.textContent = note.title;

        const content = document.createElement("p");
        content.textContent = note.content;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", () => deleteMemo(note.id));

        memoItem.appendChild(title);
        memoItem.appendChild(content);
        memoItem.appendChild(deleteButton);

        memoList.appendChild(memoItem);
      });
    });
}

// メモを削除
function deleteMemo(id) {
  const params = {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("/notes/delete", params)
    .then(response => response.json())
    .then(data => {
      console.log("メモ削除成功:", data);
      loadMemos();
    })
    .catch(err => console.error("エラー:", err));
}

// ページ読み込み時にメモを取得
window.onload = loadMemos;
