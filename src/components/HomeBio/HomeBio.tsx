import styles from "./HomeBio.module.scss";
import FadingDiv from "../FadingDiv/FadingDiv";

const HomeBio = () => {
  return (
    <div className={styles.bio}>
      <h2 className={styles.header}>what is an off the peg design scheme?</h2>
      <FadingDiv className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est sequi ad
        cumque, aliquid, temporibus maxime culpa nisi similique obcaecati
        praesentium, deleniti laboriosam voluptas sed facere! Accusantium
        voluptate laborum deserunt commodi.
      </FadingDiv>
    </div>
  );
};

export default HomeBio;
