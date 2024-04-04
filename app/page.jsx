import styles from "./page.module.css";
import localfont from "next/font/local"
import SignUp from "../components/SignUp"

const futura = localfont({
  src: [{
    path : "../public/fonts/futura/FuturaNewBook-Reg.ttf",
    weight: "700"
  },
],
variable : "--font-futura",
});

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${futura.variable}`}>
        <div className={styles.description}>
          <SignUp/>
          Hello world!
        </div>
      </main>
    </>
  );
}
