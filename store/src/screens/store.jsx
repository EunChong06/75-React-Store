import { useEffect, useState } from "react";
import axios from 'axios';
import React from 'react';
import { Skeleton } from 'antd';

const Store = () => {
    const [list, setStore] = useState([]);
    const [categories, setCategories] = useState([]);
    const Search = async () => {
        const data = await axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',
        })
        console.log('data', data);
        if (data != null) {
            setStore(data.data);
        }
    }
    useEffect(() => {
        Search();
    }, [])
    const Categorie = async () => {
        const data = await axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products/categories'
        })
        if (data.status == 200) {
            setCategories(data.data);
        }
    }
    useEffect(() => {
        Categorie();
    }, [])

    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <a href="/"><img src="https://fakestoreapi.com/icons/logo.png" width={200} height={100}></img></a>
                    </div>
                    <div className="col-md-8 mt-3">
                        <h1>Online store</h1>
                        <hr />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row my-4 text-center">
                    {categories.length > 0 ?
                        <>
                            {categories.map((item) =>


                                <div className="col-md-3"><a href={"/categories/" + item}>{item}</a></div>

                            )
                            }
                        </>
                        :
                        <>

                        </>
                    }
                </div>
                <hr />
                <div className="row">
                    {list.length > 0 ?
                        <>
                            {list.map((item) =>
                                <div className="col-md-3">
                                    <img src={item.image} width={200} height={200} />
                                    <br />
                                    <a href={"/thing/" + item.id}>{item.title}</a>
                                    <br />
                                    {item.price}$
                                </div>
                            )
                            }
                        </>
                        :
                        <>

                            <div className="col-md-3">
                                <Skeleton.Image size={'default'} active className="col-md-12"/>
                                <Skeleton className="col-md-12" />
                            </div>

                        </>
                    }
                </div>
            </div>
        </div>
    )
}
export default Store;