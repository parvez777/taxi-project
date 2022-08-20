import { Container } from '@mui/system';
import React from 'react';
import Card1 from './card/1.webp';
import Card2 from './card/2.webp';
import Card3 from './card/3.jpg';
import './Content.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { TextField } from '@mui/material';

const Content = () => {
    return (
        <div>
        <Container  className="contentMain">
<div className="flex">
<div className="taxiService">
<div className="card">
<div className="cardImg"><img src={Card1} alt="" /></div>
<h2>Taxi Company</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, consectetur.</p>
<strong style={{
    cursor:'pointer'
}}>Learn More</strong>
</div>
</div>
<div className="taxiService">
<div className="card">
<div className="cardImg"><img src={Card2} alt="" /></div>
<h2>Taxi Company</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, consectetur.</p>
<strong style={{
    cursor:'pointer'
}}>Learn More</strong>
</div>
</div>
<div className="taxiService">
<div className="card">
<div className="cardImg"><img src={Card3} alt="" /></div>
<h2>Taxi Company</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, consectetur.</p>
<strong style={{
    cursor:'pointer'
}}>Learn More</strong>
</div>
</div>
</div>
<p style={{
    textAlign:'center',
    marginTop:'20px'
}}>Image from <span className='span'>freepic</span> </p>





<div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}}>
<div style={{
    width:'500px',
    textAlign:'center',
    marginTop:"100px"
}}>
    <img src="/1.jpg" alt="" style={{
        width:'400px'
    }} />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
     Consequatur quo cum, ad, et architecto aspernatur repellendus <br />
      laboriosam beatae nisi illo dolore impedit sunt vel harum rerum <br />
       aliquid enim necessitatibus dolorem.</p>
</div>
<div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'300px'
}}>
    <p style={{
        fontSize:"40px",
        fontWeight:"bold",
    }}>
        Taxi <br />
        transfers <br />
        from and to <br />
        Airport.
        <div style={{
        height:'50px',
        width:'250px',
        backgroundColor:"yellow"
    }}></div>
    </p>
    
</div>
</div>


<div style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}}>
<div style={{
    width:'500px'
}}>
    <img src="/2.webp" alt="" />
</div>
<div style={{
    width:'500px',
    marginTop:'50px'
}}>
    <img src="/3.jpg" alt="" style={{
        width:'400px',
        height:'250px'
    }} />
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Vel rerum impedit excepturi temporibus distinctio eos dicta, <br />
        natus aspernatur quas facere vitae id odio facilis ratione <br />
        praesentium ipsa culpa nostrum odit!

    </p>
</div>
</div>





        </Container>
        <div style={{
    backgroundColor:'yellow',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:"90vh"
}}>
<div style={{
    marginRight:'100px',
}}>
    <img src="/4.jpg" alt="" style={{
        width:'500px'
    }} />
    <p><h1>YELLOW CAB NYC</h1>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
    Enim, explicabo perferendis. Fugiat, temporibus. Unde <br />
    assumenda at neque consequuntur inventore animi.</p>
</div>
<div > 
    <img src="/5.jfif" alt="" style={{
        width:'400px',
        height:'400px',
        zIndex:'2',
        position:'relative',
        top:'150px'
    }} />
    <div style={{
        height:'400px',
        width:'400px',
        position:'relative',
        backgroundColor:'white',
        bottom:'180px',
        left:'50px',
        zIndex:'1'
        
    }}></div>
    
</div>
</div>


<div style={{
    padding:'100px 0 0 0',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}}>

<div style={{
    width:'1200px',
    height:'900px'
}}>
<div style={{
    width:'500px',
    height:'500px',
    backgroundColor:'yellow',
    position:'relative',
}}>

</div>



<div style={{
    width:'450px',
    padding:'30px 0',
    zIndex:'3',
    position:'relative',
    bottom:'420px',
    left:'130px',
    backgroundColor: 'whitesmoke',
    textAlign:'center'

}}>
    <h1>Book you'r trip <br />
    online now</h1>
    <p>Lorem ipsum dolor sit amet consectetur <br />
    adipisicing elit. Nisi eaque illum cum, <br />
    beatae commodi recusandae dicta laborum <br />
    dolore maiores voluptas!</p>
    <br />

    image from <u style={{
        cursor:'pointer'
    }}>freepic</u>
    <br />
    <button style={{
        backgroundColor:'yellow',
        border:'none',
        color:'black',
    }}>BOOK NOW</button>

