import React from 'react'
import { Card,Col,Row} from 'react-bootstrap'
import img1 from '../../images/projects/12.png'
import img2 from '../../images/projects/11.png'
import img3 from '../../images/projects/9.png'
import img4 from '../../images/projects/8.png'
import img5 from '../../images/projects/7.png'
import img6 from '../../images/projects/6.png'
import './Myprojects.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  offset:400,
   duration: 2000,
 
 });


function Myprojects() {
    return (
        <div id="projects" className="mt-5">
            <h1>My projects</h1>
           <div className="container">
           <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div   class="card">
      <img className="img-fluid img" src={img1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Projects Name:KEY-MOTO</h5>
        
        <div className="d-flex justify-content-center align-item-center tech">
        <span>TECHNOLOGY:</span>
        <p class=" border border-1 rounded mx-2 p-1">Html</p>
        <p class=" border border-1 rounded mx-2 p-1">Css</p>
        <p class=" border border-1 rounded mx-2 p-1">bootstrap</p>
        
        </div>
        <div className="d-flex justify-content-center align-item-center tech">
        <p class=" border border-1 rounded mx-2 p-1">react</p>
        <p class=" border border-1 rounded mx-2 p-1">Node</p>
        <p class=" border border-1 rounded mx-2 p-1">Mongodb</p>
        <p class=" border border-1 rounded mx-2 p-1">Firebase</p>
        </div>
        <a className="btn btn-danger mx-2" target="_blank" href="https://assingment-12-2b1f1.web.app/">Live site</a>
        <a className="btn btn-danger" target="_blank" href="https://github.com/narrow-space/Key-moto-Frontend">Client Code</a>
        <a className="btn btn-danger mt-1" target="_blank" href="https://github.com/narrow-space/Key-moto-backend">Server Code</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div    class="card">
      <img className="img-fluid img" src={img2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Projects Name:ROYAL-HOTEL</h5>
        
        <div className="d-flex justify-content-center align-item-center tech">
        <span>TECHNOLOGY:</span>
        <p class=" border border-1 rounded mx-2 p-1">Html</p>
        <p class=" border border-1 rounded mx-2 p-1">Css</p>
        <p class=" border border-1 rounded mx-2 p-1">bootstrap</p>
        
        </div>
        <div className="d-flex justify-content-center align-item-center tech">
        <p class=" border border-1 rounded mx-2 p-1">react</p>
        <p class=" border border-1 rounded mx-2 p-1">Node</p>
        <p class=" border border-1 rounded mx-2 p-1">Mongodb</p>
        <p class=" border border-1 rounded mx-2 p-1">Firebase</p>
        </div>
        <a className="btn btn-danger mx-2" target="_blank" href="https://assingment-11-4623d.web.app/">Live site</a>
        <a className="btn btn-danger" target="_blank" href="https://github.com/narrow-space/royal-hotel-frontend">Client Code</a>
        <a className="btn btn-danger mt-1" target="_blank" href="https://github.com/narrow-space/royal-hotel-backend">Server Code</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div   class="card">
      <img className="img-fluid img" src={img3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Projects Name:GYM-MASTER</h5>
       
        <div className="d-flex justify-content-center align-item-center tech">
        
        <span>TECHNOLOGY:</span>
        <p class=" border border-1 rounded mx-2 p-1">Html</p>
        <p class=" border border-1 rounded mx-2 p-1">Css</p>
        <p class=" border border-1 rounded mx-2 p-1">bootstrap</p>
        
        </div>
        <div className="d-flex justify-content-center align-item-center tech">
        <p class=" border border-1 rounded mx-2 p-1">react</p>
        <p class=" border border-1 rounded mx-2 p-1">Firebase</p>
        </div>
        <a className="btn btn-danger mx-2" target="_blank" href="https://gymaster-firebase.web.app/">Live site</a>
        <a className="btn btn-danger" target="_blank" href="https://github.com/narrow-space/gym-master">Client Code</a>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div   class="card">
      <img className="img-fluid img" src={img4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project Name:UDDEMY</h5>
       
        <div className="d-flex justify-content-center align-item-center tech">
        
        <span>TECHNOLOGY:</span>
        <p class=" border border-1 rounded mx-2 p-1">Html</p>
        <p class=" border border-1 rounded mx-2 p-1">Css</p>
        <p class=" border border-1 rounded mx-2 p-1">bootstrap</p>
        
        </div>
        <div className="d-flex justify-content-center align-item-center tech">
        <p class=" border border-1 rounded mx-2 p-1">react</p>
        
        </div>
        <a className="btn btn-danger mx-2" target="_blank" href="https://uddemy.netlify.app/home">Live site</a>
        <a className="btn btn-danger" target="_blank" href="https://github.com/narrow-space/uddemy">Client Code</a>
       
      </div>
    </div>
  </div>
  <div class="col">
    <div   class="card">
      <img className="img-fluid img" src={img5} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Project Name:TempCheck</h5>
       
        <div className="d-flex justify-content-center align-item-center tech">
        
        <span>TECHNOLOGY:</span>
        <p class=" border border-1 rounded mx-2 p-1">Html</p>
        <p class=" border border-1 rounded mx-2 p-1">Css</p>
        <p class=" border border-1 rounded mx-2 p-1">RestApi</p>
        
        </div>
        
        <a className="btn btn-danger mx-2" target="_blank" href="https://cocky-bartik-f26dee.netlify.app/">Live site</a>
        
       
      </div>
    </div>
  </div>
  <div class="col">
    <div   class="card">
      <img className="img-fluid img" src={img6} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Projects Name:Aliexpress</h5>
       
        <div className="d-flex justify-content-center align-item-center tech">
        
        <span>TECHNOLOGY:</span>
        <p class=" border border-1 rounded mx-2 p-1">Html</p>
        <p class=" border border-1 rounded mx-2 p-1">Css</p>
        <p class=" border border-1 rounded mx-2 p-1">bootstrap</p>
        
        </div>
        <div className="d-flex justify-content-center align-item-center tech">
        <p class=" border border-1 rounded mx-2 p-1">react</p>
        
        </div>
        <a className="btn btn-danger mx-2" target="_blank" href="https://objective-hermann-32afe7.netlify.app/">Live site</a>
        <a className="btn btn-danger" target="_blank" href="https://github.com/narrow-space/ranga-store/tree/main/ranga-store-fix-narrow-space">Client Code</a>
       
      </div>
    </div>
  </div>
  
</div>
           </div>
        </div>
    )
}

export default Myprojects
