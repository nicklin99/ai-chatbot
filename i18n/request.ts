import {cookies} from 'next/headers';
import {getRequestConfig} from 'next-intl/server';
 import {hasLocale} from 'next-intl';
 import {routing} from './routing';
 
export default getRequestConfig(async () => {
  const store = await cookies();
  let requested = store.get('locale')?.value;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  return {
    locale,
    messages: (await import(`./${locale}.json`)).default
  };
});