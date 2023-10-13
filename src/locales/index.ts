import { createI18n } from "vue-i18n";
import * as ruRU from "./ru-RU.json?inline";
import * as enUS from "./en-US.json?inline";

export const langs = {
  "ru-RU": ruRU,
  "en-US": enUS,
};

export const i18n = createI18n({
  locale: "ru-RU",
  messages: langs,
});

export function t(key: string) {
  return i18n.global.t(key);
}
