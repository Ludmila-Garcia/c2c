import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';
import useApi from '../../helpers/C2cAPI';


import { PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';


const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(()=>{
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(()=>{
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort:'desc',
                limit:8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, []);

    return (

        <>  
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?"></input>
                            <select name="state">
                                {stateList.map((i, k)=>
                                        <option key={k} value={i.name}>{i.name}</option>
                                    )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className='categoryList'>
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt=""></img>
                                <span>{i.name}</span>
                            </Link>  
                        )}
                    </div>
                </PageContainer>
            </SearchArea>

        
            <PageContainer>
            
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver todos</Link>

                    <hr/>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed iaculis lorem, ac vehicula justo. Curabitur rhoncus magna ut libero commodo ullamcorper. Mauris eleifend tellus libero, nec elementum nisl fermentum et. Mauris posuere, mi nec tempor iaculis, justo tortor blandit nunc, vel pharetra nunc massa ac mi.
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;