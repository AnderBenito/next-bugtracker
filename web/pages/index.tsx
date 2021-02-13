import styled from "@emotion/styled";
import styles from "../styles/Home.module.css";

interface ExampleProps {
	isBig?: boolean;
}

const ExampleComp = styled.div<ExampleProps>((props) => ({
	color: "green",
	fontSize: props.isBig ? "22rem" : 10,
}));

export default function Home() {
	return (
		<ExampleComp isBig className={styles.container}>
			Home
		</ExampleComp>
	);
}
