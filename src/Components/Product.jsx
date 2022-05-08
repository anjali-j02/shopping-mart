import React from 'react';

import {
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  IconButton,
  Button,
} from '@mui/material';

import {
  Favorite as FavoriteIcon,
  ShoppingBasket as CartIcon,
} from '@mui/icons-material';

import '../Styles/Product.css';

const Products = () => {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 430, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          draggable={false}
          component="img"
          height="250"
          image="/logo512.png"
          alt=""
        />
        <p className='product__rating'>⭐️⭐️⭐️⭐️⭐️</p>
      </CardActionArea>

      <p className="product__titleOne">Fire-Bolt</p>
      <p className="product__titleTwo">Ninja Pro Max Smartwatch</p>
      <div className="product__price">
        <p className="product__titleThree">Rs. 1799</p>
        <p className="product__titleFour">Rs. 1799</p>
        <p className="product__titleFive">(Rs. 7000 OFF)</p>
      </div>

      <CardActions disableSpacing>
        <div className="home__cardAction">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <Button variant="outlined" size="small" endIcon={<CartIcon />}>
            Add to Cart
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Products;
