import { FC } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MyButton } from "../shared/button";
import { Checkbox, Telegram, WA } from "../svg";

export const FormRight: FC = () => {
  return (
    <div
      className="lg:w-1/2 w-full rounded-2xl sm:p-10 p-4 bg-no-repeat text-white-100 lg:mt-0 mt-2 bg-primary lg:bg-none bg-[url('/bg-umbrella.svg')]"
      style={{ backgroundPosition: "105% 120%" }}
    >
      <div className="lg:hidden block sm:mb-8 mb-6">
        <h2 className="sm:text-7xl text-4xl font-medium sm:mb-5 mb-2 sm:tracking-[-4.32px] tracking-[-2px]">
          Оставьте заявку
        </h2>
        <p className="sm:text-base text-xs sm:leading-[18px] leading-[14px] max-w-80">
          Наши менеджеры свяжутся с вами и ответят на все ваши вопросы
        </p>
      </div>
      <h3 className="lg:block hidden text-2xl tracking-[-0.48px] font-medium mb-5">
        Чтобы оставить заявку, заполните форму
      </h3>
      <form className="flex flex-col sm:gap-2.5 gap-2 items-start">
        <Input
          className="w-full sm:rounded-[20px] rounded-[8px] bg-white-5 border-0 sm:h-[66px] h-[28px] p-6 placeholder:text-white-20 sm:text-base text-xs"
          placeholder="Имя"
          type="text"
        />
        <Input
          className="w-full sm:rounded-[20px] rounded-[8px] bg-white-5 border-0 sm:h-[66px] h-[28px] p-6 placeholder:text-white-20 sm:text-base text-xs"
          placeholder="Телефон"
          type="phone"
        />
        <Textarea
          className="w-full sm:rounded-[20px] rounded-[8px] bg-white-5 border-0 sm:h-[229px] h-[134px] p-6 placeholder:text-white-20 sm:text-base text-xs resize-none"
          placeholder="Комментарий"
        />
        <label className="flex gap-2 items-center mt-2.5">
          <Input
            className="peer/agree w-6 h-6 hidden"
            type="checkbox"
            id="agree"
          />
          <Checkbox />
          <div className="sm:text-xl text-xs">
            Согласие на обработку{" "}
            <span className="text-accent ">персональных данных</span>
          </div>
        </label>
        <MyButton
          value="Отправить заявку"
          className="lg:w-auto w-full bg-accent text-white-100 text-base hover:bg-white-100 hover:text-accent sm:mt-7 mt-6"
        />
        <div className="flex gap-5 px-3 mt-8 sm:justify-start justify-center w-full">
          <WA />
          <Telegram />
        </div>
      </form>
    </div>
  );
};
