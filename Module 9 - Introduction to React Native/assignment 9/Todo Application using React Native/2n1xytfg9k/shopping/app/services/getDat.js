const url = 'https://eduapiprod.herokuapp.com/api/getProduct'


  import * as base from '../utils/base-service';
  
  const getProduct = () => base.get(url);
  
  export default getProduct;