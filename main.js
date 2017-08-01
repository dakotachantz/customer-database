for (let i = 0; i < customers.results.length; i++) {

    let picture = customers.results[i].picture.large;
    let name = customers.results[i].name.first + " " + customers.results[i].name.last;
    let email = customers.results[i].email;
    let strAddress = customers.results[i].location.street;
    let city = customers.results[i].location.city;
    let state = customers.results[i].location.state;
    let zipcode = customers.results[i].location.postcode;
    let phoneNumber = customers.results[i].cell;
    let ssn = customers.results[i].id.value;


    const customer = `
<div class="grid">
        <img src=${picture} alt="large picture">
        <p class="name underlined_text">${name}</p>
        <p class="email">${email}</p>
        <p class="strAddress">${strAddress}</p>
        <p class="address">${city}, ${state} ${zipcode}</p>
        <p class="phone">${phoneNumber}</p>
        <p class="ssn">${ssn}</p>
      </div>
`
    document.querySelector(".container").innerHTML += customer;
}