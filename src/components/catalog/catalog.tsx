import './catalog.css';
import React, { useState, useEffect, useRef } from 'react';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { newsData } from './newsData';
import { NewsProps } from './catalogDataType';

const Products = () => {
    const [products, setProducts] = useState<NewsProps[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<NewsProps[]>([]);
    const [page, setPage] = useState(0);
    const itemsPerPage = 6;
    const catalogRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setProducts(newsData);
        setFilteredProducts(newsData);
    }, []);

    const currentPageData = filteredProducts.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const goToNextPage = () => {
        if ((page + 1) * itemsPerPage < filteredProducts.length) {
            setPage(prev => prev + 1);
            scrollToTop();
        }
    };

    const goToPrevPage = () => {
        if (page > 0) {
            setPage(prev => prev - 1);
            scrollToTop();
        }
    };

    const scrollToTop = () => {
        catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const applyFilter = (category: string) => {
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(p => p.category === category));
        }
        setPage(0);
        scrollToTop();
    };
    const ref = useIntersectionObserver();
    return (
        <div>
            <h1 className="container element-animation" id="zagolovokVverhu" ref={ref}
                style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="zagolovok">
                    <strong style={{ fontWeight: 600 }}>
                        Новости и Акции в ветклинике «Акелла»
                    </strong>
                </div>
            </h1>
            <br></br>
            <div className="container" id="ButtonCatalog">
                <div className="buttonFilters">
                    <button id="allButton" onClick={() => applyFilter('all')}>
                        Показать все
                    </button>
                    <button id="newsButton" onClick={() => applyFilter('news')}>
                        Новости
                    </button>
                    <button id="promotionButton" onClick={() => applyFilter('promotion')}>
                        Акции
                    </button>
                </div>
            </div>

            <div className="container">
                <div id="products" className="catalog_container" ref={catalogRef}>
                    {currentPageData.map((product, index) => (
                        <div key={index} className="card">
                            <a href={product.link} className="card-link">
                                <img src={product.image} alt="Card-image" />
                                <p className="badge">{product.badge}</p>
                                <span className="card-title">
                                    <p>{product.name}</p>
                                </span>
                                <button className="card-button material-symbols-outlined">arrow_forward</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <br />

            <div className="container">
                <div className="container btnCatalog">
                    <div style={{ width: '321px' }}>
                        <button
                            id="btnPrevPage"
                            className={`btnPrevPage ${page === 0 ? 'btn-up_hide' : ''}`}
                            onClick={goToPrevPage}
                        >
                            Показать предыдущую
                        </button>
                    </div>
                    <div style={{ width: '320px' }}>
                        <button
                            id="btnNextPage"
                            className={`btnNextPage ${(page + 1) * itemsPerPage >= filteredProducts.length ? 'btn-up_hide' : ''
                                }`}
                            onClick={goToNextPage}
                        >
                            Показать следующую
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;