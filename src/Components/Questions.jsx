import { useState } from "react";
import ArrowDown from "../images/arrow-down.svg";
import ArrowUp from "../images/arrow-up.svg";
import { questions } from "../questions";

export default function Questions() {
  const [modalAnswer, setModalAnswer] = useState("");
  const opneAnswer = (e) => {
    const { textContent } = e.target;
    if (modalAnswer === textContent) {
      setModalAnswer("");
      return;
    }
    setModalAnswer(textContent);
  };

  return (
    <div onClick={opneAnswer} className="questions-container">
      <p>Часті запитання</p>
      {questions.map((question) => {
        return (
          <>
            <div key={question}>
              <button>
                {modalAnswer === question ? (
                  <img src={ArrowUp} alt="arrow up" width="15" height="15" />
                ) : (
                  <img
                    src={ArrowDown}
                    alt="arrow down"
                    width="15"
                    height="15"
                  />
                )}
                {question}
              </button>

              {modalAnswer === question && (
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur labore nisi amet alias. Quisquam eius officiis
                  corporis accusantium, provident ipsum cupiditate
                  exercitationem sunt voluptate saepe amet ex porro.
                  Accusantium, id. Laborum, cupiditate. Tenetur minus, neque
                  facilis accusamus ratione veritatis. Dolores, pariatur dolor?
                  Ipsum vitae nostrum repellendus, nam fugit eum consectetur
                  ducimus, dolor exercitationem nesciunt dolores magni eius, sit
                  voluptas magnam.
                </div>
              )}
            </div>
          </>
        );
      })}
      {/* <div>
        <button>Кому допомагає фонд?</button>
        {modalAnswer === "Кому допомагає фонд?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>Із ким ми співпрацюємо?</button>
        {modalAnswer === "Із ким ми співпрацюємо?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>Із ким ми не співпрацюємо?</button>
        {modalAnswer === "Із ким ми не співпрацюємо?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>Як правильно звернутися за допомогою?</button>
        {modalAnswer === "Як правильно звернутися за допомогою?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>Як правильно сформувати офіційний письмовий запит?</button>
        {modalAnswer ===
        "Як правильно сформувати офіційний письмовий запит?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Ми бойовий підрозділ і подали запит. Чому з нами не зв’язуються?
        </button>
        {modalAnswer ===
        "Ми бойовий підрозділ і подали запит. Чому з нами не зв’язуються?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Чи реагує Фонд на коментарі під постами в офіційному телеграмі Сергія
          Притули?
        </button>
        {modalAnswer ===
        "Чи реагує Фонд на коментарі під постами в офіційному телеграмі Сергія Притули?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>На що Фонд першочергово витрачає гроші?</button>
        {modalAnswer === "На що Фонд першочергово витрачає гроші?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>Чи приймає Фонд гуманітарну допомогу з-за кордону?</button>
        {modalAnswer ===
        "Чи приймає Фонд гуманітарну допомогу з-за кордону?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Ми знайшли, де закупити бронежилети/каски/інше. Чи може Фонд
          профінансувати закупівлю?
        </button>
        {modalAnswer ===
        "Ми знайшли, де закупити бронежилети/каски/інше. Чи може Фонд профінансувати закупівлю?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Я підозрюю, що від імені Фонду Притули мені пишуть шахраї. Як
          перевірити це?
        </button>
        {modalAnswer ===
        "Я підозрюю, що від імені Фонду Притули мені пишуть шахраї. Як перевірити це?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Ми готові закупити обладнання. Чи може Фонд забрати його з Варшави /
          Кракова / Праги чи інших міст?
        </button>
        {modalAnswer ===
        "Ми готові закупити обладнання. Чи може Фонд забрати його з Варшави / Кракова / Праги чи інших міст?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Ми знаходимось у Варшаві / Кракові / Празі / Чернівцях. Чи порадите ви
          якихось перевірених місцевих волонтерів?
        </button>
        {modalAnswer ===
        "Ми знаходимось у Варшаві / Кракові / Празі / Чернівцях. Чи порадите ви якихось перевірених місцевих волонтерів?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Ми маємо гроші, однак нам треба юридична особа в Україні, з рахунку
          якої можна заплатити за обладнання. Чи можемо ми зробити це з
          юридичної особи Фонду?
        </button>
        {modalAnswer ===
        "Ми маємо гроші, однак нам треба юридична особа в Україні, з рахунку якої можна заплатити за обладнання. Чи можемо ми зробити це з юридичної особи Фонду?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Ми маємо гроші, однак нам треба юридична особа в за кордоном, з
          рахунку якої можна заплатити за обладнання. Чи можемо ми зробити це з
          юридичної особи Фонду?
        </button>
        {modalAnswer ===
        "Ми маємо гроші, однак нам треба юридична особа в за кордоном, з рахунку якої можна заплатити за обладнання. Чи можемо ми зробити це з юридичної особи Фонду?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Я хочу відправити посилку в певне українське місто. Чи допоможе Фонд
          мені із доставкою, якщо я відправлю посилку на ваші координаційні
          центри?
        </button>
        {modalAnswer ===
        "Я хочу відправити посилку в певне українське місто. Чи допоможе Фонд мені із доставкою, якщо я відправлю посилку на ваші координаційні центри?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Я закинув/ла гроші на ваш Фонд. Мені і моєму підрозділу потрібні речі
          за списком. Виконайте моє замовлення, будь ласка.
        </button>
        {modalAnswer ===
        "Я закинув/ла гроші на ваш Фонд. Мені і моєму підрозділу потрібні речі за списком. Виконайте моє замовлення, будь ласка." ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div>
      <div>
        <button>
          Як я можу відстежити свою поставку, яку я відправляю на ваші
          логістичні центри та на штаб?
        </button>
        {modalAnswer ===
        "Як я можу відстежити свою поставку, яку я відправляю на ваші логістичні центри та на штаб?" ? (
          <img src={ArrowUp} alt="arrow up" width="15" height="15" />
        ) : (
          <img src={ArrowDown} alt="arrow down" width="15" height="15" />
        )}
      </div> */}
    </div>
  );
}