</div>



<div style={{
    position:'relative',
    zIndex:'2',
    bottom:'600px',
    left:'220px'
}}>
    <img src="/6.jpg" alt="" style={{
        width:'600px'
    }} />
</div>



<div style={{
    display:'flex',
    zIndex:'3',
    position:'relative',
    bottom:'700px',
    left:'350px'
}} >
    <div style={{
        backgroundColor:'yellow',
        width:'300px',
        height:'250px',
        flexDirection:'column',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet <br />
        consectetur adipisicing elit. <br />
        Doloribus laborum facere officiis <br />
        repudiandae optio sequi odio ab <br />
        explicabo sit hic.</p>
    </div>
    <div>
        <img src="/7.jpg" alt="" style={{
            height:'250px'
        }} />
    </div>
</div>
</div>

</div>


<div style={{
    height:'120vh'
}}>
    <img src="/8.jpg" alt="" style={{
        height:'120vh',
        width:'100vw'
    }} />
<div style={{
    zIndex:'2',
    bottom:'665px',
    left:'100px',
    width:'400px',
    textAlign:'center',
    backgroundColor:'white',
    position:'relative',

}}>
    <img src="/9.png" alt="" style={{
        width:'300px'
    }} />
    <h1>Adiministration <br />
    (702) 365-1900</h1>
    <br />
    <h1>Dispatch <br />
    (702) 369-5686</h1>
    <br />
    <h1>Lost and Found <br />
    (702) 365-1900
    </h1>
    <br />
    Image from <u style={{
        cursor:'pointer'
    }}>freepic</u>
</div>
</div>



<div style={{
    backgroundColor:'yellow',
    display:'flex',
    justifyContent:'space-evenly',
}}>
    <div style={{
        width:'400px',
        textAlign:'center'
    }}>
        <h1>GET IN TOUCH</h1>
         <br />
         <h2>
            Lorem ipsum  sit  consectetur, <br />
            adipisicing . Doloremque  <br />
            quos id maiores illo  <br />
             incidunt a debitis!
         </h2>
        <br />
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
            Consequuntur, explicabo esse sunt non, sint modi facere <br />
            excepturi soluta unde perferendis ad voluptatibus dignissimos <br />
            architecto vel asperiores ullam dolorum nihil nulla.
        </p>

<div style={{
    display:'flex',
    justifyContent:'space-evenly'
}}>
    <FacebookIcon style={{
        fontSize:'50px',
        cursor:'pointer'
    }}></FacebookIcon>
    <TwitterIcon style={{
        fontSize:'50px',
        cursor:'pointer'
    }}></TwitterIcon>
    <InstagramIcon style={{
        fontSize:'50px',
        cursor:'pointer'
    }}></InstagramIcon>
    <YouTubeIcon style={{
        fontSize:'50px',
        cursor:'pointer'
    }}></YouTubeIcon>
</div>

    </div>

    <div style={{
        width:'400px'
    }}>
    <h1>CALL  US</h1>
    <p>1 (234) 567-891</p>
    <p>1 (234) 567-981</p>
    <br />
    <h1>LOCATION</h1>
    <p>121 Rock Street,21 Avenue,
        NEW YORK, NY 92103-9000
    </p>
    <br />

    <h1>OUR TOP SERVICEC</h1>
    <p>Local Transfers <br />
    Airport Transfers <br />
    Exicutions and Tours </p>

    </div>


    <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'400px'
    }}>

    <TextField id="outlined-basic" label="Enter your name" variant="outlined" sx={{
        width:'400px',
        backgroundColor:'white'
    }} /> <br />
    <TextField id="outlined-basic" label="Enter your email" variant="outlined" sx={{
        width:'400px',
        backgroundColor:'white'
    }} /><br />
    <TextField id="outlined-basic" label="Massage" variant="outlined" sx={{
        width:'400px',
        backgroundColor:'white'
    }} />
    <br />
    <br />
    <button style={{
        width:'200px'
    }}>SUBMIT</button>
    </div>
</div>

<div style={{
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  backgroundColor: 'rgb(45, 45, 45)',
  width:'100vw',
  height:'100px',
  color:'white'
}}>
    <p>Simple text. Click to select the text box.Click again and double <br />
    click to start editing the text.</p>
</div>


        </div>
    );
};

export default Content;