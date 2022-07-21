import Hero from "../images/Hero.jpg";
import foto1 from "../images/foto-1.jpg";
import foto3 from "../images/foto-3.jpg";
import foto4 from "../images/foto-4.jpg";
export default function Home() {
  return (
    <>
      <div className="hero-container">
        <img src={Hero} alt="Command" />
        {/* <h1>Благодійний фонд</h1>
        <h2>Анжеліки Зайки</h2> */}
      </div>
      <div className="about-foto_container">
        <img src={foto1} alt="results" />
        <img src={foto3} alt="results" />
        <img src={foto4} alt="results" />
      </div>
      <div className="about-container">
        <div className="about">
          <p>Про нас</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error id
            vitae, expedita eligendi iste, voluptatibus et facilis cupiditate,
            molestias ut molestiae nisi. Vero harum at perspiciatis voluptas
            commodi ab iste? Modi laboriosam saepe culpa beatae quasi excepturi
            dolor sint consequatur quos nesciunt, dolore hic et praesentium
            ducimus, maxime est enim officia? Eaque delectus incidunt esse
            mollitia reprehenderit reiciendis nemo velit. Voluptas, architecto,
            provident quaerat quasi numquam commodi nostrum deserunt dolores
            blanditiis officiis perferendis nihil sequi incidunt sed non
            laboriosam laborum necessitatibus dicta velit accusantium ab
            recusandae quibusdam facilis excepturi! Architecto! Ex architecto
            qui inventore labore obcaecati unde, non error quis explicabo
            impedit velit dolore ad, mollitia libero quia tenetur corrupti, iste
            similique iure repudiandae eaque neque atque quas? Autem, ea? Nihil
            eius voluptatum suscipit fugiat deleniti vero in accusantium minus
            molestiae error labore ratione ad odio non repellat, veniam laborum
            sed quibusdam quaerat nesciunt quod, laboriosam ipsam quidem! Omnis,
            rem!
          </p>
        </div>
        <div className="foto-about-sub_container">
          <img src={foto1} alt="results" />
          <div className="qwe">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              magni, molestias sequi voluptatum libero minus iste, error labore
              fugiat in at deserunt vitae! Quae quasi, ea dolore accusantium
              voluptatibus inventore. Voluptatem eveniet ipsa maiores. Quod iure
              ea obcaecati ipsa nobis nesciunt illum perferendis distinctio
              odio. Asperiores nemo, et atque illum, obcaecati voluptatibus nam
              eius facere inventore possimus numquam sunt incidunt! Neque, error
              commodi saepe architecto placeat eos corporis incidunt deleniti,
              eligendi dicta, voluptas voluptate quo unde officiis porro nam
              illum. Odio accusamus est labore, culpa sed necessitatibus a
              reiciendis maiores? Nisi tempora eligendi suscipit debitis quidem
              ad error magni at, excepturi aperiam assumenda impedit iusto
              deleniti hic molestiae quod quis labore ratione dolorem asperiores
              distinctio. Saepe quos eum perspiciatis aperiam. Repudiandae sunt
              laborum quae, distinctio dolorum adipisci. Autem numquam ea
              explicabo amet ex eligendi fugiat eveniet veritatis debitis
              cupiditate. Praesentium impedit nulla et. Nemo, iusto excepturi
              magni voluptatum aut quidem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
