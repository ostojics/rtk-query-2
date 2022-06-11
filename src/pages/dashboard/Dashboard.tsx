import {useGetBeersQuery} from 'features/beers/beersApiSlice';
import {useAppSelector} from 'hooks/useAppSelector';
import LayoutNavbar from 'layouts/LayoutNavbar/LayoutNavbar';

import './Dashboard.scss';

export default function Dashboard() {
  const {user} = useAppSelector((state) => state.app);

  useGetBeersQuery({page: 1, perPage: 15});

  return (
    <div>
      <LayoutNavbar pageName="dashboard">
        <h1>Welcome to dashboard</h1>
        <h2>{user?.username}</h2>
      </LayoutNavbar>
    </div>
  );
}
