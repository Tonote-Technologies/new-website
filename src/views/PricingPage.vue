<template>
  <section class="bg-half-100 d-table w-100 bg-gradient">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-12 text-center">
          <div class="pages-heading my-1">
            <h4 class="ptitle my-3">Plans & Pricing</h4>
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div
                  class="switcher-pricing d-flex justify-content-center align-items-center"
                >
                  <label
                    class="toggler text-muted toggler--is-active"
                    id="filt-monthly"
                    >Bill Monthly</label
                  >
                  <div class="form-check form-switch mx-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="switcher"
                      @change="changePrice($event)"
                    />
                  </div>
                  <label class="toggler text-muted" id="filt-yearly"
                    >Bill Yearly</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-5 w-100">
    <div class="container">
      <h3 class="text-center ptitle-sub">Choose a Plan</h3>
      <div class="row">
        <div class="row justify-content-center">
          <div class="col-lg-6 border p-2">
            <ul
              class="nav nav-pills nav-justified flex-column flex-sm-row rounded"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link rounded active"
                  id="pills-cloud-tab"
                  data-bs-toggle="pill"
                  href="#pills-cloud"
                  role="tab"
                  aria-controls="pills-cloud"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">
                      <i class="mdi mdi-account"></i> Basic Plan
                    </h6>
                  </div>
                </a>
              </li>

              <li class="nav-item mx-md-1">
                <a
                  class="nav-link rounded"
                  id="pills-smart-tab"
                  data-bs-toggle="pill"
                  href="#pills-smart"
                  role="tab"
                  aria-controls="pills-smart"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">
                      <i class="mdi mdi-account-group"></i> Pro Plan
                    </h6>
                  </div>
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link rounded"
                  id="pills-apps-tab"
                  data-bs-toggle="pill"
                  href="#pills-apps"
                  role="tab"
                  aria-controls="pills-apps"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">
                      <i class="mdi mdi-bag-checked"></i> Business Plan
                    </h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row py-3 my-5">
          <div class="col-12">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-cloud"
                role="tabpanel"
                aria-labelledby="pills-cloud-tab"
              >
                <div class="price-header">
                  Electronically sign, notarise and share essential documents
                </div>
                <div class="text-center py-3 text-primary h5">FREE</div>
                <div class="lg-screen">
                  <div class="row">
                    <div class="col-lg-6 text-end">
                      N8,000 * Per Notary Session
                    </div>
                    <div class="col-lg-6 col-sm-12">N4,000 * Per Affidavit</div>
                  </div>
                </div>
                <div class="sm-screen">
                  <div class="row text-center">
                    <div class="col-lg-6 col-sm-12">
                      N8,000 * Per Notary Session
                    </div>
                    <div class="col-lg-6 col-sm-12">N4,000 * Per Affidavit</div>
                  </div>
                </div>

                <div class="justify-content-center d-flex py-3">
                  <div class="btn-group btn-route">
                    <a
                      href="https://user.gettonote.com/register"
                      target="blank"
                    >
                      <button class="btn btn-primary fw-normal">
                        Start For Free
                      </button>
                    </a>
                  </div>
                </div>

                <div class="container my-3">
                  <div class="col-10 mx-auto">
                    <div class="row bg-light-primary alert-primary p-2">
                      <div class="col-lg-6">
                        <table class="table mytable">
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>No subscription fee</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Digitize and store your secure e - signature
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Get affidavits and notarise documents online in
                              minutes! No templates required
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Securely sign and share unlimited number of
                              notarised documents with third parties
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Securely sign and share 10 documents monthly at no
                              cost
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div class="col-lg-6">
                        <table class="table mytable">
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>No more paper, printing or transportation</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Audit trail for documentation management</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Access to online tutorials on how to use the
                              platform
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Access to customer support via email and chat
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/orange-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>24 / 7 web access</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="pills-smart"
                role="tabpanel"
                aria-labelledby="pills-smart-tab"
              >
                <div class="price-header">
                  Collaborate with teams on a whole new level
                </div>
                <div class="text-center py-3 text-primary h5">
                  NGN <span>{{ p }}</span>
                </div>

                <div class="lg-screen">
                  <div class="row">
                    <div class="col-lg-6 text-end">
                      N8,000 * Per Notary Session
                    </div>
                    <div class="col-lg-6 col-sm-12">N4,000 * Per Affidavit</div>
                  </div>
                </div>
                <div class="sm-screen">
                  <div class="row text-center">
                    <div class="col-lg-6 col-sm-12">
                      N8,000 * Per Notary Session
                    </div>
                    <div class="col-lg-6 col-sm-12">N4,000 * Per Affidavit</div>
                  </div>
                </div>
                <div class="justify-content-center d-flex py-3">
                  <div class="btn-group btn-route">
                    <a
                      href="https://user.gettonote.com/register"
                      target="blank"
                    >
                      <button class="btn btn-primary fw-normal">
                        Start For Free
                      </button>
                    </a>
                  </div>
                </div>

                <div class="container my-3">
                  <div class="col-10 mx-auto">
                    <div class="row bg-light-primary alert-primary p-2">
                      <div class="col-lg-6">
                        <table class="table mytable">
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Everything on Basic Plan</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Sign a Document</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Bank Grade Security</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              E-sign and share up to 40 documents per team
                              member monthly.
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Collaboration with up to 10 team members monthly
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Set permissions for signers</td>
                          </tr>
                        </table>
                      </div>

                      <div class="col-lg-6">
                        <table class="table mytable">
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Sign documents collaboratively</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Automate approvals and sign offs</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Audit trail to ensure documents remain tamper
                              proof
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Enable seamless document management</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>processes</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/green-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Quicker transaction closings</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="pills-apps"
                role="tabpanel"
                aria-labelledby="pills-apps-tab"
              >
                <div class="price-header">Close deals faster.</div>
                <div class="text-center py-3 text-primary h5">
                  NGN <span>{{ b }}</span>
                </div>
                <div class="lg-screen">
                  <div class="row">
                    <div class="col-lg-6 text-end">
                      N8,000 * Per Notary Session
                    </div>
                    <div class="col-lg-6 col-sm-12">N4,000 * Per Affidavit</div>
                  </div>
                </div>
                <div class="sm-screen">
                  <div class="row text-center">
                    <div class="col-lg-6 col-sm-12">
                      N8,000 * Per Notary Session
                    </div>
                    <div class="col-lg-6 col-sm-12">N4,000 * Per Affidavit</div>
                  </div>
                </div>
                <div class="justify-content-center d-flex py-3">
                  <div class="btn-group btn-route">
                    <a
                      href="https://user.gettonote.com/register"
                      target="blank"
                    >
                      <button class="btn btn-primary fw-normal">
                        Start For Free
                      </button>
                    </a>
                  </div>
                </div>

                <div class="container my-3">
                  <div class="col-10 mx-auto">
                    <div class="row bg-light-primary alert-primary p-2">
                      <div class="col-lg-6">
                        <table class="table mytable">
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/blue-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>Everything on Basic Plan</td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/blue-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Securely sign and share up to 100 documents per
                              team member monthly
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/blue-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Collaborate with up to 100 team members monthly
                            </td>
                          </tr>
                        </table>
                      </div>

                      <div class="col-lg-6">
                        <table class="table mytable">
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/blue-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Seamless documentation management processes
                              between your business and Clients
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/blue-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>
                              Access to dedicated customer success manager
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p class="mb-0">
                                <img
                                  src="assets/images/icon/blue-marker.png"
                                  width="15"
                                />
                              </p>
                            </td>
                            <td>API coming soon</td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GetStarted />
  </section>
</template>

<script setup>
import { ref } from "vue";
import GetStarted from "@/components/GetStartedPage.vue";

const proPlan = ref(9900);
const bizPlan = ref(19900);
const p = ref("9,900.00");
const b = ref("19,900.00");

function formatToCurrency(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}
const calculate = (plan) => {
  let gross = plan * 12;
  let annualDiscount = gross * 0.1;
  let annual = gross - annualDiscount;
  return formatToCurrency(annual);
};

const changePrice = (e) => {
  if (e.target.checked == true) {
    p.value = calculate(proPlan.value);
    b.value = calculate(bizPlan.value);
  } else {
    p.value = formatToCurrency(proPlan.value);
    b.value = formatToCurrency(bizPlan.value);
  }

  // e.target.checked == false ? b : bizPlan.value;
};
</script>

<style scoped></style>
