$(() => {
  $('#newCustomer').on('submit', newCustomer);
  $('#oNameDisplay').hide();
  let type = 'Citizen';
  const citizenButton = $('#citizenButton');
  const organisationButton = $('#organisationButton');
  const anonymousButton = $('#anonymousButton');
  citizenButton.on('click', citizenForm);
  organisationButton.on('click', organisationForm);
  anonymousButton.on('click', anonymousForm);

  function citizenForm() {
    type = 'Citizen';
    citizenButton.addClass('active');
    organisationButton.removeClass('active');
    anonymousButton.removeClass('active');
    $('#titleDisplay').show();
    $('#fNameDisplay').show();
    $('#lNameDisplay').show();
    $('#oNameDisplay').hide();
  }

  function organisationForm() {
    type = 'Organisation';
    citizenButton.removeClass('active');
    organisationButton.addClass('active');
    anonymousButton.removeClass('active');
    $('#titleDisplay').hide();
    $('#fNameDisplay').hide();
    $('#lNameDisplay').hide();
    $('#oNameDisplay').show();
  }

  function anonymousForm() {
    type = 'Anonymous';
    citizenButton.removeClass('active');
    organisationButton.removeClass('active');
    anonymousButton.addClass('active');
    $('#titleDisplay').hide();
    $('#fNameDisplay').hide();
    $('#lNameDisplay').hide();
    $('#oNameDisplay').hide();
  }


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
    const time = moment(customer.createdAt).format('h:mm:ss a');
    $('#queue').append(`
      <tr>
        <th scope="row">${index+1}</th>
        <td>${customer.type}</td>
        <td>${customer.name}</td>
        <td>${customer.service}</td>
        <td>${time}</td>
      </tr>
      `);
  }

  function newCustomer(e) {
    let name;
    if (type === 'Citizen'){
      name = $('#title').val() + ' ' + $('#first_name').val() + ' ' + $('#last_name').val();
    } else if (type === 'Organisation') {
      name = $('#org_name').val();
    } else {
      name = 'Anonymous';
    }
    const service = $('input[name=service]:checked').val();
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: 'http://localhost:8000/customers',
      data: {
        name: name,
        service: service,
        type: type
      }
    }).done(() => {
      getCustomers();
    });
  }

  getCustomers();
});
