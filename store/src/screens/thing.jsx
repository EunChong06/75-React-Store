import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Thing = () => {
    const [details, setDetails] = useState([]);
    const params = useParams();
    const id = params.id;
    console.log('id', id);
    const fetchDetails = async () => {
        const detail = await axios({
            method: 'get',
            url: `https://fakestoreapi.com/products/${id}`
        })
        console.log('details', detail);
        if (detail != null) {
            setDetails(detail.data);
        }
    }
    useEffect(() => {
        fetchDetails();
    }, [])
    return (
        <div className="container-fluid" style={{ backgroundImage: "url(https://avatars.mds.yandex.net/i?id=d3f43c520119a47f263e5bf331978a9cef2ff16f-8526247-images-thumbs&n=13)", backgroundSize: "cover", height: "650px" }}>
          
                <div className="row text-light">
                    <div className="col-12 ">
                        {details != null ?
                            <>
                                <h3 className="text-center">{details.title}</h3>

                                <img src={details.image} alt="" width={400} height={400} />
                                <h2>cost : {details.price}$</h2>
                                <h2>{details.category}</h2>
                                <h4>{details.description}</h4>
                            </>
                            :
                            <>
                            </>
                        }
                    </div>
                </div>
        </div>
    )
}
export default Thing;