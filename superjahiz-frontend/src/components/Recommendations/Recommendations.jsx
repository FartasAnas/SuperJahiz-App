import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import addNumberAttribute from './addNumberAttribute'
import joinArrays from './joinArrays'
import './Recommendations.css'
import sortAndLimit from './sortAndLimit'
function Recommendations(props) {
    const [recommendations,setRecommendations] = useState()
    useEffect(() => {
    const storage = JSON.parse(window.localStorage.getItem("superJahiz.cart")).map(item => item.id)
    let recommendeProds = []
    const fetchRecommendation = async () => {
        try {
          
          for(let i=0; i< storage.length;i++)
          {
            let response = await axios.get('http://127.0.0.1:5000/association-rules/'+storage[i]);
            recommendeProds.push(...response.data)
          }
          recommendeProds = sortAndLimit(addNumberAttribute(recommendeProds).filter(item => !storage.includes(item.product_id)))



        } catch (error) {
          console.error(error);
        }
        const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:8090/product/all');
              let transformedRec = recommendeProds.map(item => {return item.product_id})
              var products = props?.products;
              var prods = products.map(item => {return {"id":item.id,"picture":getImageFromBuffer(item?.pictures[0])}}).filter(item => {return transformedRec.includes(item.id)})
              console.log("prod", prods)
              console.log("result", joinArrays(recommendeProds,prods))
              setRecommendations(joinArrays(recommendeProds,prods))
            } catch (error) {
              console.error(error);
            }
          };
          fetchData(); 
      };
      fetchRecommendation();

    

    }, [])
    
    function getImageFromBuffer(buffer) {
        const blob = new Blob([buffer]);
        const url = URL.createObjectURL(blob);
        return url;
      }

    function renderProducts(){
        return (
            <div className='recommendation-grid'>
                {recommendations?.map(item =>
                    <Link to={"/product/?id=" + item.product_id}><div className='recommendations-pictures' key={item.id} style={{backgroundImage:`url(${item.picture})`}}></div></Link>
                    
                )}
            </div>
        )
    }
  return (
    <div className='Recommendations Cart-body-details-total'>
        <div className="Cart-body-details-title">Recommended products</div>
        {renderProducts()}
        
    </div>
  )
}

export default Recommendations