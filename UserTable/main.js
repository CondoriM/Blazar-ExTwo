let results = [];

function myTable() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
        results = users.map((user) => ({
        Name: user.name,
        Username: user.username,
        Email: user.email,
        Phone: user.phone,
      }));

      let body = document.getElementsByTagName("body")[0];
      let tbl = document.createElement("table");
      tbl.setAttribute(
        "style",
        "margin: auto; background-color: yellow; border: 1px solid black"
      );

      let thead = document.createElement("thead");
      let thr = document.createElement("tr");

      let head = { a: "Name", b: "Username", c: "Email", d: "Phone" };

      for (i in head) {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(head[i]));
        thr.appendChild(th);
      }

      thead.appendChild(thr);
      tbl.appendChild(thead);

      let tbdy = document.createElement("tbody");
      let tr = document.createElement("tr");

      results.forEach((user) => {
        let n = 0;
        let tr = document.createElement("tr");
        for (p in results[0]) {
          var td = document.createElement("td");
          td.setAttribute("style", "border: 1px solid black; padding: 0.5rem");
          td.appendChild(document.createTextNode(user[p]));
          tr.appendChild(td);
          n++;
        }
        tbdy.appendChild(tr);
      });
      tbl.appendChild(tbdy);
      body.appendChild(tbl);
      return tbl;
    });
}

let f = document.createElement("form");
f.setAttribute("id", "myForm");
f.setAttribute("method", "post");
f.setAttribute("action", "submit.php");

let u = document.createElement("input");
u.setAttribute("type", "text");
u.setAttribute("name", "name");

let i = document.createElement("input");
i.setAttribute("type", "text");
i.setAttribute("name", "username");

let e = document.createElement("input");
e.setAttribute("type", "text");
e.setAttribute("name", "email");

let p = document.createElement("input");
p.setAttribute("type", "text");
p.setAttribute("name", "phone");

let s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("value", "Submit");

f.appendChild(u);
f.appendChild(i);
f.appendChild(e);
f.appendChild(p);
f.appendChild(s);
document.getElementsByTagName("body")[0].appendChild(f);

let myPost = function (event) {
  event.preventDefault();

  const form = document.querySelector("form");
  const formData = new FormData(form);

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: `${formData.get("name")}`,
      username: `${formData.get("username")}`,
      email: `${formData.get("email")}`,
      phone: `${formData.get("phone")}`,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      results.push(json);
      console.log(results);
    });
};

myTable();
f.addEventListener("submit", myPost, true);
