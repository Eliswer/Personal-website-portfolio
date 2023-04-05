import Wrapper from "./layout/Wrapper";
import classes from "./contactMe.module.css";
import Heading from "./Heading";
import Image from "next/image";

import At from "../public/icons/contact-me/@.svg";
import Phone from "../public/icons/contact-me/phone.svg";
import Time from "../public/icons/contact-me/time.svg";
import PurpleBg from "../public/imgs/contactMe-bg.png";

function ContactMe() {
  return (
    <Wrapper>
      <div className={classes.wrapper}>
        <div className="contactMe"></div>
        <div className={classes.top}>
          <Heading number="04" title="Contact me" />
        </div>
        <div className={classes.bottom}>
          <div className={`${classes["contact-form"]} ${classes.bg}`}>..</div>
          <div className={`${classes["contact-info"]} ${classes.bg}`}>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={Phone} />
                <p className={`${classes.title} gradient-text`}>Linkedin</p>
              </div>
              <p className={classes.description}>tbd</p>
            </div>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={At} />
                <p className={`${classes.title} gradient-text`}>Email me</p>
              </div>
              <p className={`${classes.description} ${classes.email}`}>
                sindelarovaeliska.webdev@gmail.com
              </p>
            </div>
            <div className={classes.line}>
              <div className={classes["title-wrapper"]}>
                <Image src={Time} />
                <p className={`${classes.title} gradient-text`}>Availability</p>
              </div>
              <p className={classes.description}>7am - 10pm</p>
            </div>
          </div>
          <div className={classes["img-wrapper"]}>
            <Image src={PurpleBg} width={1520} height={300} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ContactMe;