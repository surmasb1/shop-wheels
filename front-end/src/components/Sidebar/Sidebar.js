import React from 'react';
import './Sidebar.css'

const Sidebar= (props)=>{
    let searchRef = React.createRef()
    let radiushRef16 = React.createRef()
    let radiushRef17 = React.createRef()
    let radiushRef18 = React.createRef()
    let radiushRef19 = React.createRef()
    let radiushRef20 = React.createRef()

  let searchWheel = props.searchWheel;
    let showToRadius = props.showToRadius

    let onsearchWheel= ()=>{
        let text = searchRef.current.value;
        searchWheel(text)
    }

    return (

        <div className='sidebar'>
            <div>
                <input placeholder="Поиск по сайту"
                       ref={searchRef}
                       onChange={onsearchWheel}
                />
            </div>
            {window.location.href.search('http://localhost:3000/wheels') === -1 ?
                <div>.</div>
                :
                <div>
                    <div>
                        <input type='checkbox' ref={radiushRef16}

                               onChange={(e) => showToRadius(16,
                                 radiushRef16.current.checked)}

                        />
                        <span>radius 16</span>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef17}
                               onChange={(e) => showToRadius(17, radiushRef17.current.checked)}
                        />
                        <span>radius 17</span>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef18}
                               onChange={(e) => showToRadius(18, radiushRef18.current.checked)}
                        />
                        <span>radius 18</span>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef19}
                               onChange={(e) => showToRadius(19, radiushRef19.current.checked)}
                        />
                        <span>radius 19</span>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef20}
                               onChange={(e) => showToRadius(20, radiushRef20.current.checked)}
                        />
                        <span>radius 20</span>
                    </div>
                </div> }
            <h5>Sidebar</h5>
        </div>
    )
}

export default Sidebar;