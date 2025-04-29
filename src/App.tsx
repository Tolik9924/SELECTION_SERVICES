import { ServiceType } from "./ui-components/advert-container/ServiceType";
import img5 from "./assets/5_img.png";
import img6 from "./assets/6_img.png";
import img7 from "./assets/7_img.png";
import img8 from "./assets/8_img.png";
import img9 from "./assets/9_img.png";
import {
  WARDROBE_TITLE,
  WARDROBE_BREAKDOWN_PRICES,
  WARDROBE_GET_LIST,
  WARDROBE_HAPPEN_LIST,
  WHAT_IS_WARDROBE_BREAKDOWN,
} from "./shared/services/constants/wardrobe-breakdown";
import {
  BEAUTY_LINE_HAPPEN_LIST,
  BEAUTY_LINE_PRICES,
  BEAUTY_TITLE,
  WHAT_IS_BEAUTY_LINE,
} from "./shared/services/constants/beauty-line";

import styles from "./App.module.css";
import {
  SHOPPING_GET_LIST,
  SHOPPING_HAPPEN_LIST,
  SHOPPING_LINE_PRICES,
  SHOPPING_TITLE,
  WHAT_IS_SHOPPING,
} from "./shared/services/constants/shopping";
import {
  CAPSULE_WARDROBE_GET_LIST,
  CAPSULE_WARDROBE_HAPPEN_LIST,
  CAPSULE_WARDROBE_PRICES,
  CAPSULE_WARDROBE_TITLE,
  WHAT_IS_CAPSULE_WARDROBE,
} from "./shared/services/constants/capsule-wardrobe";
import {
  KEY_WARDROBE_GET_LIST,
  KEY_WARDROBE_HAPPEN_LIST,
  KEY_WARDROBE_PRICES,
  KEY_WARDROBE_TITLE,
  WHAT_IS_KEY_WARDROBE,
} from "./shared/services/constants/key_wardrobe";
import { SelectionService } from "./ui-components/selection-service/Selection.Service";
import { Practic } from "./ui-components/practic/Practic";
import { Modeton } from "./ui-components/modeton/Modeton";
import { ServiceGive } from "./ui-components/service-give/ServiceGive";
import { Consult } from "./ui-components/consult/Consult";

function App() {
  return (
    <div className={styles.App}>
      <SelectionService />
      <Practic />
      <Modeton />
      <ServiceGive />
      <ServiceType
        img={img5}
        title={WARDROBE_TITLE}
        prices={WARDROBE_BREAKDOWN_PRICES}
        whatIs={WHAT_IS_WARDROBE_BREAKDOWN}
        happenList={WARDROBE_HAPPEN_LIST}
        getList={WARDROBE_GET_LIST}
      />
      <ServiceType
        img={img6}
        title={BEAUTY_TITLE}
        prices={BEAUTY_LINE_PRICES}
        whatIs={WHAT_IS_BEAUTY_LINE}
        happenList={BEAUTY_LINE_HAPPEN_LIST}
        getList={WARDROBE_GET_LIST}
      />
      <ServiceType
        img={img7}
        title={SHOPPING_TITLE}
        prices={SHOPPING_LINE_PRICES}
        whatIs={WHAT_IS_SHOPPING}
        happenList={SHOPPING_HAPPEN_LIST}
        getList={SHOPPING_GET_LIST}
      />
      <ServiceType
        img={img8}
        title={CAPSULE_WARDROBE_TITLE}
        prices={CAPSULE_WARDROBE_PRICES}
        whatIs={WHAT_IS_CAPSULE_WARDROBE}
        happenList={CAPSULE_WARDROBE_HAPPEN_LIST}
        getList={CAPSULE_WARDROBE_GET_LIST}
      />
      <ServiceType
        img={img9}
        title={KEY_WARDROBE_TITLE}
        prices={KEY_WARDROBE_PRICES}
        whatIs={WHAT_IS_KEY_WARDROBE}
        happenList={KEY_WARDROBE_HAPPEN_LIST}
        getList={KEY_WARDROBE_GET_LIST}
      />
      <Consult />
    </div>
  );
}

export default App;
