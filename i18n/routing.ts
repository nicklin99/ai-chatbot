import {defineRouting} from 'next-intl/routing';
import { locales } from './config';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
  localePrefix: 'never', // 不加前缀，部署后可以通过域名来区分
  // Used when no locale matches
  defaultLocale: 'zh'
});