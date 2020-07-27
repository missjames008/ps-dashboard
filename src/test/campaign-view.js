import { expect } from "chai";
const fetch = require("node-fetch");

const pages = {
  Index: "",
};

for (const page in pages) {
  it(`Returns the page: ${page}`, async function () {
    this.timeout(1000 * 20);
    const response = await fetch(`http://localhost:3000/${pages[page]}`);
    expect(response.status).to.equal(200);
  });
}
