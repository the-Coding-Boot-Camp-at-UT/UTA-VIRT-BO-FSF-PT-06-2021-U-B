function logout() {
  fetch("/api/user/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" }
  })
    .then(function() {
      document.location.replace("/");
    })
    .catch(err => console.log(err));
}

document.querySelector("#logout-link").addEventListener("click", logout);
