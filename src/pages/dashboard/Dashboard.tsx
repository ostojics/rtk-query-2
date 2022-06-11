import {useState} from 'react';

import {Button, Pagination, TextField} from '@mui/material';
import BeerCard from 'features/beers/BeerCard/BeerCard';
import {useAddBeerMutation, useGetBeersQuery} from 'features/beers/beersApiSlice';
import {useAppSelector} from 'hooks/useAppSelector';
import LayoutNavbar from 'layouts/LayoutNavbar/LayoutNavbar';
import {debounce} from 'lodash';
import './Dashboard.scss';
import {CreateBeerDTO} from 'typescript/dto/CreateBeerDTO';

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [beerName, setBeerName] = useState('');

  const {user} = useAppSelector((state) => state.app);
  const {data} = useGetBeersQuery({page, perPage: 15, name});
  const [addNewBeer] = useAddBeerMutation();

  const handleSearch = (value: string) => {
    setName(value);
  };

  const handleAddNewBeer = async () => {
    try {
      const dto: CreateBeerDTO = {
        name: beerName,
        details: 'lorem ipsum dolor sit amet',
        abv: '10',
        ibu: '10',
        brewery_id: '6',
        beer_style_id: '2',
        beer_logo: null,
      };

      await addNewBeer(dto).unwrap();
      setBeerName('');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
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
        <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
          <TextField
            variant="standard"
            label="Beer Name"
            value={beerName}
            onChange={(e) => setBeerName(e.target.value)}
          />
          <Button onClick={handleAddNewBeer} variant="contained">
            Add New Beer
          </Button>
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
