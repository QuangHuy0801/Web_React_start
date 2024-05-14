import  { useState, useEffect } from 'react';
import { listCategory } from '../services/CategoryService';
import { listProduct } from '../services/ProductService';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ setError] = useState(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await listCategory();
                setCategories(response.data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await listProduct();
                setProducts(response.data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shop</h4>
                                <div className="breadcrumb__links">
                                    <a href="/home">Home</a> <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop__sidebar">
                                <div className="shop__sidebar__search">
                                    <form action="/search" method="GET">
                                        <input name="searchContent" type="text" placeholder="Search..." />
                                        <button type="submit">
                                            <span className="icon_search"></span>
                                        </button>
                                    </form>
                                </div>
                                <div className="shop__sidebar__accordion">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__categories">
                                                        <ul className="nice-scroll">
                                                            {categories.map(category => (
                                                                <li key={category.id}>
                                                                    <a href={`/category/${category.id}`}>{category.category_Name}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop__product__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__left">
                                            <p>Showing {products.length} results</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {products.map(product => (
                                    <div
                                className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals"
                                key={product.id}
                            >
                                <div className="product__item">
                                    <div
                                        className="product__item__pic set-bg"
                                        style={{ backgroundImage: `url(${product.productImage[0].url_Image})` }}
                                    >
                                        <span className="label">New</span>
                                        <ul className="product__hover">
                                            <li>
                                                <a href="#">
                                                    <img src="img/icon/heart.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img src="img/icon/compare.png" alt="" />
                                                    <span>Compare</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`/productDetail/${product.id}`}>
                                                    <img src="img/icon/search.png" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6>{product.product_Name}</h6>
                                        <a
                                            href={`/addToCart/${product.id}`}
                                            style={{ cursor: 'pointer' }}
                                            className="add-cart"
                                        >
                                            + Add To Cart
                                        </a>
                                        <div className="rating">
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <h5>{`${new Intl.NumberFormat('vi-VN').format(product.price)} VNĐ`}</h5>
                                    </div>
                                </div>
                            </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Shop;