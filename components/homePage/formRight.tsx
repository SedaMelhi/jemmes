import { FC } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MyButton } from "../shared/button";
import { Checkbox } from "../svg";

export const FormRight: FC = () => {
  return (
    <div className="lg:w-1/2 w-full rounded-[10px] bg-primary p-10 bg-no-repeat bg-right-bottom text-white-100 lg:mt-0 mt-2">
      <h3 className="text-2xl tracking-[-0.48px] font-medium mb-5">
        Чтобы оставить заявку, заполните форму
      </h3>
      <form className="flex flex-col gap-2.5 items-start">
        <Input
          className="w-full rounded-[20px] bg-white-5 border-0 h-[66px] p-6 placeholder:text-white-20 text-base"
          placeholder="Имя"
          type="text"
        />
        <Input
          className="w-full rounded-[20px] bg-white-5 border-0 h-[66px] p-6 placeholder:text-white-20 text-base"
          placeholder="Телефон"
          type="phone"
        />
        <Textarea
          className="w-full rounded-[20px] bg-white-5 border-0 h-[229px] p-6 placeholder:text-white-20 text-base resize-none"
          placeholder="Комментарий"
        />
        <label className="flex gap-2 items-center mt-2.5">
          <Input
            className="peer/agree w-6 h-6 hidden"
            type="checkbox"
            id="agree"
          />
          <Checkbox />
          <div className="text-xl ">
            Согласие на обработку{" "}
            <span className="text-accent ">персональных данных</span>
          </div>
        </label>
        <MyButton
          value="Отправить заявку"
          className="bg-accent text-white-100 hover:bg-white-100 hover:text-accent mt-7"
        />
      </form>
    </div>
  );
};
