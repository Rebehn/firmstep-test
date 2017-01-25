$(() => {
  console.log('loaded');

  function getCustomers() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8000/customers'
    })
    .done((data) => {
      $.each(data, (index, customer) => {
        appendCustomer(customer);
      });
    });
  }

  function appendCustomer(customer) {
    console.log(customer);
  }

  getCustomers();
});
