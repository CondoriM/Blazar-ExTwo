function myTable() {

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      let results = users.map(user => ({Name: user.name, Username: user.username, Email: user.email, Phone: user.phone}))

      let body = document.getElementsByTagName("body")[0];
      let tbl = document.createElement("table");
      tbl.setAttribute("style", "margin: auto; background-color: yellow; border: 1px solid black");

      let thead = document.createElement("thead");
      let thr = document.createElement("tr");

      let head = {a: "Name",b: "Username",c: "Email",d: "Phone"};

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

myTable();