import styles from "./Heading.module.css";

export function Heading(props: { children: string; text: string }) {
  return (
    <>
      <h1 className={styles.heading}> {props.children} </h1>
      <h2>{props.text}</h2>
    </>
  );
}
