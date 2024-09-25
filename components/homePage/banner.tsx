import { BannerService, BannerType } from "@/services/homePage";
import { MyButton } from "../shared/button";

export const Banner = async () => {
  const banner: BannerType[] | null = await BannerService.getBanner();
  return (
    <div>
      <section
        className={
          "lg:h-[500px] sm:h-[400px] h-[190px] bg-cover bg-center bg-no-repeat flex items-center justify-center rounded-2xl bg-secondary"
        }
        style={{
          backgroundImage: `url(${banner ? banner[0].url : "/banner.png"})`,
        }}
      >
        <MyButton
          value="Оставить заявку"
          className="hover:bg-accent hover:text-white-100 sm:flex hidden"
        />
      </section>
      <MyButton
        value="Оставить заявку"
        className="hover:bg-primary bg-accent text-white-100 mt-1 w-full sm:hidden flex leading-6"
      />
    </div>
  );
};
