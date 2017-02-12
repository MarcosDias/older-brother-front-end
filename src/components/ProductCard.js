import React, {PropTypes} from 'react';
import {Card, Reveal, Image, Rating, Container, Grid}  from 'semantic-ui-react';
import './../App.css';

const truncateStr = (description, size) => {
  return description.length > size ? description.substr(0, size) + '...': description;
};

const ProductCard = ({ prodInfo }) => (
  <Card as='a'>
    <Reveal animated='fade'>
      <Reveal.Content visible>
        <Image src={prodInfo.image} />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Card>
          <Card.Content className='size-product-card'>
            <Card.Header>{prodInfo.name}</Card.Header>
            { !!prodInfo.category && <Card.Meta>{prodInfo.category}</Card.Meta> }
            <Card.Description>
              <Container textAlign='justified'>
                {truncateStr(prodInfo.description, 450)}
              </Container>
            </Card.Description>
          </Card.Content>
        </Card>
      </Reveal.Content>
    </Reveal>
    <Card.Content extra>
      <Grid>
        <Grid.Row>
          <Grid.Column width={13}>
            <Rating icon='star' defaultRating={prodInfo.rating} maxRating={5} />
          </Grid.Column>
          <Grid.Column width={3}>
            <Rating icon='heart' defaultRating={ prodInfo.favorite? 1: 0 } maxRating={1} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card.Content>
  </Card>
);

ProductCard.propsTypes = {
  prodInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number,
    favorite: PropTypes.bool
  })
};

ProductCard.defaultProps = {
  favorite: false,
  rating: 3
}
export default ProductCard;