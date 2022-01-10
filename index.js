<!-- Optional JavaScript; choose one of the two! -->

  <!-- Option 1: Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
    crossorigin="anonymous"></script>
  <script>
    function getAndUpdate() {
      console.log("Updating List...");
      tit = document.getElementById("title").value;
      desc = document.getElementById("description").value;
      if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
      } else {
        itemJsonArrayStr = localStorage.getItem("itemsJson");
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
      }
      update();
    }

    function update() {
      if (localStorage.getItem("itemsJson") == null) {
        itemJsonArray = [];
        localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
      } else {
        itemJsonArrayStr = localStorage.getItem("itemsJson");
        itemJsonArray = JSON.parse(itemJsonArrayStr);
      }
      // Populate the table
      let tableBody = document.getElementById("tableBody");
      let str = "";
      itemJsonArray.forEach((element, index) => {
        str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`;
      });
      tableBody.innerHTML = str;
    }
    add = document.getElementById("add");
    add.addEventListener("click", getAndUpdate);
    update();
    function deleted(itemIndex) {
      console.log("Delete", itemIndex);
      itemJsonArrayStr = localStorage.getItem("itemsJson");
      itemJsonArray = JSON.parse(itemJsonArrayStr);
      // Delete itemIndex element from the array
      itemJsonArray.splice(itemIndex, 1);
      localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
      update();
    }
    function clearStorage() {
      if (confirm("Do you areally want to clear?")) {
        console.log("Clearing the storage");
        localStorage.clear();
        update();
      }
    }

 </script>
  <!-- Option 2: Separate Popper and Bootstrap JS -->

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
    integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
    crossorigin="anonymous">
  </script>
