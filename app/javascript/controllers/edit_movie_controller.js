import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "infos", "form" ]

  showForm() {
    this.formTarget.classList.remove('d-none');
    this.infosTarget.classList.add('d-none');
  }

  submit(event) {
    event.preventDefault();
    const url = this.formTarget.action;
    // console.log(this); // returns this instance of controller
    // console.log(this.element); // the html element the data-controller is plugged to
    fetch(url, {
      method: 'PATCH',
      headers: { 'Accept': 'text/plain' },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.element.outerHTML = data; // we want to replace the entire card
      })
  }
}
