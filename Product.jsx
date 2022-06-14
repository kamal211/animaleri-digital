import { cleanup } from '@testing-library/react';
import React , {useState, useEffect} from 'react';

const Product = () => {

    const[data, setdata] = useState([]);
    const[filter, setfilter] = useState(data);
    const[loading, setloading] = useState(false);
    let componentMounted = true;
    
    useEffect(() => {
      const getProducts = async() => {
 setloading(true);
 const response = await fetch("https://fakestoreapi.com/products");
 if(componentMounted){
  setdata(await response.clone().json());
  setfilter(await response.json());
  setloading(false);
  console.log(filter)
 }
 return () => {
  componentMounted = false;
 }
      }
      getProducts();
    }, []);
    

const Loading = ()  => {
  return (
    <>
    loading....
    </>
  )
}
const ShowProduct = () => {
  return (
    <>
  <div className="buttons d-flex justify-content-center mb-5 pb-5">
    <button className="btn btn-outline-dark me-2">All</button> 
    <button className="btn btn-outline-dark me-2">Men's clothing</button>
    <button className="btn btn-outline-dark me-2">Men's clothing</button>
    <button className="btn btn-outline-dark me-2">Men's clothing</button>
    <button className="btn btn-outline-dark me-2">Men's clothing</button>

  </div>
  {filter.map((product)=>{
    return (
      <>
      <div className="col-md-3">
      <div className="card" style="width: 18rem;">
  <img src={product.image} class="card-img-top" alt={product.title}/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">${product.price}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
      </>
    )
  })}
  </>
);
};
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>latest Product</h1>
         <hr />
          </div>
        </div>
      <div className=' row justify-content-center'></div>
      {loading ? <Loading/> : <ShowProduct/>}
      </div>
    </div>
  );
}

export default Product;
