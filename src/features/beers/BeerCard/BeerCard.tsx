import {Card, CardContent, Typography} from '@mui/material';
import {useAppSelector} from 'hooks/useAppSelector';
import {Beer} from 'typescript/models/Beer';

import {includedBreweriesSelector} from '../beersSlice';

interface IProps {
  beer: Beer;
}

const BeerCard = ({beer}: IProps) => {
  const {
    attributes: {name, details, brewery_id: breweryId},
  } = beer;

  const includedBrewery = useAppSelector((state) => includedBreweriesSelector.selectById(state, breweryId));

  return (
    <Card style={{width: '700px', margin: '0 auto', marginBottom: '20px'}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brewery name: {includedBrewery?.attributes?.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BeerCard;
