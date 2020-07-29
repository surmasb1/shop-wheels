import React from 'react';
import s from './Sidebar.module.css';
import { Input  } from '@material-ui/core';


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
        <div className={s.sidebar}>
            <div className={s.search}>
                <input type='text'
                           placeholder="    Пошук "
                       ref={searchRef}
                       onChange={onsearchWheel}
                />
            </div>
            {window.location.href.search('http://localhost:3000/wheels') === -1 ?
                <div></div>
                :
                <div>
                    <div>
                        <input type='checkbox' ref={radiushRef16}

                               onChange={(e) => showToRadius(16,
                                 radiushRef16.current.checked)}
                        />
                        <text>radius 16</text>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef17}
                               onChange={(e) => showToRadius(17, radiushRef17.current.checked)}
                        />
                        <text>radius 17</text>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef18}
                               onChange={(e) => showToRadius(18, radiushRef18.current.checked)}
                        />
                        <text>radius 18</text>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef19}
                               onChange={(e) => showToRadius(19, radiushRef19.current.checked)}
                        />
                        <text>radius 19</text>
                    </div>
                    <div>
                        <input type='checkbox' ref={radiushRef20}
                               onChange={(e) => showToRadius(20, radiushRef20.current.checked)}
                        />
                        <text>radius 20</text>
                    </div>
                </div> }

        </div>
    )
}

export default Sidebar;