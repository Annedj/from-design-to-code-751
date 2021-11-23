import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "form", "input", "results" ]

  // connect() { // important to check that all your targets are here
  //   console.log(this.formTarget);
  //   console.log(this.inputTarget);
  //   console.log(this.resultsTarget);
  // }

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, { headers: { 'Accept': 'text/plain' } })
      .then(response => response.text())
      .then((data) => {
        this.resultsTarget.outerHTML = data; // we want to replace the entire card
      })
  }
}
