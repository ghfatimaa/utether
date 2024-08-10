import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
 


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window    title={"قیمت لحظه ای تتر"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" ,background: "linear-gradient(to right, #1F2544 0 10%, #474F7A 30% 60%, #81689D 90% 100%)"}}>
        <div  className='main' style={{height:600,width:"100%",display:"inline-block",marginTop:0,marginBottom:-20,zIndex:-10}}>
          <div className='img' style={{height:30,width:30}}>

          </div>
          <div style={{float:'left' , backgroundColor:"rgba(240 125 225 / 0.7)",height:200  ,
             border:"2px solid white",display:"inline-block",
             width:300,marginRight:100,marginLeft:100,borderRadius:"25px",
             marginTop:60,textAlign:"center",fontWeight:"bolder",backdropFilter:"blur (10px)"}}>
                 
                 
                 <br /><br /><br /><br />
                 قیمت لحظه ای: {(props.price.price as number).toLocaleString("fa-IR")}
                 <br />
                 تغییرات ۲۴ ساعته:{ 
          
          "٪" +(parseFloat(props.price.diff24d) as number).toLocaleString("fa-IR") }
          <br />
          تغییرات هفتگی:{(parseFloat(props.price.diff7d) as number).toLocaleString("fa-IR")}
          <br />
          تغییرات ماهانه:{(parseFloat(props.price.diff30d)as number).toLocaleString("fa-IR")}
          
          
           

                
          </div>
          <div style={{float:'left',backgroundColor:"rgba(223 119 234 / 0.7)",height:200, border:"2px solid white",display:"inline-block",padding:"50",width:300,marginRight:100,borderRadius:"25px" , marginTop:60,textAlign:"center",fontWeight:"bolder"}}>
          <br /><br /><br /><br />
                 price: {(props.price.price as number).toLocaleString("en-US")}
                 <br />
                 Last 24h:{ 
          
          (parseFloat(props.price.diff24d) as number).toLocaleString("en-US") +"%" }
          <br />
                Last 7d:{(parseFloat(props.price.diff7d) as number).toLocaleString("en-US")}
          <br />
                Last 30d:{(parseFloat(props.price.diff30d)as number).toLocaleString("en-US")}
          
          </div>
          <div style={{float:'left' , backgroundColor:"rgba(186 62 200 / 0.7)",height:200  , border:"2px solid white",display:"inline-block",width:300,marginRight:100,marginLeft:100,borderRadius:"25px",marginTop:30,textAlign:"center",fontWeight:"bolder"}}>
          <br /><br /><br /><br />
          价格: {(props.price.price as number).toLocaleString("en-US")}
                 <br />
                 24小时变化率:{ 
          
          (parseFloat(props.price.diff24d) as number).toLocaleString("en-US") +"%" }
          <br />
          7天变化率:{(parseFloat(props.price.diff7d) as number).toLocaleString("en-US")}
          <br />
          30天变化率:{(parseFloat(props.price.diff30d)as number).toLocaleString("en-US")}
          
          </div>
          <div style={{float:'left',backgroundColor:"rgba(181 78 168 / 0.7)",height:200, border:"2px solid white",display:"inline-block",padding:"50",width:300,marginRight:100,borderRadius:"25px" , marginTop:30,textAlign:"center",fontWeight:"bolder"}}>
          <br /><br /><br /><br />
                 가격: {(props.price.price as number).toLocaleString("en-US")}
                 <br />
                 24시간 변경률:{ 
          
          (parseFloat(props.price.diff24d) as number).toLocaleString("en-US") +"%" }
          <br />
                7 일 변경률:{(parseFloat(props.price.diff7d) as number).toLocaleString("en-US")}
          <br />
                30 일 변경률:{(parseFloat(props.price.diff30d)as number).toLocaleString("en-US")}
          
          </div>
        </div>
      
      </Window>
    
     

      
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch ("https://api.tetherland.com/currencies")
    let data = await res.json()
    let price = data.data.currencies.USDT
    console.log("priseeeeeeeeeeeeeeeeeeeeeeeeeee",price )

  return {
    props: {
      data: global.QSON.stringify({
        price:price,
        session:session,
        // nlangs,
      })
    },
  }
}