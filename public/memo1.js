"use strict";

const memoList = document.querySelector("#memo-list");

// メモを追加
document.querySelector("#add-memo").addEventListener("click", () => {
  const name = document.querySelector("#name").value;
  const message = document.querySelector("#message").value;

  const params = {
    method: "POST",
    body: JSON.stringify({ name, message }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("/notes/add", params)
    .then(response => response.json())
    .then(data => {
      console.log("メモ追加成功:", data);
      document.querySelector("#name").value = "";
      document.querySelector("#message").value = "";
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

        const name = document.createElement("h3");
        name.textContent = note.name;

        const message = document.createElement("p");
        message.textContent = note.message;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "削除";
        deleteButton.addEventListener("click", () => deleteMemo(note.id));

        memoItem.appendChild(name);
        memoItem.appendChild(message);
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
