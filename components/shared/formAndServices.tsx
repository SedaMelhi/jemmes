import { Form, Services, Text } from "../homePage";
import { Container } from "./сontainer";

export const FormAndServices = () => {
  return (
    <>
      <Container className="lg:mt-40 mt-20">
        <Text
          text_orange="Услуги"
          desc="Компания предлагает ландшафтные услуги, включая проектирование, озеленение, вертикальное озеленение, уход за растениями и праздничное оформление. Также доступны  услуги по уходу за садом."
        />
      </Container>
      <Services />
      <Container className="lg:mt-40 mt-20">
        <Form />
      </Container>
    </>
  );
};
