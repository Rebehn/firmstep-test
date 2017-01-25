$(() => {
  console.log('loaded');
  $('#newCustomer').on('submit', newCustomer);

  function getCustomers() {
    $('#queue').html('');
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

  function newCustomer(e) {
    console.log('submitting');
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8000/customers',
      data: $('#newCustomer').serialize()
    }).done(() => {
      getCustomers();
    });
  }

  getCustomers();
});
