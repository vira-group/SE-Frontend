import React, { Component } from 'react';

class roomImg extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		pic1: "http://127.0.0.1:8000' + JSON.parse(localStorage.getItem('items'))[0].image"
	};
	render() {
		return(
            <div >

                
                    
                    <img
										style={{ borderRadius: '50px' }}
										src={
											"https://th.bing.com/th/id/OIP.hb8061b9VazFo5euVw-SPAAAAA?w=256&h=183&c=7&r=0&o=5&pid=1.7"
										}
										className="d-block w-100"
										alt="..."
									/>
               
            
            </div>
        )
	}
}

export default roomImg;
