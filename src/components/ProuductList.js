import './productList.css';
import image1 from "../img/pic1.jpg";
import image2 from "../img/pic2.jpg";
import image3 from "../img/pic3.jpg";
import image4 from "../img/pic4.jpg";
const ProductList = () => {
  return(
    <div className="productList">
<div className='card'>
  <div className='imageHolder'>
  <img src={image1}  alt='Vases, decor and more' />
    <img src={image2} alt='Cushion covers, bedsheets & more' />
    <img src={image3}  alt='Vases, decor and more' />
    <img src={image4}  alt='Vases, decor and more' />
  </div>
  <div className='textHolder'>
    <p className='title'>Vases, decor and more</p>
    <p className='subtitle'>Cushion covers, bedsheets & more</p>
    <button>Add to Cart</button>
  </div>


      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>200.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>300.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>410.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>610.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>110.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>910.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>410.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='card'>
        <p className='title'>Fugiat sit voluptate elit excepteur dolor eiusmod adipisicing ipsum labore qui sit pariatur laborum.</p>
        <p className='price'>10.00</p>
        <p className='starRating'>stars</p>
        <div className='imageHolder'>
          <img src='https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg' alt=''/>
          <br/>
          <br/>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductList;