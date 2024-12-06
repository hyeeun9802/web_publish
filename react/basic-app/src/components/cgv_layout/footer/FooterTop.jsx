
//이미지를 보여주는 부분
export default function FooterTop({src}){
    return (
        <div class="footer-content-top">
        <div class="footer-content">
            <img src={src} 
                    alt="" />
        </div>
    </div>
    );

}