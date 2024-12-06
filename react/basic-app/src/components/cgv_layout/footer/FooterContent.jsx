import { useState, useEffect } from "react";
import Logo from "../header/Logo";

export default function FooterContent({list}){

    const [companyInfo, setCompanyInfo] = useState({});
   
    useEffect(() => {
            fetch("/data/cgv_compinfo.json")
                .then(data => data.json()) //스트링 타입을 json으로 바꿔주기
                .then(jsonData => setCompanyInfo(jsonData)) // json타입으로 바뀐 데이터이다
                .catch(error => console.log())

    }, []);

    //거의 변하지 않는 내용은 const로 정의하기
    /*
    const ADDRESS=`(04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한가로동)`;
    const CEO =`홍길동`;
    const NUM = `123-12-45678`;
    */

    return(

    <div class="footer-content">
    <div class="footer-intro">
        <ul>
         {
            companyInfo.list && companyInfo.list.map((menu) => {
                  <li><a href="#">{menu.name}</a></li> 
            })
         }
        </ul>
    </div>
    <p class="p">{companyInfo.address}</p>
    <p>대표이사 : {companyInfo.ceo}, 사업자등록번호 : {NUM}, 통신판매업신고번호 : 2017-서울용산</p>
    <p>호스팅사업자 : CJ올리브네트웍스, 대표이메일 :  cjcgvmaster@cj.net</p>
    <p class="p2">
        <a href="/cgv/admin/admin_main.html" target="_parent">@</a>
        CJ CGV.All Rights Reserved</p>
</div>
);

}