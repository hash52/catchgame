import { FC } from "react";
import "./style/common.scss";
import "./style/catchgame.scss";

export const CatchGame: FC = () => {
  return (
    <div className="baseWhap">
      <div className="tools">
        <dl className="score">
          <dt>
            SCORE<span>：</span>
          </dt>
          <dd id="scoreBox">1234567</dd>
        </dl>
        <dl className="miss">
          <dt>
            MISS<span>：</span>
          </dt>
          <dd>
            <ul id="missList">
              <li>
                <img src="/images/icon_miss.png" alt="miss" />
              </li>
              <li>
                <img src="/images/icon_miss.png" alt="miss" />
              </li>
              <li>
                <img src="/images/icon_miss.png" alt="miss" />
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className="screen">
        <div id="monkey" className="wait">
          <img src="/images/monkey_wait.png" alt="monkey" />
          {/* class:throwの時
            <img src="/images/monkey_throw.png" alt="monkey"> */}
        </div>

        <div id="apple" className="posi-2">
          <img src="/images/apple.png" alt="apple" />
          {/* posi-3の時
            <img src="/images/fall_apple.png" alt="apple"> */}
        </div>

        <div id="banana" className="posi-4">
          <img src="/images/fall_banana.png" alt="banana" />
          {/* posi-4以外の時
            <img src="/images/banana.png" alt="banana"> */}
        </div>

        <div id="salmon" className="posi-3">
          <img src="/images/salmon.png" alt="salmon" />
          {/* posi-5の時
            <img src="/images/fall_salmon.png" alt="salmon"> */}
        </div>

        <div id="player" className="left catch">
          <img src="/images/player.png" alt="player" />
        </div>
        {/* やられclass:crash */}
        <div id="player" className="right crash">
          <img src="/images/crash.png" alt="player" />
        </div>

        <div id="boar" className="wait">
          <img src="/images/boar.png" alt="boar" />
        </div>

        <div id="gorilla" className="attack">
          {/* class:waitの時
            <img src="/images/gorilla_wait.png" alt="gorilla_wait">*/}
          {/* class:moveの時
            <img src="/images/gorilla_move.png" alt="gorilla_attrack"> */}
          <img src="/images/gorilla_attrack.png" alt="gorilla_attrack" />
        </div>
      </div>
      {/* /.screen */}
    </div>
  );
};
