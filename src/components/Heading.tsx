import styles from "./Heading.module.css";

type HeadingProps = {
  children: string;
  text: string;
};

export function Heading(props: HeadingProps) {
  const children = props.children; // destructuring

  return (
    <>
      <h1 className={styles.heading}> {children} </h1>
      <h2>{props.text}</h2> // using props.text without destructuring
    </>
  );
}
