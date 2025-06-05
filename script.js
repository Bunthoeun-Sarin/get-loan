document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById("name").value);
  const email = encodeURIComponent(document.getElementById("email").value);
  const phone = encodeURIComponent(document.getElementById("phone").value);

  fetch(
    `https://script.google.com/macros/s/AKfycbyFY9YwFJRbndgDbgKwMc_K5QaPmzt6PyJa6EGeBAGb014j10XMQ0mL9WcrrXswwAPoUQ/exec?name=${name}?email${email}?phone=${phone}`
  )
    .then((res) => res.json())
    .then((data) => {
      alert("Server response: " + data.status + ", Name: " + data.received);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
});
