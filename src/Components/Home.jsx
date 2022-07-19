import Hero from "../images/Hero.jpg";
export default function Home() {
  return (
    <>
      <div className="background">
        <img src={Hero} alt="Command" />
      </div>
      <p>Благодійний фонд</p>
      <p>Зайки Анжеліки</p>
    </>
  );
}
