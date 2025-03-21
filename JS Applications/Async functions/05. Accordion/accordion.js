document.addEventListener("DOMContentLoaded", solution);
function solution() {
  getInfo();
  async function getInfo() {
    const response = await fetch(
      "http://localhost:3030/jsonstore/advanced/articles/list"
    );
    const data = await response.json();
    for (let [id, info] of Object.entries(data)) {
      makeArticle(info);
    }
  }
  function makeArticle(data) {
    const span = document.createElement("span");
    span.textContent = data.title;
    const btn = document.createElement("button");
    btn.classList.add("button");
    btn.id = data._id;
    btn.textContent = "More";
    const head = document.createElement("div");
    head.classList.add("head");
    head.append(span, btn);

    const p = document.createElement("p");
    const extra = document.createElement("div");
    extra.classList.add("extra");
    extra.append(p);

    const accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.append(head, extra);

    document.getElementById("main").append(accordion);
    btn.addEventListener("click", (e) => showMore(e));
  }
  async function showMore(e) {
    const response = await fetch(
      `http://localhost:3030/jsonstore/advanced/articles/details/${e.target.id}`
    );
    const data = await response.json();
    const p = e.target.parentElement.nextElementSibling.firstElementChild;
    p.textContent = data.content;
    const btn = e.target;
    btn.textContent = btn.textContent === "More" ? "Less" : "More";
    e.target.parentElement.nextElementSibling.style.display =
      e.target.parentElement.nextElementSibling.style.display === "block"
        ? "none"
        : "block";
  }
}
