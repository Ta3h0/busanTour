/* API정보 받아와서 입력해주는 역할 */

const TourItem = ({article}) => {

    const {
        MAIN_TITLE, /* 컨텐츠 명 */
        TITLE, /* 제목 */
        GUGUN_NM, /* 구군 */
        HOMEPAGE_URL, /* 홈페이지 */
         MAIN_IMG_NORMAL /* 썸네일 */
    } = article;

    return(
        <div className="item">
            <div className="title">
                <span>{GUGUN_NM}</span>
                <strong>{TITLE}</strong>
                <h4>{MAIN_TITLE}</h4>
            </div>{/* .title end */}

            <img src={MAIN_IMG_NORMAL} alt={TITLE} />

            {HOMEPAGE_URL &&  <a href={HOMEPAGE_URL} target="_blank" rel="noreferrer"> 바로가기</a> } {/* && = 조건 연산자(참이면) */} {/* rel="noreferrer"은 해당 페이지로 넘어가기 위해 http에게 요청함, 해당 페이지를 신뢰할 수 없어도 해당 페이지로 이동을 시키겠다는 의미. ❗react로 a태그를 사용할때는 써줘야 오류가 안생김*/}
           
        </div> /* .item end */
    )
}

export default TourItem;