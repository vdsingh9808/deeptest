import { useEffect, useState } from "react"
import "./StudentGetData.css"
function StudentGetData(){

  const [data,setData] = useState();

  async  function getAPiData(){
         const getAwaitData = await fetch('https://fakestoreapi.com/products');
        //  console.log(await getAwaitData.json())
        const getData = await getAwaitData.json();
        
         setData(getData)
    }

    useEffect(()=>{
        getAPiData()
    },[])

    return (
        <>
        <h3>Sell 50%</h3>
       
            <div className="productSection">
            { data?.map((item,index)=>{
              
                // <img src={item.image} />
                // console.log(item.title)
                
              return  <div className="productSection">
             
              <div className="container">
                
                  <div className="productCard" key={index}>
                    <div className="productImageTitle">
                      <img src={item.image} alt={item.title} className="productImage" />
                      <h3>{item.title}</h3>
                      <span>Price: {item.price}</span>
                    </div>
                    <div className="addToCart">
                      <button>Add To Cart</button>
                    </div>
                  </div>
              
              </div>
            </div>
          
          
                            
                        
            })
        }
        </div>
        </>
    )
}
export default StudentGetData