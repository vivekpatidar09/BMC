import "./Index.css";

function Index() {
  return (
    <div className="loacation">
      <div className="card">
        <h3>IIT Madras Contact Number, Address & Location Map, Chennai</h3>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="col1">
            <div className="row">
              <div>
                <img src="/images/location_icon.svg" alt="" />
              </div>
              <div>
                <p>Chennai 600036</p>
                <p>Tamil Nadu, India</p>
                <div style={{ display: "flex", margin: "10px 0" }}>
                  <p>0.85 KM</p>
                  <p>
                    <img
                      src="/images/bus_icon.svg"
                      alt=""
                      style={{ margin: "0 5px", width: "10px" }}
                    />
                    GAJENDRA CIRCLE BUS STOP
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div>
                <img src="/images/call_icon.svg" alt="" />
              </div>
              <div>
                <p>044-22570509</p>
                <p>22578280</p>
                <p>22578000</p>
                <p>22578000</p>
              </div>
            </div>
            <div className="row">
              <div>
                <img src="/images/call_icon.svg" alt="" />
              </div>
              <div>
                <p>9444008001</p>
                <p>9444008002</p>
              </div>
            </div>
            <div className="row">
              <div>
                <img src="/images/inbox_icon.svg" alt="" />
              </div>
              <div>
                <p>GET EMAIL CONTACT</p>
              </div>
            </div>
            <div className="row">
              <div>
                <img src="/images/sms_icon.svg" alt="" />
              </div>
              <div>
                <p>GET SMS CONTACT</p>
              </div>
            </div>
            <div className="row">
              <div>
                <img src="/images/internet_icon.svg" alt="" />
              </div>
              <div>
                <p>http://www.litm.ac.in</p>
              </div>
            </div>
          </div>
          <div className="col2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8845.452443939175!2d72.9098694442008!3d19.13349667405312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189efc039%3A0x68fdcea4c5c5894e!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1710837140157!5m2!1sen!2sin"
              width="300"
              height="350"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
