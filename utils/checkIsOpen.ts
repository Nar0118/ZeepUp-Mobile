import { WeekOptions } from '../constants/weekOptions';
import { OpenClose } from '../enums/openClose.enum';
import { IVendorAvailable } from '../interfaces/vendorAvailable.interface';
import { convertToTimestamp } from './convertToTimestamp';

export const checkIsOpen = (vendorsAvailable: IVendorAvailable | null | undefined): boolean => {
  const today = new Date();
  const dayOfWeek: string = WeekOptions[today.getDay()].toLowerCase();

  const dayOfWeekIsOpen = dayOfWeek + OpenClose.OPEN;
  const dayOfWeekIsClose = dayOfWeek + OpenClose.CLOSE;

  if (vendorsAvailable) {
    const open = convertToTimestamp(
        vendorsAvailable[dayOfWeekIsOpen as keyof IVendorAvailable] as string,
      ),
      close = convertToTimestamp(
        vendorsAvailable[dayOfWeekIsClose as keyof IVendorAvailable] as string,
      ),
      curTime = new Date();

    const currentTime = curTime.getTime() / 1000;

    if (open < currentTime && close > currentTime) return true;
  }

  return false;
};
