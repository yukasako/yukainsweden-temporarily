import style from "./App.module.css";
import topImg from "./assets/hamster.png";

function App() {
  return (
    <>
      <main className={style.main}>
        <img src={topImg} alt="top-image" className={style.topImg} />
        <article className={style.message}>
          <p>漫画ブログ・Yukainsweden は現在休止中です。</p>
          <p>
            過去の漫画を読みたい方は
            <a href="https://www.instagram.com/yukainsweden">インスタグラム</a>
            へ、
            <br />
            ご用の方は
            <a href="mailto: yukainsweden@gmail.com">yukainsweden@gmail.com</a>
            まで。
          </p>
        </article>
      </main>
    </>
  );
}

export default App;
