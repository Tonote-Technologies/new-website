<template>
  <section class="section bg-gradient">
    <div class="container mt-5 pt-2">
      <h2>Contact Us</h2>
      <div class="row">
        <div class="col-md-5 pt-5">
          <div class="section-heading">
            <p>
              Do you have a question or feedback about our service? <br />Call
              us or send us an email.
            </p>
          </div>
          <div class="footer-address">
            <ul class="list-unstyled">
              <li class="my-2">
                <span style="padding-right: 1rem"
                  ><img
                    src="assets/images/icon/phone.png"
                    class="img-fluid rounded-top"
                    width="30"
                    alt=""
                /></span>
                <span>
                  <a href="tel:+2348146507035" target="_blank"
                    >+234 814 650 7035</a
                  >
                </span>
              </li>
              <li class="my-3">
                <span style="padding-right: 1rem"
                  ><img
                    src="assets/images/icon/mail.png"
                    class="img-fluid rounded-top"
                    width="30"
                    alt=""
                /></span>
                <span>
                  <a
                    class="text-dark"
                    href="mailto:ask@gettonote.com"
                    target="_blank"
                    >ask@gettonote.com</a
                  >
                </span>
              </li>
              <li class="address">
                <div style="padding-right: 1rem">
                  <img
                    src="assets/images/icon/address.png"
                    class="img-fluid rounded-top"
                    width="30"
                    alt=""
                  />
                </div>
                <div class="">
                  1625B Saka Jojo Street, off Idejo Victoria <br />
                  Island, Lagos, Nigeria
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-7 col-md-7">
          <div class="p-2">
            <div class="card-body">
              <form
                method="POST"
                id="contactForm"
                class="contact-us-form"
                novalidate="novalidate"
              >
                <div class="contact-error"></div>
                <div class="row">
                  <div class="col-sm-6 col-12">
                    <div class="form-group py-3">
                      <label class="control-label">Your name</label>
                      <input
                        type="text"
                        class="form-control py-3"
                        name="name"
                        id="cname"
                        placeholder="Enter your name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-12">
                    <div class="form-group py-3">
                      <label class="control-label">Phone number</label>
                      <input
                        type="text"
                        class="form-control py-3"
                        name="phone"
                        id="cphone"
                        placeholder="Enter your phone number"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-12">
                    <div class="form-group py-3">
                      <label class="control-label">Your email</label>
                      <input
                        type="email"
                        class="form-control py-3"
                        name="email"
                        id="cemail"
                        placeholder="Enter your email"
                        required="required"
                      />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="form-group py-3">
                      <label class="control-label">Message</label>
                      <textarea
                        name="message"
                        id="cmessage"
                        class="form-control py-3"
                        rows="7"
                        cols="25"
                        placeholder="Enter your Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 mt-3">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      id="btnContactUs"
                      style="opacity: 1"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
