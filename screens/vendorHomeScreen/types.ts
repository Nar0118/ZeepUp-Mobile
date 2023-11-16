import { RecentOrderType } from '../../components/feature/recentOrders/types';

export const fakeData: Array<RecentOrderType> = [{ order: '0145' }, { order: '0146' }];

export interface HomeProps {
  route: {
    params: {
      isPermissionsUpdated: boolean;
    };
    name: string;
  };
}
