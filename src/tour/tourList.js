/* tourItem에 받아온 API를 출력해주는 역할 */


import axios from "axios";
import { useState, useEffect } from "react";
import TourItem from "./tourItem";

const TourList = () => {

    const key = "wZeUZ%2FgZ5NhsFo0K8jkOXzFSj7EGpzIcpkyrin3fjDAj3G1Zx87yjwq8UvfcP2rM%2B9tHF%2FOYfERVHUZXWpz2gw%3D%3D";

    const [tour, setTour] = useState([]);

    useEffect (() => {

        //비동기 작업시 사용하는 키워드
        // async - 실행되는 함수의 앞에 위치
        // await - response = axios.에서 axios앞에
        

        const tourData = async () => {
            /* 에러가 발생하면 스크립트 중단 후 콘솔에 출력. */
            /* 에러가 없다면 try안에 코드 실행. */
            /* 에러가 있다면 catch값으로 넘어감. */
            /* finally도 있는데 이 함수는 DB에 접근하여 소스를 입출력할때 접근한 DB에 문을 닫는 등의 "정리"코드를 입력한다. 필수코드는 아니며 API가 아닌 DB에 직접 접근할때에 사용하는것이 좋아보임. */
            try {
                /* 변수값이 들어갈때는 1옆에 물결표에 있는 `를 사용해야함 */
                /* 안에서 변수를 선언할때는 ``로 요청값을 감싸주고 ${변수명}으로 선언하여 입력해주어야 "key"라는 문자열값이 아니라 변수명 key값으로 받아오게 된다. */
                const response = await axios.get(`https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${key}&numOfRows=10&pageNo=1&resultType=json`);

                setTour (response.data.getAttractionKr.item)

            } catch (error){
                console.log(error);
            }
        };

        tourData();

    }, []); /* useState값의 초기값을 넣어줌. */


    return(
        <div className="list">
            
            <div className="main_list">
                {tour.map((tourMap) => (
                    <TourItem article={tourMap}/>
                ))}
            </div> {/* .main_list end */}

        </div>/* .list end */
    )
}

export default TourList;
