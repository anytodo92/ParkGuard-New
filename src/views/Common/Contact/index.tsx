import {
  ContactWrapper
} from "./styled";

const Contact = (): JSX.Element => {
  return (
    <ContactWrapper className="contact-form">
      <div className="content">
        <div className="main">
          <h2>Kontakt</h2>
          <div className="desc">
            Du möchtest mehr über unsere Lösungen und Dienstleistungen erfahren? Dann nimm mit uns Kontakt auf.
          </div>
        </div>
        <div className="yform">  
          <p><sup>*</sup> Pflichtfelder</p>        
          <form>
          <div className="form">
            <div className="col">
              <div className="group">
                <label>Vorname / Nachname <sup>*</sup></label>
                <div className="entry-box">
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="group">
                <label>E-Mail <sup>*</sup></label>
                <div className="entry-box">
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="group">
                <label>Nachricht</label>
                <div className="entry-box">
                  <div className="form-group">
                    <label className="control-label"></label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="submit">
            <button>Absenden</button>
          </div>
          </form>          
        </div>
      </div>
    </ContactWrapper>
  );
}
export default Contact;