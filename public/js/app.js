$(() => {
  console.log('loaded');

  function getCustomers() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8000/customers'
    })
    .done((data) => {
      $.each(data, (index, customer) => {
        appendCustomer(index, customer);
      });
    });
  }

  function appendCustomer(index, customer) {
    console.log(customer);
    $('#queue').append(`
      <tr>
        <th scope="row">${index+1}</th>
        <td>${customer.type}</td>
        <td>${customer.name}</td>
        <td>${customer.service}</td>
        <td>${customer.queued_at}</td>
      </tr>
      `);
  }

  getCustomers();
});
