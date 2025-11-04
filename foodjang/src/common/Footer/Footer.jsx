import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../Footer/Footer.css"
export default function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footerAria">
                    <h2>푸터 로고</h2>
                    <div className="footerMenu">
                        <ul>
                            <li>회사소개 </li>
                            <li>공고</li>
                            <li>이용안내</li>
                            <li>개인정보 처리방침</li>
                            <li>이용약관</li>
                            <li>입점문의</li>
                            <li>대량주문</li>
                            <li>1:1문의</li>
                            <li>이용후기</li>
                        </ul>
                        <div className="footerInfo">
                            <div className="call">
                                <strong>고객센터</strong>
                                <h3>1899-XXXX</h3>
                                <p>평일 10:00 ~ 17:00</p>
                                <p>점심시간 12:00 ~ 13:00</p>
                                <p>토요일/일요일/공휴일 휴무</p>
                            </div>
                            <div className="info">
                                <p>
                                    COMPANY : (주)푸드장 / OWNER : 조제효 / CALL CENTER : 1899-4797 / FAX : 02-356-8448<br/>
                                    ADDRESS : 본사 (사무실) - 서울특별시 서초구 사임당로 52(서초동) 2층 푸드장<br/>
                                    반품 주소지 (물류센터) - 경기도 고양시 일산동구 감내길 22푸드장<br/>
                                    개인정보관리책임자 : 조제효 help@foodjang.com<br/>
                                    사업자등록번호 : [188-87-00048] / 통신판매업 신고번호 : 제2023-서울서초-0995호 [사업자정보확인]<br/>
                                    입금계좌 : (주)푸드장 - 기업은행 55503373004011 (기타 은행은 고객센터로 문의)<br/>
                                </p>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </>
    )
}