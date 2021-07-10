import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/1.jpeg"
          alt="Thats my photo!"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Samuel!!</h1>
      <p>On this blog, I'll talk about many things.</p>
    </section>
  );
}

export default Hero;
