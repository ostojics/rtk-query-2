import {useState} from 'react';

import {Pagination, TextField} from '@mui/material';
import BeerCard from 'features/beers/BeerCard/BeerCard';
import {useGetBeersQuery} from 'features/beers/beersApiSlice';
import {useAppSelector} from 'hooks/useAppSelector';
import LayoutNavbar from 'layouts/LayoutNavbar/LayoutNavbar';
import {debounce} from 'lodash';

import './Dashboard.scss';

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  const {user} = useAppSelector((state) => state.app);
  const {data} = useGetBeersQuery({page, perPage: 15, name});

  const handleSearch = (value: string) => {
    setName(value);
  };

  const debouncedHandleSearch = debounce(handleSearch, 500);

  return (
    <div>
      <LayoutNavbar pageName="dashboard">
        <h1>Welcome to dashboard</h1>
        <h2>{user?.username}</h2>
        <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
          <TextField variant="standard" label="Search Beers" onChange={(e) => debouncedHandleSearch(e.target.value)} />
        </div>
        {data && (
          <>
            {data.data.map((beer) => (
              <BeerCard beer={beer} key={beer.id} />
            ))}
            <Pagination
              count={data.meta.total_pages}
              page={data.meta.current_page}
              onChange={(e, value) => setPage(value)}
              style={{justifyContent: 'center', marginBottom: '20px'}}
            />
          </>
        )}
      </LayoutNavbar>
    </div>
  );
}
