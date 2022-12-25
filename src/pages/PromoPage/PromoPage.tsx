/* eslint-disable max-lines */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../shared/assets/logo.svg';
import frame from '../../shared/assets/landingFrame.png';
import groupBg from '../../shared/assets/groupBg.jpg';
import turtle from '../../shared/assets/turtleLanding.jpg';
import checkMark from '../../shared/assets/icons/checkMark.svg';
import microphone from '../../shared/assets/microphone.png';

const PromoPage = () => {
  return (
    <div className="flex justify-center bg-[#1E1E1E]">
      <div className="flex flex-col text-white px-[30px] py-[20px] max-w-[1920px] bg-[#1E1E1E]">
        <header className="flex justify-between">
          <div className="flex gap-x-[11px]">
            <Image src={logo} className="h-[30px] w-[30px]" alt="Логотип" />
            <p className="font-lato font-semibold self-center">Патефон</p>
          </div>
          <div className="flex gap-x-[30px] font-medium">
            <Link href="#">Регистрация</Link>
            <Link href="#">Вход</Link>
          </div>
        </header>
        <main>
          <section className="flex max-w-[1600px] justify-between text-center relative">
            <div
              className="h-[823px] w-[720px] absolute top-0 right-0 z-1"
              style={{ backgroundImage: `url(${frame.src})` }}
            ></div>
            <div className="flex flex-col max-w-[700px] mt-[232px] ml-[100px] relative text-left">
              <h1 className="font-inter text-8xl leading-[116px] font-extrabold">
                Музыка нас объединяет
              </h1>
              <p className="font-inter font-normal text-3xl leading-[44px] mt-[60px] opacity-50">
                Музыкальный стриминговый сервис с социальным уклоном
              </p>
              <div className="flex gap-x-[30px] mt-[50px]">
                <button className="font-lato font-bold w-[150px] bg-[#1A5AFE] p-[10px] rounded-[5px]">
                  Попробовать
                </button>
                <button className="font-lato font-normal w-[150px] border p-[10px] rounded-[5px]">
                  Прайс
                </button>
              </div>
            </div>
          </section>
          <section className="mt-[160px]">
            <h2 className="font-inter font-bold text-5xl leading-[58px] max-w-[1400px] mx-auto text-center">
              Присоединяйтесь к самым популярным сообществам
            </h2>
            <div className="flex justify-center mt-[80px] gap-[50px] mx-auto flex-wrap">
              <div className="flex flex-col w-[450px] min-h-[280px] rounded-[10px] overflow-hidden relative">
                <div
                  className="w-[70px] h-[70px] bg-cover bg-center bg-no-repeat border-[5px] border-solid border-black rounded-[10px] absolute left-[15px] top-[70px]"
                  style={{ backgroundImage: `url(${turtle.src})` }}
                ></div>
                <div
                  className="w-[450px] min-h-[125px]"
                  style={{ backgroundImage: `url(${groupBg.src})` }}
                ></div>
                <div className="flex flex-col p-[15px] bg-[#0E0E0E] rounded-b-[10px] overflow-hidden">
                  <h3 className="font-lato font-semibold mt-[13px] text-xl leading-[24px] text-ellipsis whitespace-nowrap overflow-hidden max-w-[285px]">
                    Любители Абоб
                  </h3>
                  <p className="mt-[10px] font-lato font-normal text-white opacity-60 text-base leading-[19px] text-ellipsis whitespace-nowrap overflow-hidden max-w-[435px]">
                    Описание абоб такое круто шо ваще тосики босики тудэмы
                    сюдемы
                  </p>
                  <div className="flex gap-x-[20px] mt-[40px]">
                    <div className="flex">
                      <div className="bg-[#8BFF63] w-[12px] h-[12px] self-center rounded-full"></div>
                      <span className="font-lato font-normal ml-[5px] text-white opacity-60">
                        125 онлайн
                      </span>
                    </div>
                    <div className="flex">
                      <div className="bg-[#9F9F9F] w-[12px] h-[12px] self-center rounded-full"></div>
                      <span className="font-lato font-normal ml-[5px] text-white opacity-60">
                        341 участник
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[450px] min-h-[280px] rounded-[10px] overflow-hidden relative">
                <div
                  className="w-[70px] h-[70px] bg-cover bg-center bg-no-repeat border-[5px] border-solid border-black rounded-[10px] absolute left-[15px] top-[70px]"
                  style={{ backgroundImage: `url(${turtle.src})` }}
                ></div>
                <div
                  className="w-[450px] min-h-[125px]"
                  style={{ backgroundImage: `url(${groupBg.src})` }}
                ></div>
                <div className="flex flex-col p-[15px] bg-[#0E0E0E] rounded-b-[10px] overflow-hidden">
                  <h3 className="mt-[13px] font-lato font-semibold text-xl leading-[24px] text-ellipsis whitespace-nowrap overflow-hidden max-w-[285px]">
                    Любители Абоб
                  </h3>
                  <p className="mt-[10px] font-lato font-normal text-white opacity-60 text-base leading-[19px] text-ellipsis whitespace-nowrap overflow-hidden max-w-[435px]">
                    Описание абоб такое круто шо ваще тосики босики тудэмы
                    сюдемы
                  </p>
                  <div className="flex gap-x-[20px] mt-[40px]">
                    <div className="flex">
                      <div className="bg-[#8BFF63] w-[12px] h-[12px] self-center rounded-full"></div>
                      <span className="font-lato font-normal ml-[5px] text-white opacity-60">
                        125 онлайн
                      </span>
                    </div>
                    <div className="flex">
                      <div className="bg-[#9F9F9F] w-[12px] h-[12px] self-center rounded-full"></div>
                      <span className="font-lato font-normal ml-[5px] text-white opacity-60">
                        341 участник
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[450px] min-h-[280px] rounded-[10px] overflow-hidden relative">
                <div
                  className="w-[70px] h-[70px] bg-cover bg-center bg-no-repeat border-[5px] border-solid border-black rounded-[10px] absolute left-[15px] top-[70px]"
                  style={{ backgroundImage: `url(${turtle.src})` }}
                ></div>
                <div
                  className="w-[450px] min-h-[125px]"
                  style={{ backgroundImage: `url(${groupBg.src})` }}
                ></div>
                <div className="flex flex-col p-[15px] bg-[#0E0E0E] rounded-b-[10px] overflow-hidden">
                  <h3 className="mt-[13px] font-lato font-semibold text-xl leading-[24px] text-ellipsis whitespace-nowrap overflow-hidden max-w-[285px]">
                    Любители Абоб
                  </h3>
                  <p className="mt-[10px] font-lato font-normal text-white opacity-60 text-base leading-[19px] text-ellipsis whitespace-nowrap overflow-hidden max-w-[435px]">
                    Описание абоб такое круто шо ваще тосики босики тудэмы
                    сюдемы
                  </p>
                  <div className="flex gap-x-[20px] mt-[40px]">
                    <div className="flex">
                      <div className="bg-[#8BFF63] w-[12px] h-[12px] self-center rounded-full"></div>
                      <span className="font-lato font-normal ml-[5px] text-white opacity-60">
                        125 онлайн
                      </span>
                    </div>
                    <div className="flex">
                      <div className="bg-[#9F9F9F] w-[12px] h-[12px] self-center rounded-full"></div>
                      <span className="font-lato font-normal ml-[5px] text-white opacity-60">
                        341 участник
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center mt-[160px] relative">
            <Image
              src={microphone}
              className="absolute top-0 right-0 z-1"
              alt="микрофон"
            />
            <h2 className="font-inter font-bold text-5xl leading-[58px] relative z-2 text-center">
              Почему у нас <span className="text-blue-600">уникальное</span>{' '}
              решение?
            </h2>
            <ul className="flex flex-col font-inter font-normal mt-[45px] gap-y-[21px] relative z-2">
              <li className="flex gap-x-[32px] font-inter font-normal text-[32px] leading-[39px]">
                <Image
                  src={checkMark}
                  className="h-[30px] w-[30px] self-center"
                  alt="галочка"
                />
                Совместное прослушивание
              </li>
              <li className="flex gap-x-[32px] font-inter font-normal text-[32px] leading-[39px]">
                <Image
                  src={checkMark}
                  className="h-[30px] w-[30px] self-center"
                  alt="галочка"
                />
                Коммьюнити
              </li>
              <li className="flex gap-x-[32px] font-inter font-normal text-[32px] leading-[39px]">
                <Image
                  src={checkMark}
                  className="h-[30px] w-[30px] self-center"
                  alt="галочка"
                />{' '}
                Начинающие артисты
              </li>
            </ul>
          </section>
          <section className="flex justify-center gap-[36px] mt-[250px] mb-[150px] flex-wrap">
            <div className="flex flex-col items-center w-[500px] p-[30px] bg-[#1A5AFE] rounded-[15px]">
              <p className="font-inter font-bold text-[24px] leading-[29px]">
                Подписка
              </p>
              <span className="font-inter font-bold text-[64px] leading-[77px] mt-[20px]">
                199 ₽
              </span>
              <ul className="font-inter font-medium text-[24px] leading-[29px] list-disc  mt-[60px]">
                <li>Треки без ограничений</li>
                <li>Оффлайн прослушивание</li>
                <li>Что-то ещё</li>
              </ul>
              <button className="font-lato font-normal uppercase rounded-[5px] border-2 p-[15px] w-[260px] mt-[70px] text-[24px] leading-[29px]">
                Подписаться
              </button>
            </div>
            <div className="flex flex-col items-center w-[500px] p-[30px] bg-[#2d2d2d] rounded-[15px]">
              <p className="font-inter font-bold text-[24px] leading-[29px]">
                Базовый
              </p>
              <span className="font-inter font-bold text-[64px] leading-[77px] mt-[20px]">
                Бесплатно
              </span>
              <ul className="font-inter font-medium text-[24px] leading-[29px] list-disc mt-[60px]">
                <li>Реклама</li>
                <li>Без скачивания</li>
                <li>Что-то ещё</li>
              </ul>
              <button className="font-lato font-normal uppercase rounded-[5px] border-2 p-[15px] w-[260px] mt-[70px] text-[24px] leading-[29px]">
                Слушать
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PromoPage;
