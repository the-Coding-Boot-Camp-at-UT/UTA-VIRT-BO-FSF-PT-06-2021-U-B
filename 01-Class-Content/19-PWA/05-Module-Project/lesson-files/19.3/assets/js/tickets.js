require('bootstrap');

if (window.location.href.indexOf("tickets") > -1) {

  const purchaseBtn = document.getElementById("purchaseBtn");
  const purchaseEmail = document.getElementById("purchaseEmail");
  const modalEl = document.querySelector(".modal-content");
  const modalBodyEl = document.querySelector(".modal-body");
  const modalFooterEl = document.querySelector(".modal-footer");


  function purchaseTicket () {

    modalEl.removeChild(modalBodyEl)
    modalEl.removeChild(modalFooterEl)

    modalEl.append(createEl("div", {class: "modal-body"},
      createEl("h5", {class: "modal-title"}, 
      `Thanks for requesting a ticket purchase! We will send an email to ${purchaseEmail.value} to complete the order form!`
      ),
    ))
    
  }
  purchaseBtn.addEventListener("click", purchaseTicket);
}